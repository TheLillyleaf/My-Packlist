import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  CircularProgress,
  ButtonGroup,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function Templates() {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/templates")
      .then((res) => res.json())
      .then((data) => {
        setTemplates(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching templates:", err);
        setLoading(false);
      });
  }, []);

  const deleteTemplate = async (id) => {
    try {
      const result = fetch(`http://localhost:5000/templates/${id}`, {
        method: "DELETE",
      });

      if (result.ok)
        setTemplates(templates.filter((template) => template._id !== id));
      else console.error("Template not deleted");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxWidth='md'>
      <Typography
        variant='h4'
        gutterBottom
      >
        Templates
      </Typography>
      <Typography
        variant='subtitle1'
        paragraph
      >
        Create custom templates for Packlists
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <List>
          {templates.map((template) => (
            <ListItem
              key={template._id}
              disablePadding
            >
              <ListItemText
                primary={template.name}
                secondary={template.description ?? null}
              />
              <ButtonGroup>
                <Tooltip title='Edit Template'>
                  <IconButton
                    onClick={() => navigate(`/templates/${template._id}`)}
                  >
                    {" "}
                    <EditIcon></EditIcon>
                  </IconButton>
                </Tooltip>
                <Tooltip title='Delete Template'>
                  <IconButton onClick={() => deleteTemplate(template._id)}>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title='Start Packing!'>
                  <IconButton
                    onClick={() => navigate(`/packlist/new/${template._id}`)}
                  >
                    <CheckCircleOutlineIcon />
                  </IconButton>
                </Tooltip>
              </ButtonGroup>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
}

export default Templates;
