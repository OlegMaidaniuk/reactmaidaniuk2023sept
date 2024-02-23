import {PostsContainer} from "./components/PostsContainer/PostsContainer";
//
// import {useEffect, useState} from "react";
// import {postService} from "./servicec/postService";

const App = () => {
    return (
        <div>
            <PostsContainer/>
        </div>
    );
};

export {App};








// import {useRef} from "react";
//
// const App = () => {
//     // const nam = useRef();
//     // const ag = useRef();
//     const sa = () => {
//         // e.preventDefault()
//         // console.log(name.current.value);
//         // console.log(age.current.value);
//     //     console.log(e.target.nam.value);
//     //     console.log(e.target.ag.value);
//     // }
//     // const [count, setCount] = useState(0);
//     return (
//         <div>
//             {/*<div> count:{count}</div>*/}
//             {/*<button onClick={()=>setCount(count+1)}>inc</button>*/}
//             {/*<button onClick={() => setCount(prevState => prevState + 1)}>inc</button>*/}
//             <form>
//                 <input type="text" placeholder={'name'}/>
//                 <input type="text" placeholder={'age'}/>
//                 <button onClick={sa}>save</button>
//             </form>
//         </div>
//     );
// };
// export {App};

// в апі писати неправильно але для швидкості створювали форму саме тут

// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового
// юзера постовим запитом на https://jsonplaceholder.typicode.com/users
// Зробити компонент, в якому буде форма, за допомоги якої можливо створити
// новий комментар постовим запитом на https://jsonplaceholder.typicode.com/comments
//
//  http://owu.linkpc.net/carsAPI/v1/doc
//  Реалізувати створення, видалення та оновлення машин