import {
  Card,
  Grid2,
  Input,
  TextField,
  CardContent,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const defaultValues = {
  name: "",
  description: "",
  items: [],
  category: "",
};

const defaultItem = {
  name: "",
  description: "",
  category: "",
  quantity: 0,
  weight: 0,
};

function NewTemplate() {
  const [formValues, setFormValues] = useState(defaultValues);
  const [itemValues, setItemValues] = useState(defaultItem);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleItemChange = (e) => {
    const { name, value } = e.target;
    setItemValues({ ...itemValues, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Submitted! ");
    console.log(formValues, itemValues);
  };
  return (
    <div>
      New Template form!
      <form onSubmit={handleSubmit}>
        <Grid2
          container
          direction='row'
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Grid2
            size={6}
            rowSpacing={5}
            rowGap={10}
          >
            <Grid2 size={6}>
              <TextField
                label={"Name"}
                required
                id='templateName'
                name='Name'
                variant='outlined'
                helperText='Name of Template'
              />
            </Grid2>

            <Grid2 size={6}>
              <TextField
                label={"Description"}
                required
                id='templateDescription'
                name='Description'
                variant='outlined'
                helperText='Description of Template'
              />
            </Grid2>
            <Grid2 size={6}>
              <TextField
                label={"Category"}
                required
                id='templateCategory'
                name='Category'
                variant='outlined'
                helperText='Category of Template'
              />
            </Grid2>
          </Grid2>
          <Grid2
            size={6}
            rowSpacing={1}
          >
            <Card>
              <CardContent>
                <Typography
                  variant='h3'
                  gutterBottom
                >
                  {formValues.name ? formValues.name : "Name"}
                </Typography>
                <Typography
                  variant='h5'
                  gutterBottom
                >
                  {formValues.description
                    ? formValues.description
                    : "Description"}
                </Typography>
                <Typography
                  variant='h5'
                  gutterBottom
                >
                  {formValues.category ? formValues.category : "Category"}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      </form>
    </div>
  );
}

export default NewTemplate;
