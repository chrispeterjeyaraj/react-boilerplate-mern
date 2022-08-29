import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Person from "@mui/icons-material/Person";

export const Dashboard = () => {
  return (
    <Container component="main" maxWidth="xs">
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "primary.main" }}><Person /></Avatar>
      <Typography component="h1" variant="h5">
       Dashboard
      </Typography>
    </Box>
  </Container>
  );
};
