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
    inst1:null,
    inst2:null,
    inst3:null,
    inst4:null,
    inst5:null,
    inst6:null,
    inst7:null,
    inst8:null,
    inst9:null,
    inst10:null,
    inst11:null,
    inst12:null,
    inst13:null,
    inst14:null,
    inst15:null,
    inst16:null,
    inst17:null,
    inst18:null
  },

  inst:null



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
        ...state

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