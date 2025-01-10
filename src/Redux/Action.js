import axios from "axios";
import { toast } from "react-toastify"
import Updateuser from "../components/UpdateUser"
import { FAIL_REQUEST, GET_USER_LIST, MAKE_REQUEST, DELETE_USER ,ADD_USER, UPDATE_USER,GET_USER_OBJ} from "./ActionType";

export const makeReuest = () => {
  return {
    type: MAKE_REQUEST,
  };
};

export const failRequest = () => {
  return {
    type: FAIL_REQUEST,
  };
};
export const getUserList = (data) => {
  return {
    type: GET_USER_LIST,
    payload: data,
  };
};

export const deleteUser = () => {
    return {
      type: DELETE_USER
     
    };
  };
  export const addUser=()=>{
    return{
        type:ADD_USER
    }
}
export const updateUser=()=>{
    return{
        type:UPDATE_USER
    }
}
export const getUserObj=(data)=>{
    return{
        type:GET_USER_OBJ,
        payload:data
    }
}



  export const FetchUserList = () => {
    return (dispatch) => {
      dispatch(makeReuest());
      setTimeout(() => {
        axios
          .get("https://localhost:7270/api/Employee/GetEmployees")
          .then((res) => {
            const userlist = res.data;
            dispatch(getUserList(userlist));
          })
          .catch((err) => {
            dispatch(failRequest(err.message));
          }); 
      }, 500);
    };
  };

  export const RemoveUser = (id) => {
    return (dispatch) => {
      dispatch(makeReuest());
      setTimeout(() => {
        axios
          .delete(`https://localhost:7270/api/Employee/DeleteByEmployeeId?employeeId=${id}`)
          .then((res) => {
            
            dispatch(deleteUser());
          })
          .catch((err) => {
            dispatch(failRequest(err.message));
          });
      }, 500);
    };
  };
  export const FunctionAddUser=(data)=>{
    return (dispatch)=>{
      dispatch(makeReuest());
      //setTimeout(() => {
        axios.post('https://localhost:7270/api/Employee/CreateOrUpdate',data).then(res=>{
            dispatch(addUser());
            toast.success('User Added successfully.')
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     // }, 2000);
     
    }
}
export const FunctionUpdateUser=(data)=>{
    return (dispatch)=>{
      dispatch(makeReuest());
      //setTimeout(() => {
        axios.post('https://localhost:7270/api/Employee/CreateOrUpdate/' ,data).then(res=>{
            dispatch(updateUser());
            toast.success('User Updated successfully.')
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     // }, 2000);
     
    }
}
export const FetchUserObj=(code)=>{
    return (dispatch)=>{
      dispatch(makeReuest());
      //setTimeout(() => {
        axios.get('https://localhost:7270/api/Employee/GetById/'+code).then(res=>{
            const userlist=res.data;
            dispatch(getUserObj(userlist));
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     // }, 2000);
     
    }
}
