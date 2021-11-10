import React from 'react';
import axios from 'axios';

const User = (props) => {
    const {_id,email,role} = props.data;
    const handleAdmin = () => {
        const isConfirm = window.confirm("Are You sure? Make Admin?");
        if(isConfirm){
            axios.put(`https://secret-tor-67063.herokuapp.com/users/${_id}`).then()
        }
    }
    return (
        <tr>
            <td>{email}</td>
            <td>{role}</td>
            {role === "admin" ? <td><button className="btn bg-pink" disabled>Admin</button></td> :<td><button className="btn bg-pink" onClick={handleAdmin}>Admin</button></td> }
        </tr>
    );
};

export default User;