import React from 'react';

import redirect from "./redirect";


const WithAuth  = <T extends Object> (C: React.ComponentClass<T>)=> {
 
  return class AuthComponent extends React.Component<T>{
    
componentDidMount(){
  console.log("did mount")
  if(!localStorage.getItem('token')){
    redirect("/auth/login");
  }
}
    render(){
      return <C {...this.props}/>
    }
  }
};
export default WithAuth;
