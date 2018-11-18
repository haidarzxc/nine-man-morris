

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

    case 'SHOW_LOC':

      return {
        ...state,
        locs:setLoc(action.loc,state,"ON")

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

    default:
      return state;
  }
}//end of App

export default App