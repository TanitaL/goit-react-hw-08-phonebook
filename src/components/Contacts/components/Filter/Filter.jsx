import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/filterSlice';
import { useGetContactsQuery } from 'redux/contacts/createApi';
import css from "./Filter.module.css";

export const Filter = () => {
  const dispatch = useDispatch();
  const inputHandler = e => {
    const { value } = e.currentTarget;
    dispatch(filterContact(value));
  };
  const { data: contacts } = useGetContactsQuery();

  return (
    <>
      {contacts?.length !== 0 ? (
        <>
          <h2>Contacts:</h2>
          <label className={css.label}>
            Find contact by name
            <input className={css.input} type="text" name="filter" onChange={inputHandler} />
          </label>
        </>
      ) : (
        <h2>No contacts</h2>
      )}
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  contacts: PropTypes.array,
};
