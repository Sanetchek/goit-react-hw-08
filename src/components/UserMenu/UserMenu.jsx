import React from "react";
import { Button, Box, Typography } from "@mui/material";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const username = "username";
  const onLogout = () => {
    return
  }

  return (
    <Box className={css.container}>
      <Typography variant="h6" className={css.greeting}>
        Howdy, {username}!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={onLogout}
        className={css.logoutButton}
      >
        Logout
      </Button>
    </Box>
  );
}

