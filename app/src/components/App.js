import React, { Component } from 'react';
import '../css/App.css';
import {
  ListGroup,
  ListGroupItem,
  Image,
  Row,
  Col} from "react-bootstrap"

import { connect  } from 'react-redux';

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
import loc2 from '../images/loc2.png'
import loc1 from '../images/loc1.png'

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleInst = this.handleInst.bind(this);
    this.handleViewLoc = this.handleViewLoc.bind(this);
    this.handleHideLoc = this.handleHideLoc.bind(this);
  }

  handleInst(event){
    console.log(event.target.id);
  }

  handleViewLoc(event){
    this.props.dispatch({ type: 'SHOW_LOC' ,loc:event.target.id});
  }

  handleHideLoc(event){
    this.props.dispatch({ type: 'HIDE_LOC' ,loc:event.target.id});
  }


  render() {
    return (

      <Row className="Row1">
        <Col xs={6} md={6} className="ColBoard">


          <div id="div1">


            <Image src={board} responsive className="board"/>



            {/* Loc1A */}
            <Image src={this.props.App.locs.Loc1A==true? loc2:loc1}
                  width="8%"
                  id="Loc1A"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>

            {/* Loc4A */}
            <Image src={this.props.App.locs.Loc4A==true? loc2:loc1}
                  width="8%"
                  id="Loc4A"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>

          {/* Loc7A */}
          <Image src={this.props.App.locs.Loc7A==true? loc2:loc1}
                width="8%"
                id="Loc7A"
                onMouseEnter={this.handleViewLoc}
                onMouseLeave={this.handleHideLoc}
                onClick={this.handleBoardInst}/>

            {/* Loc2B */}
            <Image src={this.props.App.locs.Loc2B==true? loc2:loc1}
                  width="8%"
                  id="Loc2B"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>

            {/* Loc4B */}
            <Image src={this.props.App.locs.Loc4B==true? loc2:loc1}
                  width="8%"
                  id="Loc4B"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>

            {/* Loc6B */}
            <Image src={this.props.App.locs.Loc6B==true? loc2:loc1}
                  width="8%"
                  id="Loc6B"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>

            {/* Loc3C */}
            <Image src={this.props.App.locs.Loc3C==true? loc2:loc1}
                  width="8%"
                  id="Loc3C"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>

            {/* Loc4C */}
            <Image src={this.props.App.locs.Loc4C==true? loc2:loc1}
                  width="8%"
                  id="Loc4C"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>

            {/* Loc5C */}
            <Image src={this.props.App.locs.Loc5C==true? loc2:loc1}
                  width="8%"
                  id="Loc5C"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>

            {/* Loc1D */}
            <Image src={this.props.App.locs.Loc1D==true? loc2:loc1}
                  width="8%"
                  id="Loc1D"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>

            {/* Loc2D */}
            <Image src={this.props.App.locs.Loc2D==true? loc2:loc1}
                  width="8%"
                  id="Loc2D"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>

            {/* Loc3D */}
            <Image src={this.props.App.locs.Loc3D==true? loc2:loc1}
                  width="8%"
                  id="Loc3D"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>

            {/* Loc5D */}
            <Image src={this.props.App.locs.Loc5D==true? loc2:loc1}
                  width="8%"
                  id="Loc5D"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>

            {/* Loc6D */}
            <Image src={this.props.App.locs.Loc6D==true? loc2:loc1}
                  width="8%"
                  id="Loc6D"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>

            {/* Loc7D */}
            <Image src={this.props.App.locs.Loc7D==true? loc2:loc1}
                  width="8%"
                  id="Loc7D"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>

            {/* Loc3E */}
            <Image src={this.props.App.locs.Loc3E==true? loc2:loc1}
                  width="8%"
                  id="Loc3E"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>

            {/* Loc4E */}
            <Image src={this.props.App.locs.Loc4E==true? loc2:loc1}
                  width="8%"
                  id="Loc4E"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>

            {/* Loc5E */}
            <Image src={this.props.App.locs.Loc5E==true? loc2:loc1}
                  width="8%"
                  id="Loc5E"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>

            {/* Loc2F */}
            <Image src={this.props.App.locs.Loc2F==true? loc2:loc1}
                  width="8%"
                  id="Loc2F"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>

            {/* Loc4F */}
            <Image src={this.props.App.locs.Loc4F==true? loc2:loc1}
                  width="8%"
                  id="Loc4F"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>

            {/* Loc6F */}
            <Image src={this.props.App.locs.Loc6F==true? loc2:loc1}
                  width="8%"
                  id="Loc6F"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>

            {/* Loc1G */}
            <Image src={this.props.App.locs.Loc1G==true? loc2:loc1}
                  width="8%"
                  id="Loc1G"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>

            {/* Loc4G */}
            <Image src={this.props.App.locs.Loc4G==true? loc2:loc1}
                  width="8%"
                  id="Loc4G"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>

            {/* Loc7G */}
            <Image src={this.props.App.locs.Loc7G==true? loc2:loc1}
                  width="8%"
                  id="Loc7G"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>







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

              <Image src={inst1}  width="6%" id="inst1" onClick={this.handleInst}/>
              <Image src={inst2}  width="10%" id="inst2" onClick={this.handleInst}/>
              <Image src={inst3}  width="10%" id="inst3" onClick={this.handleInst}/>
              <Image src={inst4}  width="14%" id="inst4" onClick={this.handleInst}/>
              <Image src={inst5}  width="10%" id="inst5" onClick={this.handleInst}/>
              <Image src={inst6}  width="10%" id="inst6" onClick={this.handleInst}/>
              <Image src={inst7}  width="14%" id="inst7" onClick={this.handleInst}/>
              <Image src={inst8}  width="8%" id="inst8" onClick={this.handleInst}/>
              <Image src={inst9}  width="12%" id="inst9" onClick={this.handleInst}/>

            </ListGroupItem>


          <ListGroupItem header="Player B">

            <Image src={inst10}  width="14%" id="inst10" onClick={this.handleInst}/>
            <Image src={inst11}  width="13%" id="inst11" onClick={this.handleInst}/>
            <Image src={inst12}  width="13%" id="inst12" onClick={this.handleInst}/>
            <Image src={inst13}  width="13%" id="inst13" onClick={this.handleInst}/>
            <Image src={inst14}  width="8%" id="inst14" onClick={this.handleInst}/>
            <Image src={inst15}  width="8%" id="inst15" onClick={this.handleInst}/>
            <Image src={inst16}  width="8%" id="inst16" onClick={this.handleInst}/>
            <Image src={inst17}  width="11%" id="inst17" onClick={this.handleInst}/>
            <Image src={inst18}  width="10%" id="inst18" onClick={this.handleInst}/>

          </ListGroupItem>

        </ListGroup>


        </Col>


      </Row>


    )
  }
}

function mapStateToProps(state) {
  return {
    App: state.App
  };
}//end of mapStateToProps

export default connect(mapStateToProps)(App)
