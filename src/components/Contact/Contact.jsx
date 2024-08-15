import clsx from "clsx";
import css from "./Contact.module.css";
import { BiSolidUser, BiSolidPhone } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Contact({ phone: { id, name, number } }) {
  const titleItem = clsx(css.item, css.title);
  const phoneItem = clsx(css.item, css.phone);
  const dispatch = useDispatch();

  const handleDelete = (phoneId) => {
    dispatch(deleteContact(phoneId));
  };

  return (
    <>
      <Box className={css.content}>
        <Typography variant="h6" component="h2" className={css.titleItem}>
          <BiSolidUser />
          {name}
        </Typography>
        <a href={`tel:${number}`} className={css.phoneItem}>
          <BiSolidPhone />
          {number}
        </a>
      </Box>
      <Button
        variant="contained"
        color="error"
        className={css.button}
        onClick={() => handleDelete(id)}
      >
        Delete
      </Button>
    </>
  );
}
