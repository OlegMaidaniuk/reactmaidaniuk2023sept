import {Character} from "./components/Character";
import {Character2} from "./components/Character2";

const App = () => {
    const characters =[
        {
            id:1,
            name:'Smith',
            img:'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
        },
        {
            id:2,
            name:'Rick',
            img:'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        },
        {
            id:3,
            name:'Jerri',
            img:'https://rickandmortyapi.com/api/character/avatar/692.jpeg'
        }
    ]
    return (
        <div>
            {characters.map(character=><Character characte={character} key={character.id}/>
                // <Character name={character.name} img={character.img}/>
            )
            }
        </div>
    );
};

export {App};