import { ButtonDelete, ContactItem, List } from "./ContactList.styled";


export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactItem id={id}>
          {name}: {number}
          <ButtonDelete type="button" onClick={()=>deleteContact(id)}>Delete</ButtonDelete>
        </ContactItem>
      ))}
    </List>
  );
};
