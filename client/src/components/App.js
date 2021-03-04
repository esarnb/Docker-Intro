import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    
    useEffect(() => {
        async function getUsers() {
            const users = await axios.get("/users");
            console.log(users.data);
            setUsers(users.data)
        }

        getUsers()
    }, [])
    
    const [users, setUsers] = useState([]);
    console.log(users);
    
    return (
        <div>{users.map(user => <p key={user.id}>{user.name}.</p>)}</div>
    )
}

export default App;