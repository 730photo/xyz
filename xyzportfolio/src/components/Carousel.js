import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from '../components/Card';

import weather from '../assets/images/weather.png';
import Mamba from '../assets/images/Mamba.jpg';
import Westbrook from '../assets/images/Westbrook.jpg';


class Carousel extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'weather API',
                    // subTitle: 'check your weather forcast',
                    imgSrc: weather,
                    link: 'https://github.com/730photo/Weather-API',
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

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        // so we get the toggle function when we hover over the cards
        items[id].selected = items[id].selected ? false : true;

        // so onle one card can be toggled at a time
        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click = {(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }
    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-center">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}


export default Carousel;