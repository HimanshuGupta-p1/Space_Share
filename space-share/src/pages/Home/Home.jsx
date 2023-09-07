import React from 'react'
import './Home.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typical from 'react-typical';
import MetamaskLogo from '../../assets/Space_Share_logo.png'


const Home = () => {
  return (
    <Container className='app-1'>
      <Row className='contains-1'>
      
          <Col lg ={{span:5, offset:2}} style={{width:"55rem"}} className='glow-text'>
            <h1 style={{ margin:"20px" ,fontWeight:"bold" ,fontSize:"10vh" }}>Space Share <img src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif" style={{width:"50px",height:"50px"}} alt="" /></h1>
            <h1 style={{margin:"20px 20px", fontWeight:"bold", fontSize:"8vh", wordwrap:"break-word"}}> {' '}
            <Typical
                        loop={Infinity}
                        wrapper='b'
                        steps={
                            [
                                'Disk Space Rental System 💿',
                                2000,
                                'Secure',
                                2000,
                                'Blockchain',
                                2000,
                                'Decentralized Storage',
                                2000,
                                'Transparency',
                                2000,
                                

                                
                            ]
                        }
                      />
            </h1>
            <br/>
            
            
          </Col>
    
        <Col lg={3} style={{display:"flex-end"}} className="float-center">
                <div className="glow-1 vert-move-1">
          <img src={MetamaskLogo} alt="meta mask logo" className="nameimg-1 img-fluid" />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Home