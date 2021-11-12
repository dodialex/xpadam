import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { LogoBiru } from '../../assets/logo';
import { colors } from '../../random';

const Header = () => {
    return (
        <div style={div}>
            <Navbar fixed="top">
                <Container style={container}>
                    <Navbar.Brand href="#home"><img
                        src={LogoBiru}
                        width="50"
                        height="50"
                        className="justify-content-end"
                        alt="logo xpadam"
                    /></Navbar.Brand>

                </Container>
            </Navbar>

        </div>
    )
}

export default Header;
const container = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}
const div = {
    backgroundColor: colors.background.primary
}