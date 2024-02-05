import {Simpsons} from "./components/Simpsons/Simpsons";
import {Character} from "./components/RickandMorty/Character";

const App = () => {
    return (
        <div>
            <Character/>
            {/*<Simpsons/>*/}

        </div>
    );
};

export {App};



// import {Character} from "./components/RickandMorty/Character";
// import {Characters} from "./components/RickandMorty/Characters";
//
// const App = () => {
//     const characters =[
//         {
//             id:1,
//             name:'Smith',
//             img:'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
//         },
//         {
//             id:2,
//             name:'Rick',
//             img:'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
//         },
//         {
//             id:3,
//             name:'Jerri',
//             img:'https://rickandmortyapi.com/api/character/avatar/692.jpeg'
//         }
//     ]
//     return (
//         <div>
//             {characters.map(character=><Character characte={character} key={character.id}/>
//                 // <Character name={character.name} img={character.img}/>
//             )
//             }
//         </div>
//     );
// };
//
// export {App};