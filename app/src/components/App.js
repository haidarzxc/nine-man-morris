import React, { Component } from 'react';
import '../css/App.css';
import {
  ListGroup,
  ListGroupItem,
  Image,
  Row,
  Col,
  Button,
  Badge} from "react-bootstrap"

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

    this.mills=this.mills.bind(this);
    this.millRows=this.millRows.bind(this);
    this.millColumns=this.millColumns.bind(this);
    this.millDiagonal=this.millDiagonal.bind(this);
    this.removeInst=this.removeInst.bind(this);
    this.handleImage=this.handleImage.bind(this);




  }// end of constructor

  millRows(){
    for(var row in this.props.App.matrix){
      if(row==="4"){
        if((isInst(this.props.App.turn,this.props.App.matrix[row]["A"]) &&
            isInst(this.props.App.turn,this.props.App.matrix[row]["B"]) &&
            isInst(this.props.App.turn,this.props.App.matrix[row]["C"]))
          ){
            // console.log("-----R4 Mill------->",this.props.App.turn,row);
            this.props.dispatch({type: "MILL_ROW",val:row,holders:["A","B","C"]})
            return row
          }
        else if ((isInst(this.props.App.turn,this.props.App.matrix[row]["E"]) &&
         isInst(this.props.App.turn,this.props.App.matrix[row]["F"]) &&
         isInst(this.props.App.turn,this.props.App.matrix[row]["G"]))
        ){
            // console.log("-----R4 Mill------->",this.props.App.turn,row);
            this.props.dispatch({type: "MILL_ROW",val:row,holders:["E","F","G"]})
            return row
         }
          continue
      }
      let c=0
      for(var col in this.props.App.matrix[row]){
        if(this.props.App.matrix[row][col]!==null){
          let is=isInst(this.props.App.turn,this.props.App.matrix[row][col])
          if(is){
            c++
          }
        }
      }// end of row check
      if(c===3){
        // row mill
        // console.log("-----R------->",this.props.App.turn,c,row);
        this.props.dispatch({type: "MILL_ROW",val:row})
        return row
      }

    }
    return false
  }// end of millRows

  millColumns(){
    let cols=["A","B","C","D","E","F","G"]
    for(var col in cols){
      if(cols[col]==="D"){
        if(
          (isInst(this.props.App.turn,this.props.App.matrix["1"][cols[col]]) &&
            isInst(this.props.App.turn,this.props.App.matrix["2"][cols[col]]) &&
            isInst(this.props.App.turn,this.props.App.matrix["3"][cols[col]]))
        ){
          // console.log("-----C4 Mill------->",this.props.App.turn,cols[col]);
          this.props.dispatch({type: "MILL_COL",val:cols[col],holders:["1","2","3"]})
          return cols[col]
        }
        else if(
          (isInst(this.props.App.turn,this.props.App.matrix["5"][cols[col]]) &&
            isInst(this.props.App.turn,this.props.App.matrix["6"][cols[col]]) &&
            isInst(this.props.App.turn,this.props.App.matrix["7"][cols[col]]))
        ){
          this.props.dispatch({type: "MILL_COL",val:cols[col],holders:["5","6","7"]})
          return cols[col]
        }
        continue
      }
      let c=0
      for(var row in this.props.App.matrix){
        let is=isInst(this.props.App.turn,this.props.App.matrix[row][cols[col]])
        if(is){
          c++
        }
      }
      if(c===3){
        // col mill
        // console.log("-----C------->",this.props.App.turn,c,cols[col]);
        this.props.dispatch({type: "MILL_COL",val:cols[col]})
        return cols[col]
      }
    }

  }// end of millColumns

  millDiagonal(){
    if(
      isInst(this.props.App.turn,this.props.App.matrix["7"]["A"]) &&
      isInst(this.props.App.turn,this.props.App.matrix["6"]["B"]) &&
      isInst(this.props.App.turn,this.props.App.matrix["5"]["C"])
    ){
      this.props.dispatch({type: "MILL_DIG",val:["7A","6B","5C"]})
      return ["7A","6B","5C"]
    }
    else if(
      isInst(this.props.App.turn,this.props.App.matrix["7"]["G"]) &&
      isInst(this.props.App.turn,this.props.App.matrix["6"]["F"]) &&
      isInst(this.props.App.turn,this.props.App.matrix["5"]["E"])
    ){
      this.props.dispatch({type: "MILL_DIG",val:["7G","6F","5E"]})
      return ["7G","6F","5E"]
    }

    else if(
      isInst(this.props.App.turn,this.props.App.matrix["1"]["A"]) &&
      isInst(this.props.App.turn,this.props.App.matrix["2"]["B"]) &&
      isInst(this.props.App.turn,this.props.App.matrix["3"]["C"])
    ){
      this.props.dispatch({type: "MILL_DIG",val:["1A","2B","3C"]})
      return ["1A","2B","3C"]
    }
    else if(
      isInst(this.props.App.turn,this.props.App.matrix["1"]["G"]) &&
      isInst(this.props.App.turn,this.props.App.matrix["2"]["F"]) &&
      isInst(this.props.App.turn,this.props.App.matrix["3"]["E"])
    ){
      this.props.dispatch({type: "MILL_DIG",val:["1G","2F","3E"]})
      return ["1G","2F","3E"]
    }
  }// end of millDiagonal

  removeInst(evt){
    let loc
    for (let key of Object.keys(this.props.App.placeHolder)) {
      if(this.props.App.placeHolder[key]===evt.target.id){
        loc=key
      }
    }
    let revTurn=this.props.App.storeTurn
    if(revTurn===0){
      revTurn=1
    }
    else if(revTurn===1){
      revTurn=0
    }
    if(isInst(revTurn,this.props.App.instHolders[loc])){
      this.props.dispatch({ type: 'RENDER_INST' ,loc:loc,inst:false});
      this.props.dispatch({type: "MILL_COL",val:null})
      this.props.dispatch({type: "MILL_ROW",val:null})
      this.props.dispatch({type: "UPDATE_SOCRE",player:revTurn})
      this.props.dispatch({ type: 'SET_TURN',val:revTurn});
      if(revTurn===0){
        this.props.dispatch({ type: 'HIGHLIGHT_PA',val:true});
      }
      else if(revTurn===1){
        this.props.dispatch({ type: 'HIGHLIGHT_PB',val:true});
      }
    }


  }// end of removeInst

  handleImage(evt){
    if(this.props.App.millRow || this.props.App.millCol || this.props.App.millDig){
      this.removeInst(evt)
    }


  }//end of handleInst

  mills(){
    // console.log(this.props.App.matrix);
    let row=this.millRows()
    let col=this.millColumns()
    let dig=this.millDiagonal()
    if(row || col || dig){
      this.props.dispatch({ type: 'STORE_TURN',val:-1});
      this.props.dispatch({ type: 'HIGHLIGHT_PA',val:false});
      this.props.dispatch({ type: 'HIGHLIGHT_PB',val:false});
      return -1
    }
  }// end of mills



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
      // console.log(this.props.App.instHolders);
      this.props.dispatch({ type: 'RENDER_INST' ,loc:event.target.id,inst:this.props.App.inst});
      try{
        document.getElementById(this.props.App.inst).remove()
      }
      catch(err){
      }

      this.props.dispatch({type: "UPDATE_MATRIX",inst:this.props.App.inst,loc:event.target.id})
      let mill=this.mills()
      if(mill){
        this.props.dispatch({type: "SET_INST",inst:null})
        return
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

      this.props.dispatch({type: "SET_INST",inst:null})

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
    if(inst==="inst1"){return inst1}
    else if(inst==="inst2"){return inst2}
    else if(inst==="inst3"){return inst3}
    else if(inst==="inst4"){return inst4}
    else if(inst==="inst5"){return inst5}
    else if(inst==="inst6"){return inst6}
    else if(inst==="inst7"){return inst7}
    else if(inst==="inst8"){return inst8}
    else if(inst==="inst9"){return inst9}
    else if(inst==="inst10"){return inst10}
    else if(inst==="inst11"){return inst11}
    else if(inst==="inst12"){return inst12}
    else if(inst==="inst13"){return inst13}
    else if(inst==="inst14"){return inst14}
    else if(inst==="inst15"){return inst15}
    else if(inst==="inst16"){return inst16}
    else if(inst==="inst17"){return inst17}
    else if(inst==="inst18"){return inst18}
  }




  render() {
    let content=[]
    let c=0

    for(var loc in this.props.App.locs){
      let stripLoc=loc.replace("Loc","")
      let labelClass
      if(this.props.App.millRow===stripLoc[0]){
        if(this.props.App.millRow==="4"){
          if(this.props.App.holders.includes(stripLoc[1])){
            labelClass="millRow"
          }
        }
        else{
          labelClass="millRow"
        }

      }
      if(this.props.App.millCol===stripLoc[1]){
        if(this.props.App.millCol==="D"){
          if(this.props.App.holders.includes(stripLoc[0])){
            labelClass="millCol"
          }
        }
        else{
          labelClass="millCol"
        }
      }
      console.log(this.props.App.millDig);
      if(this.props.App.millDig!==null && this.props.App.millDig.includes(stripLoc)){
        labelClass="millDig"
      }

      c++
      content.push(
        <Image key={c} src={this.props.App.locs[loc]===true? loc2:loc1}
         width="8%"
         id={loc}
         className={labelClass}
         onMouseEnter={this.handleViewLoc}
         onMouseLeave={this.handleHideLoc}
         onClick={this.props.App.instHolders[loc]===false?
           this.handleBoardInst : null}/>
         )

         if(this.props.App.instHolders[loc]){
           c++
           content.push(
                <Image key={c} src={this.resolveImage(
                           this.props.App.instHolders[loc])}
                  className={isInst(0,this.props.App.instHolders[loc])?
                             "instHolderA":"instHolderB"}
                  width={this.props.App.insts[this.props.App.instHolders[loc]].width}
                  id={this.props.App.placeHolder[loc]}
                  onClick={this.handleImage}/>

             )
         }


    }

    return (

      <Row className="Row1">
        <Col xs={6} md={6} className="ColBoard">


          <div id="div1">
            <Image src={board} responsive className="board"/>

            {content}

          </div>
        </Col>

        <Col xs={6} md={6} className="info">

        <ListGroup>

            <ListGroupItem header="Game Status." bsStyle="danger">
            <Button bsStyle="primary" onClick={this.HandleGameStart}>Start Game</Button><br/>
            <span>player A score: <Badge>{this.props.App.playerAScore}</Badge></span> |
            <span>player B score: <Badge>{this.props.App.playerBScore}</Badge></span>

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
