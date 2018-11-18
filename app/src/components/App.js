import React, { Component } from 'react';
import '../css/App.css';
import {
  ListGroup,
  ListGroupItem,
  Image,
  Row,
  Col,
  Button} from "react-bootstrap"

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

function isInst(player,inst){
  if(player===0){
    if(inst==="inst1" ||
      inst==="inst2" ||
      inst==="inst3" ||
      inst==="inst4" ||
      inst==="inst5" ||
      inst==="inst6" ||
      inst==="inst7" ||
      inst==="inst8" ||
      inst==="inst9"){
        return true
    }
  }
  else if(player===1){
    if(inst==="inst10" ||
      inst==="inst11" ||
      inst==="inst12" ||
      inst==="inst13" ||
      inst==="inst14" ||
      inst==="inst15" ||
      inst==="inst16" ||
      inst==="inst17" ||
      inst==="inst18"){
        return true
    }
  }
  return false
}

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleInst = this.handleInst.bind(this);
    this.handleViewLoc = this.handleViewLoc.bind(this);
    this.handleHideLoc = this.handleHideLoc.bind(this);
    this.handleBoardInst = this.handleBoardInst.bind(this);
    this.resolveImage=this.resolveImage.bind(this);
    this.HandleGameStart=this.HandleGameStart.bind(this);


  }



  handleInst(event){
    if(this.props.App.turn===0 && isInst(0,event.target.id)){
      this.props.dispatch({type: "SET_INST",inst:event.target.id})
      this.props.dispatch({type: "HIGHLIGHT_MAN",inst:event.target.id})
    }
    else if(this.props.App.turn===1 && isInst(1,event.target.id)){
      this.props.dispatch({type: "SET_INST",inst:event.target.id})
      this.props.dispatch({type: "HIGHLIGHT_MAN",inst:event.target.id})
    }

  }

  handleViewLoc(event){
    this.props.dispatch({ type: 'SHOW_LOC' ,loc:event.target.id});
  }

  handleHideLoc(event){
    this.props.dispatch({ type: 'HIDE_LOC' ,loc:event.target.id});
  }

  handleBoardInst(event){
    if(this.props.App.inst!==null){
      // console.log(event.target.id);
      // console.log(this.props.App.inst);
      console.log(this.props.App.instHolders);
      this.props.dispatch({ type: 'RENDER_INST' ,loc:event.target.id,inst:this.props.App.inst});
      try{
        document.getElementById(this.props.App.inst).remove()
      }
      catch(err){
      }

      if(this.props.App.turn===0){
        this.props.dispatch({ type: 'SET_TURN',val:1});
        this.props.dispatch({ type: 'HIGHLIGHT_PA',val:false});
        this.props.dispatch({ type: 'HIGHLIGHT_PB',val:true});
      }
      else if(this.props.App.turn===1){
        this.props.dispatch({ type: 'SET_TURN',val:0});
        this.props.dispatch({ type: 'HIGHLIGHT_PA',val:true});
        this.props.dispatch({ type: 'HIGHLIGHT_PB',val:false});
      }
    }
  }

  HandleGameStart(evt){
    let rand=Math.floor(Math.random() * (2 - 0) );
    this.props.dispatch({ type: 'SET_TURN',val:rand});
    if(rand===0){
      this.props.dispatch({ type: 'HIGHLIGHT_PA',val:true});
      this.props.dispatch({ type: 'HIGHLIGHT_PB',val:false});
    }
    else if(rand===1){
      this.props.dispatch({ type: 'HIGHLIGHT_PA',val:false});
      this.props.dispatch({ type: 'HIGHLIGHT_PB',val:true});
    }
  }

  resolveImage(inst){
    if(inst==="inst1"){
      return inst1
    }
    else if(inst==="inst2"){
      return inst2
    }
    else if(inst==="inst3"){
      return inst3
    }
    else if(inst==="inst4"){
      return inst4
    }
    else if(inst==="inst5"){
      return inst5
    }
    else if(inst==="inst6"){
      return inst6
    }
    else if(inst==="inst7"){
      return inst7
    }
    else if(inst==="inst8"){
      return inst8
    }
    else if(inst==="inst9"){
      return inst9
    }
    else if(inst==="inst10"){
      return inst10
    }
    else if(inst==="inst11"){
      return inst11
    }
    else if(inst==="inst12"){
      return inst12
    }
    else if(inst==="inst13"){
      return inst13
    }
    else if(inst==="inst14"){
      return inst14
    }
    else if(inst==="inst15"){
      return inst15
    }
    else if(inst==="inst16"){
      return inst16
    }
    else if(inst==="inst17"){
      return inst17
    }
    else if(inst==="inst18"){
      return inst18
    }
  }




  render() {
    return (

      <Row className="Row1">
        <Col xs={6} md={6} className="ColBoard">


          <div id="div1">


            <Image src={board} responsive className="board"/>



            {/* Loc1A */}
            <Image src={this.props.App.locs.Loc1A===true? loc2:loc1}
                  width="8%"
                  id="Loc1A"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.props.App.instHolders.Loc1A===false? this.handleBoardInst : null}/>
            {this.props.App.instHolders.Loc1A?
              <Image src={this.resolveImage(this.props.App.instHolders.Loc1A)}
                className={this.props.App.turn===0 ?"instHolderB":"instHolderA"}
                width={this.props.App.insts[this.props.App.instHolders.Loc1A].width}
                id="instHolder1"/>
              :
              null
            }

            {/* Loc4A */}
            <Image src={this.props.App.locs.Loc4A===true? loc2:loc1}
                  width="8%"
                  id="Loc4A"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>
            {this.props.App.instHolders.Loc4A?
              <Image src={this.resolveImage(this.props.App.instHolders.Loc4A)}
                className={this.props.App.turn===0?"instHolderB":"instHolderA"}
                width={this.props.App.insts[this.props.App.instHolders.Loc4A].width}
                id="instHolder2"/>
              :
              null
            }

          {/* Loc7A */}
          <Image src={this.props.App.locs.Loc7A===true? loc2:loc1}
                width="8%"
                id="Loc7A"
                onMouseEnter={this.handleViewLoc}
                onMouseLeave={this.handleHideLoc}
                onClick={this.handleBoardInst}/>
          {this.props.App.instHolders.Loc7A?
            <Image src={this.resolveImage(this.props.App.instHolders.Loc7A)}
              className={this.props.App.turn===0?"instHolderB":"instHolderA"}
              width={this.props.App.insts[this.props.App.instHolders.Loc7A].width}
              id="instHolder3"/>
            :
            null
          }

            {/* Loc2B */}
            <Image src={this.props.App.locs.Loc2B===true? loc2:loc1}
                  width="8%"
                  id="Loc2B"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>
            {this.props.App.instHolders.Loc2B?
              <Image src={this.resolveImage(this.props.App.instHolders.Loc2B)}
                className={this.props.App.turn===0?"instHolderB":"instHolderA"}
                width={this.props.App.insts[this.props.App.instHolders.Loc2B].width}
                id="instHolder4"/>
              :
              null
            }

            {/* Loc4B */}
            <Image src={this.props.App.locs.Loc4B===true? loc2:loc1}
                  width="8%"
                  id="Loc4B"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>
          {this.props.App.instHolders.Loc4B?
            <Image src={this.resolveImage(this.props.App.instHolders.Loc4B)}
              className={this.props.App.turn===0?"instHolderB":"instHolderA"}
              width={this.props.App.insts[this.props.App.instHolders.Loc4B].width}
              id="instHolder5"/>
            :
            null
          }

            {/* Loc6B */}
            <Image src={this.props.App.locs.Loc6B===true? loc2:loc1}
                  width="8%"
                  id="Loc6B"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>
          {this.props.App.instHolders.Loc6B?
            <Image src={this.resolveImage(this.props.App.instHolders.Loc6B)}
              className={this.props.App.turn===0?"instHolderB":"instHolderA"}
              width={this.props.App.insts[this.props.App.instHolders.Loc6B].width}
              id="instHolder6"/>
            :
            null
          }

            {/* Loc3C */}
            <Image src={this.props.App.locs.Loc3C===true? loc2:loc1}
                  width="8%"
                  id="Loc3C"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>
            {this.props.App.instHolders.Loc3C?
              <Image src={this.resolveImage(this.props.App.instHolders.Loc3C)}
                className={this.props.App.turn===0?"instHolderB":"instHolderA"}
                width={this.props.App.insts[this.props.App.instHolders.Loc3C].width}
                id="instHolder7"/>
              :
              null
            }

            {/* Loc4C */}
            <Image src={this.props.App.locs.Loc4C===true? loc2:loc1}
                  width="8%"
                  id="Loc4C"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>
            {this.props.App.instHolders.Loc4C?
              <Image src={this.resolveImage(this.props.App.instHolders.Loc4C)}
                className={this.props.App.turn===0?"instHolderB":"instHolderA"}
                width={this.props.App.insts[this.props.App.instHolders.Loc4C].width}
                id="instHolder8"/>
              :
              null
            }

            {/* Loc5C */}
            <Image src={this.props.App.locs.Loc5C===true? loc2:loc1}
                  width="8%"
                  id="Loc5C"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>
          {this.props.App.instHolders.Loc5C?
            <Image src={this.resolveImage(this.props.App.instHolders.Loc5C)}
              className={this.props.App.turn===0?"instHolderB":"instHolderA"}
              width={this.props.App.insts[this.props.App.instHolders.Loc5C].width}
              id="instHolder9"/>
            :
            null
          }

            {/* Loc1D */}
            <Image src={this.props.App.locs.Loc1D===true? loc2:loc1}
                  width="8%"
                  id="Loc1D"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>
          {this.props.App.instHolders.Loc1D?
            <Image src={this.resolveImage(this.props.App.instHolders.Loc1D)}
              className={this.props.App.turn===0?"instHolderB":"instHolderA"}
              width={this.props.App.insts[this.props.App.instHolders.Loc1D].width}
              id="instHolder10"/>
            :
            null
          }

            {/* Loc2D */}
            <Image src={this.props.App.locs.Loc2D===true? loc2:loc1}
                  width="8%"
                  id="Loc2D"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>
            {this.props.App.instHolders.Loc2D?
              <Image src={this.resolveImage(this.props.App.instHolders.Loc2D)}
                className={this.props.App.turn===0?"instHolderB":"instHolderA"}
                width={this.props.App.insts[this.props.App.instHolders.Loc2D].width}
                id="instHolder11"/>
              :
              null
            }

            {/* Loc3D */}
            <Image src={this.props.App.locs.Loc3D===true? loc2:loc1}
                  width="8%"
                  id="Loc3D"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>
            {this.props.App.instHolders.Loc3D?
              <Image src={this.resolveImage(this.props.App.instHolders.Loc3D)}
                className={this.props.App.turn===0?"instHolderB":"instHolderA"}
                width={this.props.App.insts[this.props.App.instHolders.Loc3D].width}
                id="instHolder12"/>
              :
              null
            }

            {/* Loc5D */}
            <Image src={this.props.App.locs.Loc5D===true? loc2:loc1}
                  width="8%"
                  id="Loc5D"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>
          {this.props.App.instHolders.Loc5D?
            <Image src={this.resolveImage(this.props.App.instHolders.Loc5D)}
              className={this.props.App.turn===0?"instHolderB":"instHolderA"}
              width={this.props.App.insts[this.props.App.instHolders.Loc5D].width}
              id="instHolder13"/>
            :
            null
          }

            {/* Loc6D */}
            <Image src={this.props.App.locs.Loc6D===true? loc2:loc1}
                  width="8%"
                  id="Loc6D"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>
            {this.props.App.instHolders.Loc6D?
              <Image src={this.resolveImage(this.props.App.instHolders.Loc6D)}
                className={this.props.App.turn===0?"instHolderB":"instHolderA"}
                width={this.props.App.insts[this.props.App.instHolders.Loc6D].width}
                id="instHolder14"/>
              :
              null
            }

            {/* Loc7D */}
            <Image src={this.props.App.locs.Loc7D===true? loc2:loc1}
                  width="8%"
                  id="Loc7D"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>
            {this.props.App.instHolders.Loc7D?
              <Image src={this.resolveImage(this.props.App.instHolders.Loc7D)}
                className={this.props.App.turn===0?"instHolderB":"instHolderA"}
                width={this.props.App.insts[this.props.App.instHolders.Loc7D].width}
                id="instHolder15"/>
              :
              null
            }

            {/* Loc3E */}
            <Image src={this.props.App.locs.Loc3E===true? loc2:loc1}
                  width="8%"
                  id="Loc3E"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>
          {this.props.App.instHolders.Loc3E?
            <Image src={this.resolveImage(this.props.App.instHolders.Loc3E)}
              className={this.props.App.turn===0?"instHolderB":"instHolderA"}
              width={this.props.App.insts[this.props.App.instHolders.Loc3E].width}
              id="instHolder16"/>
            :
            null
          }

            {/* Loc4E */}
            <Image src={this.props.App.locs.Loc4E===true? loc2:loc1}
                  width="8%"
                  id="Loc4E"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>
            {this.props.App.instHolders.Loc4E?
              <Image src={this.resolveImage(this.props.App.instHolders.Loc4E)}
                className={this.props.App.turn===0?"instHolderB":"instHolderA"}
                width={this.props.App.insts[this.props.App.instHolders.Loc4E].width}
                id="instHolder17"/>
              :
              null
            }

            {/* Loc5E */}
            <Image src={this.props.App.locs.Loc5E===true? loc2:loc1}
                  width="8%"
                  id="Loc5E"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>
          {this.props.App.instHolders.Loc5E?
            <Image src={this.resolveImage(this.props.App.instHolders.Loc5E)}
              className={this.props.App.turn===0?"instHolderB":"instHolderA"}
              width={this.props.App.insts[this.props.App.instHolders.Loc5E].width}
              id="instHolder18"/>
            :
            null
          }

            {/* Loc2F */}
            <Image src={this.props.App.locs.Loc2F===true? loc2:loc1}
                  width="8%"
                  id="Loc2F"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>
            {this.props.App.instHolders.Loc2F?
              <Image src={this.resolveImage(this.props.App.instHolders.Loc2F)}
                className={this.props.App.turn===0?"instHolderB":"instHolderA"}
                width={this.props.App.insts[this.props.App.instHolders.Loc2F].width}
                id="instHolder19"/>
              :
              null
            }

            {/* Loc4F */}
            <Image src={this.props.App.locs.Loc4F===true? loc2:loc1}
                  width="8%"
                  id="Loc4F"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>
            {this.props.App.instHolders.Loc4F?
              <Image src={this.resolveImage(this.props.App.instHolders.Loc4F)}
                className={this.props.App.turn===0?"instHolderB":"instHolderA"}
                width={this.props.App.insts[this.props.App.instHolders.Loc4F].width}
                id="instHolder20"/>
              :
              null
            }

            {/* Loc6F */}
            <Image src={this.props.App.locs.Loc6F===true? loc2:loc1}
                  width="8%"
                  id="Loc6F"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>
            {this.props.App.instHolders.Loc6F?
              <Image src={this.resolveImage(this.props.App.instHolders.Loc6F)}
                className={this.props.App.turn===0?"instHolderB":"instHolderA"}
                width={this.props.App.insts[this.props.App.instHolders.Loc6F].width}
                id="instHolder21"/>
              :
              null
            }

            {/* Loc1G */}
            <Image src={this.props.App.locs.Loc1G===true? loc2:loc1}
                  width="8%"
                  id="Loc1G"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>
            {this.props.App.instHolders.Loc1G?
              <Image src={this.resolveImage(this.props.App.instHolders.Loc1G)}
                className={this.props.App.turn===0?"instHolderB":"instHolderA"}
                width={this.props.App.insts[this.props.App.instHolders.Loc1G].width}
                id="instHolder22"/>
              :
              null
            }

            {/* Loc4G */}
            <Image src={this.props.App.locs.Loc4G===true? loc2:loc1}
                  width="8%"
                  id="Loc4G"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>
            {this.props.App.instHolders.Loc4G?
              <Image src={this.resolveImage(this.props.App.instHolders.Loc4G)}
                className={this.props.App.turn===0?"instHolderB":"instHolderA"}
                width={this.props.App.insts[this.props.App.instHolders.Loc4G].width}
                id="instHolder23"/>
              :
              null
            }

            {/* Loc7G */}
            <Image src={this.props.App.locs.Loc7G===true? loc2:loc1}
                  width="8%"
                  id="Loc7G"
                  onMouseEnter={this.handleViewLoc}
                  onMouseLeave={this.handleHideLoc}
                  onClick={this.handleBoardInst}/>
              {this.props.App.instHolders.Loc7G?
                <Image src={this.resolveImage(this.props.App.instHolders.Loc7G)}
                  className={this.props.App.turn===0?"instHolderB":"instHolderA"}
                  width={this.props.App.insts[this.props.App.instHolders.Loc7G].width}
                  id="instHolder24"/>
                :
                null
              }







          </div>
        </Col>

        <Col xs={6} md={6} className="info">

        <ListGroup>

            <ListGroupItem header="Game Status." bsStyle="danger">
            <Button bsStyle="primary" onClick={this.HandleGameStart}>Start Game</Button>
            Mode:
            won:
            lost:


            </ListGroupItem>

            <ListGroupItem className={this.props.App.highlightPA? "highlightPAON":"highlightPAOFF"} header="Player A">

              <Image src={inst1} className={this.props.App.highlightInst==="inst1"? "HighlightInst":null}  width="6%" id="inst1" onClick={this.handleInst}/>
              <Image src={inst2} className={this.props.App.highlightInst==="inst2"? "HighlightInst":null}  width="10%" id="inst2" onClick={this.handleInst}/>
              <Image src={inst3} className={this.props.App.highlightInst==="inst3"? "HighlightInst":null}  width="10%" id="inst3" onClick={this.handleInst}/>
              <Image src={inst4} className={this.props.App.highlightInst==="inst4"? "HighlightInst":null} width="14%" id="inst4" onClick={this.handleInst}/>
              <Image src={inst5} className={this.props.App.highlightInst==="inst5"? "HighlightInst":null} width="10%" id="inst5" onClick={this.handleInst}/>
              <Image src={inst6} className={this.props.App.highlightInst==="inst6"? "HighlightInst":null} width="10%" id="inst6" onClick={this.handleInst}/>
              <Image src={inst7} className={this.props.App.highlightInst==="inst7"? "HighlightInst":null} width="14%" id="inst7" onClick={this.handleInst}/>
              <Image src={inst8} className={this.props.App.highlightInst==="inst8"? "HighlightInst":null} width="8%" id="inst8" onClick={this.handleInst}/>
              <Image src={inst9} className={this.props.App.highlightInst==="inst9"? "HighlightInst":null} width="12%" id="inst9" onClick={this.handleInst}/>

            </ListGroupItem>


          <ListGroupItem className={this.props.App.highlightPB? "highlightPBON":"highlightPBOFF"} header="Player B">

            <Image src={inst10} className={this.props.App.highlightInst==="inst10"? "HighlightInst":null}  width="14%" id="inst10" onClick={this.handleInst}/>
            <Image src={inst11} className={this.props.App.highlightInst==="inst11"? "HighlightInst":null} width="13%" id="inst11" onClick={this.handleInst}/>
            <Image src={inst12} className={this.props.App.highlightInst==="inst12"? "HighlightInst":null} width="13%" id="inst12" onClick={this.handleInst}/>
            <Image src={inst13} className={this.props.App.highlightInst==="inst13"? "HighlightInst":null} width="13%" id="inst13" onClick={this.handleInst}/>
            <Image src={inst14} className={this.props.App.highlightInst==="inst14"? "HighlightInst":null} width="8%" id="inst14" onClick={this.handleInst}/>
            <Image src={inst15} className={this.props.App.highlightInst==="inst15"? "HighlightInst":null} width="8%" id="inst15" onClick={this.handleInst}/>
            <Image src={inst16} className={this.props.App.highlightInst==="inst16"? "HighlightInst":null} width="8%" id="inst16" onClick={this.handleInst}/>
            <Image src={inst17} className={this.props.App.highlightInst==="inst17"? "HighlightInst":null} width="11%" id="inst17" onClick={this.handleInst}/>
            <Image src={inst18} className={this.props.App.highlightInst==="inst18"? "HighlightInst":null} width="10%" id="inst18" onClick={this.handleInst}/>

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
