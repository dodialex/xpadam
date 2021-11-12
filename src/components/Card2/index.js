import React from 'react'
import { Col, Card, Row, Container } from 'react-bootstrap';
import { colors } from '../../random';

const Card2 = () => {
    return (
        <div style={div}>
            <Container fluid style={container}>
                <p style={textP}>Pilihan Template</p>
                <Container >
                    <Row style={row}>
                        <Col >
                            <p style={textP1}>Design A</p>
                            <Card style={card}>
                                <Card.Img src="" />
                            </Card>
                        </Col>
                        <Col>
                            <p style={textP1}>Design B</p>
                            <Card style={card}>
                                <Card.Img src="" />
                            </Card>
                        </Col>
                        <Col>
                            <p style={textP1}>Design C</p>
                            <Card style={card}>
                                <Card.Img src="" />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Card2;
const div = {
    backgroundColor: colors.background.primary,

}
const container = {
    backgroundColor: colors.background.secondary,
    borderColor: colors.background.secondary,
    borderWidth: '0px',
    borderBottomLeftRadius: '100px',
    borderBottomRightRadius: '100px',
    borderTopRightRadius: '0px',
    borderTopLeftRadius: '0px',
    paddingBottom: '30px',
}
const textP = {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '40px',
    fontWeight: '700',
    color: colors.text.primary,
    marginTop: '30px'
}
const row = {
    marginLeft: '20px'
}
const textP1 = {
    fontFamily: 'Poppins',
    fontSize: '15px',
    fontWeight: '500',
    color: colors.text.primary,
    marginLeft: '115px',
    marginTop: '15px'
}
const card = {
    width: '300px',
    height: '350px',
    borderRadius: '20px',
    borderWidth: '0px',
    backgroundColor: colors.background.primary,
}
