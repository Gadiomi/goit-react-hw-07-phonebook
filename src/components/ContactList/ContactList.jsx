import { useSelector, useDispatch } from 'react-redux';
import css from '../../components/ContactList/ContactList.module.css';
import { getFilterValue } from 'components/redux/FilterSlice';
import { getContactsItems } from 'components/redux/ContactListSlice';
import { deleteContact } from 'components/redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContactsItems);
  const filterValue = useSelector(getFilterValue);

  const filteredContacts = [
    ...contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    ),
  ];

  return (
    <ul className={css.contact_list}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li className={css.contact_item} key={id}>
            <p className={css.contact__text}>{name}</p>
            <p className={css.contact__text}>{number}</p>
            <button
              className={css.btn}
              onClick={() => dispatch(deleteContact(id))}
            >
              Видалити
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
