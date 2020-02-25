import React, {Component} from 'react';

import bronny from '../assets/images/bronny.jpg';
import Mamba from '../assets/images/Mamba.jpg';
import Westbrook from '../assets/images/Westbrook.jpg';


class Carousel extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'LeBron',
                    subTitle: 'photo taken by architekxyz',
                    imgSrc: bronny,
                    link: 'hhttps://i.imgur.com/60rsvsW.jpg',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Kobe',
                    subTitle: 'photo taken by architekxyz',
                    imgSrc: Mamba,
                    link: 'https://i.imgur.com/6ljjbpt.jpg',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Russell',
                    subTitle: 'photo taken by architekxyz',
                    imgSrc: Westbrook,
                    link: 'https://i.imgur.com/Erwq9gf.jpg',
                    selected: false
                },
            ]

        }
    }

    render() {
        return(
            <p>Carousel works!</p>
        );
    }
}


export default Carousel;