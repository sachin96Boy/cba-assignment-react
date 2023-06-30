import { Box } from "@mui/material";
import ResponsiveAppBar from "../components/NavBar";
import Reportlist from "../components/Reportlist";

function DashboarScreen() {
  return (
    <Box height={"100vh"} width={"100%"}>
      <ResponsiveAppBar />
      <Box height={"calc(100vh-80px)"} overflow={"auto"}>
        <Reportlist />
      </Box>
    </Box>
  );
}

export default DashboarScreen;
