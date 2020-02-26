import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props){
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-4 justify-content-center">
            <Container fluid={true}>
                <Row className="justify-content-center py-1">
                    {/* makes it responsive */}
                    <Col lg={4} md={8} sm={12}>
                    { props.title && <h1 className="display-4 font-weight-bold">{props.title}</h1> }
                    { props.subTitle && <h4 className="display-7 font-weight-light">{props.subTitle}</h4> }
                    {/* { props.text && <h3>{props.text}</h3> } */}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;