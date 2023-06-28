import { useState } from "react";
import SigninForm from "../components/formcontrol/SigninForm";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { AiOutlineBlock } from "react-icons/ai";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import useSnackbar from "@mui/base/useSnackbar";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { Alert, Fade, Snackbar } from "@mui/material";

export default function SignInScreen() {
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const { onClickAway } = useSnackbar({
    open,
  });
  const handleClose = ()=>{
    setOpen(false);
  }

  return (
    <Container component="main" maxWidth="xs">
      {open ? (
        <ClickAwayListener onClickAway={onClickAway}>
          <Snackbar
            open={open}
            autoHideDuration={3500}
            TransitionComponent={Fade}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="error">{message}</Alert>
          </Snackbar>
        </ClickAwayListener>
      ) : null}
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
        <SigninForm setOpen={setOpen} setMessage={setMessage} />
      </Box>
    </Container>
  );
}
