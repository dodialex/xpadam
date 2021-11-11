import React from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import { colors } from '../../random';

const Card1 = () => {
    return (
        <div style={div}>
            <Card style={card}>
                <Card.Body>
                    <Card.Title style={title}>Bangun kesuksesanmu bersama xpadam</Card.Title>
                    <Card.Text><p style={text}>Membuat website dengan mudah, mulai diskusikan</p></Card.Text>
                    <Button style={btn}>Mulai</Button>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Card1;
const btn = {
    backgroundColor: colors.background.primary,
    color: colors.text.secondary,
    fontFamily: 'Poppins',
    fontWeight: '400',
    borderWidth: '3px',
    borderRadius: '10px',
    width: '150px',
    borderColor: colors.borderColor.secondary,
    marginBottom: '30px',
}
const text = {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: '15px',
    width: '70%',
    marginLeft: '15%',
    color: colors.text.secondary,
    paddingTop: '25px',
    paddingBottom: '25px',
    textAlign: 'center'
}
const title = {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: '30px',
    width: '80%',
    marginLeft: '10%',
    color: colors.text.secondary,
    textAlign: 'center'
}
const card = {
    width: '100%',
    backgroundColor: colors.text.primary,
    borderWidth: '0px',
    borderBottomLeftRadius: '100px',
    borderBottomRightRadius: '100px',
    borderTopRightRadius: '0px',
    borderTopLeftRadius: '0px',
    textAlign: 'center'
}
const div = {
    backgroundColor: colors.background.primary,

}
