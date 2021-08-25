import Card from './Card';
import React from 'react';

const CardList = ({robots}) => 
{
    return (
        <>
            {
                robots.map((user, i) => {
                    return <Card key={user.id} robot={user}/>
                })
            }
        </>
    );

}

export default CardList;