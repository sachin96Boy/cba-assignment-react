import { Box, Button, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab"
import { useFormik } from "formik";
import instance from "../../utils/AxiosInstance";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

interface IinitialValues {
  username: string;
  password: string;
}

function SigninForm() {
  const navigate = useNavigate();
  const handleSubmit = (values: IinitialValues, actions: any) => {
    instance.post("/login", values).then((response) => {
      if (response.status == 200) {
        // loged in, now redirect too new page
        localStorage.setItem("User", response.data["user_data"]);
        actions.setSubmitting(false);
        navigate("/dashboard");
      }
    });
  };
  const validationSchema = yup.object({
    username: yup.string().required("username is required"),
    password: yup.string().required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      noValidate
      sx={{ mt: 1 }}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="username"
        name="username"
        label="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
        autoComplete="username"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        autoComplete="current-password"
      />
      (
      {formik.isSubmitting ? (
        <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>
      ) : (
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      )}
      )
    </Box>
  );
}

export default SigninForm;
