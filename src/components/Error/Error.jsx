import css from "./Error.module.css";
import clsx from "clsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Error({ message }) {
  return (
    <Box className={clsx(css.errorContainer)}>
      <Typography className={clsx(css.errorText)}>
        {message || "An error has occurred."}
      </Typography>
    </Box>
  );
}
