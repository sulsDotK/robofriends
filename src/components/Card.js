import React from 'react';

const Card = ({robot}) => {
    const imgUrl = `https://robohash.org/${robot.id}?200x200`;
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={imgUrl} />
            <div>
                <h2>{robot.name}</h2>
                <p>{robot.email}</p>
            </div>
        </div>
    );
}

export default Card;