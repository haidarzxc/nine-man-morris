

const initialState = {
  locs:{
    Loc1A:false,
    Loc4A:false,
    Loc7A:false,
    Loc2B:false,
    Loc4B:false,
    Loc6B:false,
    Loc3C:false,
    Loc4C:false,
    Loc5C:false,
    Loc1D:false,
    Loc2D:false,
    Loc3D:false,
    Loc5D:false,
    Loc6D:false,
    Loc7D:false,
    Loc3E:false,
    Loc4E:false,
    Loc5E:false,
    Loc2F:false,
    Loc4F:false,
    Loc6F:false,
    Loc1G:false,
    Loc4G:false,
    Loc7G:false
  },
  placeHolder:{
    Loc1A:"instHolder1",
    Loc4A:"instHolder2",
    Loc7A:"instHolder3",
    Loc2B:"instHolder4",
    Loc4B:"instHolder5",
    Loc6B:"instHolder6",
    Loc3C:"instHolder7",
    Loc4C:"instHolder8",
    Loc5C:"instHolder9",
    Loc1D:"instHolder10",
    Loc2D:"instHolder11",
    Loc3D:"instHolder12",
    Loc5D:"instHolder13",
    Loc6D:"instHolder14",
    Loc7D:"instHolder15",
    Loc3E:"instHolder16",
    Loc4E:"instHolder17",
    Loc5E:"instHolder18",
    Loc2F:"instHolder19",
    Loc4F:"instHolder20",
    Loc6F:"instHolder21",
    Loc1G:"instHolder22",
    Loc4G:"instHolder23",
    Loc7G:"instHolder24"
  },

  adjacentLocs:{
    Loc1A:['4A','1D'],
    Loc4A:['1A','4B','7A'],
    Loc7A:['7D','4A'],
    Loc2B:['4B','2D'],
    Loc4B:['2B','4C','4A','6B'],
    Loc6B:['4B','6D'],
    Loc3C:['4C','3D'],
    Loc4C:['4B','3C','5C'],
    Loc5C:['4C','5D'],
    Loc1D:['1A','1G','2D'],
    Loc2D:['1D','2B','2F','3D'],
    Loc3D:['3C','3E','2D'],
    Loc5D:['5C','5E','6D'],
    Loc6D:['5D','7D','6B','6F'],
    Loc7D:['6D','7A','7G'],
    Loc3E:['3D','4E'],
    Loc4E:['3E','4F','5E'],
    Loc5E:['5D','4E'],
    Loc2F:['2D','4F'],
    Loc4F:['2F','6F','4E','4G'],
    Loc6F:['6D','4F'],
    Loc1G:['1D','4G'],
    Loc4G:['1G','4F','7G'],
    Loc7G:['7D','4G']
  },

  insts:{
    inst1:{
          width:"4%",
          top:"15px",
          left:"20px"
          },
    inst2:{
          width:"8%",
          top:"15px",
          left:"20px"
          },
    inst3:{
          width:"7%",
          top:"15px",
          left:"20px"
          },
    inst4:{
          width:"10%",
          top:"15px",
          left:"20px"
          },
    inst5:{
          width:"8%",
          top:"15px",
          left:"20px"
          },
    inst6:{
          width:"8%",
          top:"15px",
          left:"20px"
          },
    inst7:{
          width:"8%",
          top:"15px",
          left:"20px"
          },
    inst8:{
          width:"8%",
          top:"15px",
          left:"20px"
          },
    inst9:{
          width:"8%",
          top:"15px",
          left:"20px"
          },
    inst10:{
          width:"10%",
          top:"15px",
          left:"20px"
          },
    inst11:{
          width:"10%",
          top:"15px",
          left:"20px"
          },
    inst12:{
          width:"10%",
          top:"15px",
          left:"20px"
          },
    inst13:{
          width:"8%",
          top:"15px",
          left:"20px"
          },
    inst14:{
          width:"5%",
          top:"15px",
          left:"20px"
          },
    inst15:{
          width:"5%",
          top:"15px",
          left:"20px"
          },
    inst16:{
          width:"6%",
          top:"15px",
          left:"20px"
          },
    inst17:{
          width:"8%",
          top:"15px",
          left:"20px"
          },
    inst18:{
          width:"8%",
          top:"15px",
          left:"20px"
          }
  },

  inst:null,
  highlightInst:null,
  hideInst:null,
  highlightPA:null,
  highlightPB:null,
  turn:null,
  storeTurn:null,

  instHolders:{
    Loc1A:false,
    Loc4A:false,
    Loc7A:false,
    Loc2B:false,
    Loc4B:false,
    Loc6B:false,
    Loc3C:false,
    Loc4C:false,
    Loc5C:false,
    Loc1D:false,
    Loc2D:false,
    Loc3D:false,
    Loc5D:false,
    Loc6D:false,
    Loc7D:false,
    Loc3E:false,
    Loc4E:false,
    Loc5E:false,
    Loc2F:false,
    Loc4F:false,
    Loc6F:false,
    Loc1G:false,
    Loc4G:false,
    Loc7G:false
  },

  matrix:{
    "1":{"A":null, "B":null, "C":null, "D":null, "E":null, "F":null, "G":null},
    "2":{"A":null, "B":null, "C":null, "D":null, "E":null, "F":null, "G":null},
    "3":{"A":null, "B":null, "C":null, "D":null, "E":null, "F":null, "G":null},
    "4":{"A":null, "B":null, "C":null, "D":null, "E":null, "F":null, "G":null},
    "5":{"A":null, "B":null, "C":null, "D":null, "E":null, "F":null, "G":null},
    "6":{"A":null, "B":null, "C":null, "D":null, "E":null, "F":null, "G":null},
    "7":{"A":null, "B":null, "C":null, "D":null, "E":null, "F":null, "G":null},
  },
  mill:{"0":null,"1":null},
  historyMill:{"0":[],"1":[]},

  playerAScore:9,
  playerBScore:9,
  labelMoves:null,
  isBot:false,
  bot:null,
  movesAhead:2


};

