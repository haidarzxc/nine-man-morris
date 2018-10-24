import React, { Component } from 'react';
import '../css/App.css';
import {
  ListGroup,
  ListGroupItem,
  Image,
  Row,
  Col} from "react-bootstrap"
import board from '../images/board.png'
import inst1 from '../images/1.gif'
import inst2 from '../images/2.gif'
import inst3 from '../images/3.gif'
import inst4 from '../images/4.gif'
import inst5 from '../images/5.gif'
import inst6 from '../images/6.gif'
import inst7 from '../images/7.gif'
import inst8 from '../images/8.gif'
import inst9 from '../images/9.gif'
import inst10 from '../images/10.gif'
import inst11 from '../images/11.gif'
import inst12 from '../images/12.gif'
import inst13 from '../images/13.gif'
import inst14 from '../images/14.gif'
import inst15 from '../images/15.gif'
import inst16 from '../images/16.gif'
import inst17 from '../images/17.gif'
import inst18 from '../images/18.gif'
// import inst19 from '../images/19.gif'
// import inst20 from '../images/20.gif'

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleInst = this.handleInst.bind(this);

  }

  handleInst(event){
    console.log(event.target.id);
  }


  render() {
    return (

      <Row className="Row1">
        <Col xs={6} md={6} className="ColBoard">


          <div id="div1">
            <Image src={board} responsive className="board"/>
          </div>
        </Col>

        <Col xs={6} md={6} className="info">

        <ListGroup>

            <ListGroupItem header="Game Status." bsStyle="danger">
            Mode:
            won:
            lost:


            </ListGroupItem>

            <ListGroupItem header="Player A">

              <Image src={inst1}  width="10%" id="inst1" onClick={this.handleInst}/>
              <Image src={inst2}  width="10%" id="inst2" onClick={this.handleInst}/>
              <Image src={inst3}  width="10%" id="inst3" onClick={this.handleInst}/>
              <Image src={inst4}  width="10%" id="inst4" onClick={this.handleInst}/>
              <Image src={inst5}  width="10%" id="inst5" onClick={this.handleInst}/>
              <Image src={inst6}  width="10%" id="inst6" onClick={this.handleInst}/>
              <Image src={inst7}  width="10%" id="inst7" onClick={this.handleInst}/>
              <Image src={inst8}  width="10%" id="inst8" onClick={this.handleInst}/>
              <Image src={inst9}  width="10%" id="inst9" onClick={this.handleInst}/>

            </ListGroupItem>


          <ListGroupItem header="Player B">

            <Image src={inst10}  width="10%" id="inst10" onClick={this.handleInst}/>
            <Image src={inst11}  width="10%" id="inst11" onClick={this.handleInst}/>
            <Image src={inst12}  width="10%" id="inst12" onClick={this.handleInst}/>
            <Image src={inst13}  width="10%" id="inst13" onClick={this.handleInst}/>
            <Image src={inst14}  width="10%" id="inst14" onClick={this.handleInst}/>
            <Image src={inst15}  width="10%" id="inst15" onClick={this.handleInst}/>
            <Image src={inst16}  width="10%" id="inst16" onClick={this.handleInst}/>
            <Image src={inst17}  width="10%" id="inst17" onClick={this.handleInst}/>
            <Image src={inst18}  width="10%" id="inst18" onClick={this.handleInst}/>

          </ListGroupItem>

        </ListGroup>


        </Col>


      </Row>


    )
  }
}

export default App;
