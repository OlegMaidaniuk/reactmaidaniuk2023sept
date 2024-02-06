const User = ({user}) => {
    const {id, name} = user;
    // console.log(user);
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
        </div>
    );
};

export {User};