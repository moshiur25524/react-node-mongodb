import React from 'react';

const AddUser = () => {

    const handleAddUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = {name, email}
        
        // Post User in the Server side

        fetch('http://localhost:5000/user',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data);
            alert('Users added Successfully')
            event.target.reset()
        })

    }
    return (
        <div>
           <h1>Please!! Add a User</h1>
           <form onSubmit={handleAddUser}>
               <input type="text" name="name" placeholder='Your Name' id="" required />
               <br />
               <input type="email" name="email" placeholder='Your Email' id=""  required/>
               <br />
               <input type="submit" value="Add User" />
           </form>
        </div>
    );
};

export default AddUser;