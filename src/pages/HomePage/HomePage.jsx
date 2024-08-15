import React from "react";
import { Container, Typography, Paper } from "@mui/material";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <Container className={css.container}>
      <Paper className={css.paper}>
        <Typography variant="h1" className={css.title}>
          Welcome to Our Contact Management App!
        </Typography>
        <Typography variant="body1" className={css.paragraph}>
          This app allows you to add, delete, and view contact information once
          you are registered.
        </Typography>
        <section className={css.section}>
          <Typography variant="h2" className={css.subtitle}>
            About Us
          </Typography>
          <Typography variant="body1" className={css.paragraph}>
            We are a team of developers who created this application to help you
            manage your contacts efficiently.
          </Typography>
          <Typography variant="body1" className={css.paragraph}>
            Contact information: [email@example.com]
          </Typography>
        </section>
      </Paper>
    </Container>
  );
}
