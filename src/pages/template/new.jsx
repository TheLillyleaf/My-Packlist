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
      <form onSubmit={handleSubmit}></form>
    </div>
  );
}

export default NewTemplate;
