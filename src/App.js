import {useState} from "react";
const App = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
        <div> count:{}</div>
            <button onClick={()=>setCount(count+1)}>inc</button>
        </div>
    );
};
export {App};

// в апі писати неправильно але для швидкості створювали форму саме тут

// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового
// юзера постовим запитом на https://jsonplaceholder.typicode.com/users
// Зробити компонент, в якому буде форма, за допомоги якої можливо створити
// новий комментар постовим запитом на https://jsonplaceholder.typicode.com/comments
//
//  http://owu.linkpc.net/carsAPI/v1/doc
//  Реалізувати створення, видалення та оновлення машин