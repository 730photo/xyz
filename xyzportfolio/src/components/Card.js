import React from 'react';

import CardInfo from '../components/CardInfo';

function Card(props) {
    return(
        <div className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>
            <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />

            {/* don't show info unless card is selected */}
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle}/> }
        </div>
    );
}

export default Card;