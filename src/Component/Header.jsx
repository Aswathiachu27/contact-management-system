import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar style={{background: "silver",}}>
        <Container >
          <Navbar.Brand href="/Landing">
          < i className="fa-solid fa-id-card-clip fa-2xl" style={{color: "#080808",}} />
            {' '}
             Contact 
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header