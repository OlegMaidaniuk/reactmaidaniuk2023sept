import {User} from "../User/User";
import {useEffect, useState} from "react";
import {axiosService} from "../services/axiosService";
import {urls} from "../../constants/urls";
const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axiosService(urls.users.base).then(value => value.data())
            .then(value => setUsers(value))}, [])
    return (<div>{users.map(user => <User key={user.id} user={user}/>)}</div>
    );};
export {Users};