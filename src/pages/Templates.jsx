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
} from "@mui/material";

function Templates() {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/templates") // Make sure this matches your backend route
      .then((res) => res.json())
      .then((data) => {
        setTemplates(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching templates:", err);
        setLoading(false);
      });
  }, []); // Run only once on mount

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
              <ListItemButton
                onClick={() => navigate(`/templates/${template._id}`)}
              >
                <ListItemText primary={template.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
}

export default Templates;
