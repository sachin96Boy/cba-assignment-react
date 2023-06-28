import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { AiOutlineBlock } from "react-icons/ai";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SigninForm from "../components/formcontrol/SigninForm";

export default function SignInScreen() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <AiOutlineBlock />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <SigninForm />
      </Box>
    </Container>
  );
}
