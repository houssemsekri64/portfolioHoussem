import {
  Box,
  Button,
  Container,
  IconButton,
  Typography,
  TextField,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import emailjs from "emailjs-com";
import React from "react";
import PhoneAndroidRoundedIcon from "@mui/icons-material/PhoneAndroidRounded";
import { Mail } from "@mui/icons-material";
import { useState } from "react";
import { getLanguage } from "../../utils/getLanguage";
import { useRef } from "react";
const Contact = ({ sectionRef }) => {
  const form = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!name || !email || !message) {
      setErrors({
        ...errors,
        name: !name ? "Name is required" : "",
        email: !email ? "Email is required" : "",
        message: !message ? "Message is required" : "",
      });
      return;
    }

    // Validate email
    if (!validateEmail(email)) {
      setErrors({
        ...errors,
        email: "Please enter a valid email address",
      });
      return;
    }

    // Submit form data
    emailjs
      .sendForm(
        "service_8wwp0ee",
        "template_lu7v5qi",
        form.current,
        "YY5t5wNH6eTceNN2b"
      )
      .then((res) => setOpen(true));

    // Clear form fields
    setName("");
    setEmail("");
    setMessage("");
    setErrors({});
  };
  const lang = getLanguage();
  return (
    <Container maxWidth="xl" sx={{ marginTop: 30 }} ref={sectionRef}>
      <Box textAlign={"center"} mb={10} fontSize={"3rem"}>
        <Typography variant="h2" color={"primary.light"} fontSize={"3rem"}>
          {lang == "fr" ? "Entrer en contact" : "Get In Touch"}
        </Typography>
        <Box
          display={"flex"}
          gap={3}
          justifyContent={"center"}
          mt={5}
          flexDirection={{ md: "row", xs: "column" }}
        >
          <Button variant="link" href="tel:+216 56476529">
            <IconButton>
              {" "}
              <PhoneAndroidRoundedIcon />
            </IconButton>
            <Typography letterSpacing={2}>+216 56476529</Typography>
          </Button>
          <Button
            variant="link"
            href="mailto:sekrihoussem.work@gmail.com"
            sx={{ textTransform: "lowercase" }}
          >
            <IconButton>
              {" "}
              <Mail />
            </IconButton>
            <Typography letterSpacing={2}>
              sekrihoussem.work@gmail.com
            </Typography>
          </Button>
        </Box>
      </Box>

      <Paper
        ref={form}
        component={"form"}
        onSubmit={handleSubmit}
        sx={{
          padding: 2,
          width: { xs: "100%", md: "70%" },
          margin: "auto",
          backgroundColor: "primary.dark",
        }}
      >
        <Box
          width={"100%"}
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
          gap={1}
          my={2}
        >
          <TextField
            color="secondary"
            label={lang == "fr" ? "Nom" : "name"}
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={Boolean(errors.name)}
            helperText={errors.name}
            fullWidth
            variant="filled"
            size="medium"
            sx={{
              "& label": {
                color: "white",
              },
              "&:focus-within label": {
                color: "white",
              },
            }}
          />
          <TextField
            label="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(errors.email)}
            helperText={errors.email}
            variant="filled"
            fullWidth
            color="secondary"
            sx={{
              "& label": {
                color: "white",
              },
              "&:focus-within label": {
                color: "white",
              },
            }}
          />
        </Box>
        <Box width={"100%"} my={2}>
          <TextField
            name="message"
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            error={Boolean(errors.message)}
            helperText={errors.message}
            multiline
            rows={4}
            variant="filled"
            fullWidth
            color="secondary"
            sx={{
              "& label": {
                color: "white",
              },
              "&:focus-within label": {
                color: "white",
              },
            }}
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ height: "50px" }}
        >
          {lang == "fr" ? "Envoyer" : "Submit"}
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Your message send with success
          </Alert>
        </Snackbar>
      </Paper>
    </Container>
  );
};

export default Contact;
