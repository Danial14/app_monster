import React from 'react';
import './styles/card-list-style.css';
import {Card} from './card/card.component';

export const CardList = (props) => {
    console.log(props);
    console.log(props.children);
return(
<div className="card-list">
{props.monsters.map(function(monster){
    return (<Card key={monster.id} monster={monster}>
    </Card>
    )
})}

</div>
);
};