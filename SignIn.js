import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Define the SignIn component, which accepts a callback function 'onSignIn'
function SignIn({ onSignIn }) {
  // State variables to store user input (email and password)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle user sign-in
  const handleSignIn = () => {
    // Perform your authentication logic here.
    // For simplicity, this example assumes the user is authenticated when both email and password are non-empty.
    if (email.trim() !== "" && password.trim() !== "") {
      onSignIn(); // Call the provided onSignIn callback
    }
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    handleSignIn(); // Call the handleSignIn function to attempt sign-in
  };

  // Create a theme
  const theme = createTheme();

  // Render the component with Material-UI styles and components
  return (
    <div>
    <br />
    <br />
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        {/* Sign-in form */}
        <div>
          {/* Typography for the "Sign in" heading */}
          <Typography component="h1" variant="h5">
            Sign in
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
            {/* Sign-in button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </form>
          {/* Links for "Forgot password?" and "Sign Up" */}
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </ThemeProvider></div>
  );
}

export default SignIn; // Export the SignIn component for use in other parts of the application
