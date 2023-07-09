import { Box, CircularProgress, Typography } from "@mui/material";

function LoadingSpinner() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <CircularProgress />
      <Typography variant="h5">This might take a while, please wait...</Typography>
    </Box>
  );
}

export default LoadingSpinner;
