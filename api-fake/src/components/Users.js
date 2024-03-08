import { useEffect, useState } from 'react';
import axios from 'axios';

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        axios.get('https://reqres.in/api/users?page=2')
            .then((response) => {
                console.log(response.data);
                setUsers(response.data.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <>
            {users.map(user => (
                <div>
                    <img src={user.avatar} alt='User Avatar' />
                    <h3>nome: {user.first_name}</h3>
                    <p>
                        email : {user.email}
                    </p>
                </div>
            ))
            }
        </>
    )
}

export default Users;