import {
  useSelector
} from "react-redux";
import {
  selectErrorContacts,
  selectLoadingContacts
} from "../../redux/contacts/selectors";

import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import css from './ContactsPage.module.css';

export default function ContactsPage() {
  const isLoading = useSelector(selectLoadingContacts);
  const isError = useSelector(selectErrorContacts);

  return (
    <>
      <Typography
        variant="h1"
        component="h1"
        align="center"
        className={css.heading}
      >
        Phonebook
      </Typography>

      <Box className={css.wrap}>
        <ContactForm />
        <SearchBox />
      </Box>
      {isLoading && <Loading />}
      {isError && (
        <Error message="Something went wrong. Please try again later." />
      )}
      <ContactList />
    </>
  );
};
