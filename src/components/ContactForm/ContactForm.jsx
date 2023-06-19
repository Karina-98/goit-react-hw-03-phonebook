import { nanoid } from 'nanoid';
import React from 'react';
import { ButtonAdd, Conteiner, Form, Input } from './ContactForm.styled';

export class ContactForm  extends React.Component{
  nanoIdName = nanoid();
 nanoIdNumber = nanoid();

 state = {
    name: '',
    number: '',
  };

  handelChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  
  };

  handelSubmit = e => {
    e.preventDefault();
    this.props.createUser({
        name: this.state.name,
        number: this.state.number,
    })
    this.reset();
  };

  reset = () => {
    this.setState({ number: '', name: '' });
  };


render(){
    const { name, number } = this.state;
    return (
        <Conteiner>
          <Form onSubmit={this.handelSubmit}>
            <label htmlFor={this.nanoIdName}>
              Name
              <Input placeholder="Please enter name"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={this.handelChange}
                value={name}
                required
              />
            </label>
            <label htmlFor={this.nanoIdNumber}>
              Number
              <Input
              placeholder="Please enter number"
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                onChange={this.handelChange}
                value={number}
                required
              />
            </label>
            <ButtonAdd type="submit">Add Contact</ButtonAdd>
          </Form>
        </Conteiner>
      );
}
 
};