const setLoc=(val,state,isOn)=>{
  let locs={}
    for(var prop in state.locs){
      if(prop===val){
        if(isOn==="ON"){
          locs[prop]=true
        }
        else if(isOn==="OFF"){
          locs[prop]=false
        }

      }
      else{
        locs[prop]=false
      }
    }
    return locs
}

function App(state = initialState, action) {
  switch(action.type) {

    case 'RENDER_INST':
      for(var i in state.instHolders){
        if(i===action.loc){
          state.instHolders[i]=action.inst
        }
      }
      return {
        ...state,

      };

    case 'UPDATE_MATRIX':
      let loc = action.loc.replace('Loc','');
      for(var row in state.matrix){
        if(loc[0]===row){
          state.matrix[row][loc[1]]=action.inst
        }

      }
      return {
        ...state

      };

      case 'SET_MILL':
        state.mill[state.turn]=action.val
        return {
          ...state,
        };
    case 'RESET_MILL':
      state.mill[state.storeTurn]=action.val
      return {
        ...state,
      };

    case 'HISTORY_MILL':
      state.historyMill[state.storeTurn].push(state.mill[state.storeTurn])
      return {
        ...state,
      };

    case 'REMOVE_FROM_HISTORY_MILL':
      state.historyMill[action.turn].splice(action.idx, 1);
      return {
        ...state,
      };

    case 'Label_MOVES':
      state.labelMoves={"loc":action.loc,"locs":action.locs}
      return {
        ...state,
      };


    case 'UPDATE_SOCRE':
      if(action.player===0){
        state.playerAScore=state.playerAScore-1
      }
      else if(action.player===1){
        state.playerBScore=state.playerBScore-1
      }
      return {
        ...state
      };


    case 'SHOW_LOC':

      return {
        ...state,
        locs:setLoc(action.loc,state,"ON")

      };

    case 'HIGHLIGHT_PA':

      return {
        ...state,
        highlightPA:action.val

      };

    case 'HIGHLIGHT_PB':

      return {
        ...state,
        highlightPB:action.val

      };

    case 'SET_TURN':

      return {
        ...state,
        turn:action.val

      };

    case 'STORE_TURN':
      return {
        ...state,
        storeTurn:state.turn,
        turn:state.val


      };

    case 'HIDE_LOC':
      return {
        ...state,
        locs:setLoc(action.loc,state,"OFF")
      };

    case 'HIGHLIGHT_MAN':

      return {
        ...state,
        highlightInst:action.inst
      };

    case 'SET_INST':
      return {
        ...state,
        inst:action.inst
      };

    case 'IS_BOT':
      return {
        ...state,
        isBot:action.val
      };

    case 'SET_BOT':
      return {
        ...state,
        bot:action.val
      };

    default:
      return state;
  }
}//end of App

export default App