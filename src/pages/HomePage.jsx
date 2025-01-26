import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>HomePage</h1>

      <p>Home page of PackList!! </p>

      <Button
        onClick={() => navigate("/templates")}
        variant='contained'
      >
        View templates
      </Button>
      <Button
        onClick={() => navigate("/packlist")}
        variant='contained'
      >
        Start Packing!
      </Button>
    </div>
  );
}

export default HomePage;
