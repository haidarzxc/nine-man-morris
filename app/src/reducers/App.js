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
  }


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

    default:
      return state;
  }
}//end of App

export default App