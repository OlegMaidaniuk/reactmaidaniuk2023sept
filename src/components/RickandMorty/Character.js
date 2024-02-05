const Character =
    // ({img, name})
    ({characte}) => {
        const {name, img} = characte;
        // const {img, name} = props;
        // console.log(props);
        return (
            <div>
                <h1>{name}</h1>
                <img
                    src={img}
                    alt={name}
                />
            </div>
        );
    };

export {Character};