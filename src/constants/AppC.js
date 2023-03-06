import React, {useState, useEffect} from "react";

export default function AppC() {
  const [isLogin,setLogin] = useState(false);

  // useEffect(() => {
  //   //check data from local storage

  //   //if data exist, set isLogin to true

  // },[isLogin])

  return{
    isLogin,
    setLogin
  }
}