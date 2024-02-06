import {User} from "../User/User";
import {useEffect, useState} from "react";
import {userService} from "../services/userService";
import {UserDetails} from "../UserDetails/UserDetails";
import css from './Users.module.css'

const Users = () => {
    let [users, setUsers] = useState([])
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, []);

    const getCurrentUser = (user) => {
        setUserDetails(user)
    }

    return (
        <div className={css.Users}>
            <div>
                {users.map(user => <User key={user.id} user={user} getCurrentUser={getCurrentUser}/>)}
            </div>
            <hr/>
            {userDetails && <UserDetails userDetails={userDetails}/>}
        </div>
    );
};

export {Users};
// import {User} from "../User/User";
// import {useEffect, useState} from "react";
// import {axiosService} from "../services/axiosService";
// import {urls} from "../../constants/urls";
// const Users = () => {
//     const [users, setUsers] = useState([]);
//     useEffect(() => {
//         axiosService(urls.users.base).then(value => value.data)
//             }, [])
//     return (<div>{users.map(user => <User key={user.id} user={user}/>)}</div>
//     );};
// export {Users};