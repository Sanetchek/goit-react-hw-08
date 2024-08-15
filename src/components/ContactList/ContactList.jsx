import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import css from "./ContactList.module.css";
import clsx from "clsx";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";

import Contact from "../Contact/Contact";

export default function ContactList() {
  // filter array of contacts
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <List className={css.list}>
      {visibleContacts.map((phone) => (
        <ListItem key={phone.id} className={clsx(css.listItem)}>
          <Paper className={clsx(css.listItem)}>
            <Contact phone={phone} />
          </Paper>
        </ListItem>
      ))}
    </List>
  );
}
