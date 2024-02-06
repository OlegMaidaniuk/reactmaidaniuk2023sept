import {User} from "../User/User";
import {useEffect, useState} from "react";

const Users = () => {
    // const state = useState([])
    // const [users, setUsers] = state;
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value=>setUsers(value))
    },[])
    return (
        <div>
            {/*{console.log(uu)}*/}
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};