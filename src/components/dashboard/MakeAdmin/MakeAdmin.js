import React, { useEffect, useState } from 'react';
import axios from 'axios';
import User from './User/User';

const MakeAdmin = () => {
    const [users, setUsers] = useState([]);

    useEffect( () => {
        axios.get('https://secret-tor-67063.herokuapp.com/users')
            .then(res => setUsers(res.data))
    },[users]);
    return (
        <div>
            <div className="row">
                <div className="col">
                    <h5 className="card-header text-center display-4 bg-light-pink mb-3">MAKE ADMIN</h5>
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">Email</th>
                                <th scope="col">Role</th>
                                <th scope="col">Make Admin</th>
                                </tr>
                            </thead>
                            <tbody> 
                                {
                                    users.map(user => <User key={user._id} data={user}></User>)
                                }    
                            </tbody>
                        </table>
                    </div>
                </div>   
            </div>
        </div>
    );
};

export default MakeAdmin;