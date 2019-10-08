import React from 'react';

const UserForm = (props) => {

  const tes = (e) => {
    e.preventDefault()
    console.log(e.target);
    console.log('props', props);
  }

  const test2 = () => {
    console.log('yo');
  }

  return(
    <section>
      <form onSubmit={test2}>
        <input type="text" placeholder="name" name="name" value={props.formData.name}/>
        <input type="text" placeholder="username" name="username" value={props.formData.username}/>
        <input type="text" placeholder="email" name="email" value={props.formData.email}/>
        <input type="text" placeholder="password" name="password" value={props.formData.password}/>
        <button onClick={(e) => tes(e)}> Test </button>
      </form>
    </section>
  )
}
export default UserForm;
