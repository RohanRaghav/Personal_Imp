import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
function SignUp({ onSignUp }) {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const theme = createTheme();
const handleSignUp = ()=>
{
    
}
const handleSubmit = (event) => {
    event.preventDefault();
    handleSignUp();
  };
// Render the component with Material-UI styles and components
return (
  <div>
  <br />
  <br />
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container component="main" maxWidth="xs">
      <div>
        {/* Typography for the "Sign in" heading */}
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {/* Form element */}
        <form onSubmit={handleSubmit}>
          {/* Email input field */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* Password input field */}
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* "Remember me" checkbox */}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </form>
        {/* Links for "Forgot password?" and "Sign Up" */}
      </div>
    </Container>
  </ThemeProvider></div>
);
}

export default SignUp; // Export the SignIn component for use in other parts of the application
