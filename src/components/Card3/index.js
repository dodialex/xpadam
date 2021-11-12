import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { CheckLottie } from '..';
import { colors } from '../../random';
import PeopleLottie from '../PeopleLottie';



const Card3 = () => {
    return (
        <div>
            <Card style={card} id='home'>
                <div>
                    <Container style={container}>
                        <Row xs={1} md={2}>
                            <Col style={textCol}>
                                <p style={textPp}>Bangun Website Terbaikmu</p>
                            </Col>
                            <Col>
                                <PeopleLottie />
                            </Col>
                        </Row>
                    </Container>



                    <Container style={textTitle}>
                        <p>xpadam Jasa Pembuatan Website</p>
                    </Container>

                    <Container style={textP}>
                        <p>Mau punya website ? percayakan pada xpadam dan dapatkan kemudahan dalam pembuatan websitemu</p>
                    </Container>

                    <Container style={containerList}>
                        <Row md={5} xs={3} >
                            <Col>
                                <div style={listCheck}>
                                    <CheckLottie />
                                    <p style={listText}>Murah</p>
                                </div>
                            </Col>

                            <Col>
                                <div style={listCheck}>
                                    <CheckLottie />
                                    <p style={listText}>Website Cantik</p>
                                </div>
                            </Col>

                            <Col>
                                <div style={listCheck}>
                                    <CheckLottie />
                                    <p style={listText}>Garansi</p>
                                </div>
                            </Col>

                            <Col>
                                <div style={listCheck}>
                                    <div style={listCheck1}>
                                        <CheckLottie />
                                    </div>
                                    <p style={listText}>Tersedia Template atau Rancang Sendiri</p>
                                </div>
                            </Col>

                            <Col>
                                <div style={listCheck}>
                                    <CheckLottie />
                                    <p style={listText}>Siap Membantu</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Card>
        </div>
    )
}

export default Card3;
const container = {
    paddingBottom: '10%'
}
const textCol = {
    display: 'flex',
    alignItems: 'center'
}
const textPp = {
    fontFamily: 'Poppins',
    fontSize: '70px',
    fontWeight: '700',
    color: colors.text.primary,
}

const textTitle = {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: '30px',
    width: '70%',
    color: colors.text.primary,
    marginBottom: '30px',
    textAlign: 'center'
}
const textP = {
    fontFamily: 'Poppins',
    fontSize: '15px',
    width: '390px',
    color: colors.text.primary,
    marginBottom: '30px',
    textAlign: 'center'
}
const containerList = {
    marginBottom: '30px'
}
const listText = {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: '15px',
    color: colors.text.primary,
    textAlign: 'left'
}
const listCheck = {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
}
const listCheck1 = {
    marginTop: '-20px'
}
const card = {
    width: '100%',
    backgroundColor: colors.background.primary,
    borderWidth: '0px',
    borderBottomLeftRadius: '100px',
    borderBottomRightRadius: '100px',
    borderTopRightRadius: '0px',
    borderTopLeftRadius: '0px'
}

