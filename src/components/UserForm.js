import React from 'react';

const UserForm = (props) => {


  return(
    <section>
      <form>
        <input onChange={props.onChange} type="text" placeholder="name" name="name" value={props.formData.name}/>
        <input onChange={props.onChange} type="text" placeholder="username" name="username" value={props.formData.username}/>
        <input onChange={props.onChange} type="text" placeholder="email" name="email" value={props.formData.email}/>
        <input onChange={props.onChange} type="text" placeholder="password" name="password" value={props.formData.password}/>
        <button onClick={(e) => props.onSubmit(e)}> Test </button>
      </form>
    </section>
  )
}
export default UserForm;
