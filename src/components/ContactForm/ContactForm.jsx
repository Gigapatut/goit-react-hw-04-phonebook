import {useState} from 'react';
import css from './ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(name, number)
    
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.form}>
        Name
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={handleChange}
        />
      </label>

      <label className={css.form}>
        Number
        <input
          type="tel"
          name="number"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button className={css.add} type="submit">
        Add contact
      </button>
    </form>
  );
};

// ------------------------------------------------------

// import React from 'react';
// import css from './ContactForm.module.css';

// class OldContactForm extends React.Component {
//   state = {
//     contacts: [],
//     name: '',
//     number: '',
//   };

//   handleChange = event => {
//     const { name, value } = event.currentTarget;

//     this.setState({ [name]: value });
//   };
//   handleSubmit = event => {
//     event.preventDefault();

//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     return (
//       <form className={css.form} onSubmit={this.handleSubmit}>
//         <label className={css.form} htmlFor={this.nameInputId}>
//           Name
//           <input
//             type="text"
//             name="name"
//             required
//             value={this.state.name}
//             onChange={this.handleChange}
//           />
//         </label>

//         <label className={css.form} htmlFor={this.numberInputId}>
//           Number
//           <input
//             type="tel"
//             name="number"
//             required
//             value={this.state.number}
//             onChange={this.handleChange}
//           />
//         </label>
//         <button className={css.add} type="submit">Add contact</button>
//       </form>
//     );
//   }
// }

// export default OldContactForm;