import React, { useState } from "react";
import { MyContext } from "./Context";

export default function Container({ children }) {
  const [users, setUsers] = useState(null);
  const [id, SetId] = useState("");
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDated, setEndDate] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [color, setColor] = useState("");
  // const [token,setToken]=useState(null)

  // const [isRegister,setIsRegister]=useState(false)

  // useEffect(()=>{
  //     const localdata= localStorage.getItem("isRegistered")
  //     localdata && setIsRegister(true)
  //     const token = localStorage.getItem("token")
  //      if(token){
  //         fetch("http://localhost:4000/verifytoken",{method:"GET", headers:{"token":token}})
  //         .then(res=>res.json())
  //         .then(result=>{
  //             console.log(result)
  //             if(result.success){
  //                 setUser(result.data)
  //             }
  //         })

  //     }
  // },[])

  return (
    <MyContext.Provider
      value={{
        users,
        setUsers,
        id,
        SetId,
        city,
        setCity,
        startDate,
        setStartDate,
        endDated,
        setEndDate,
        price,
        setPrice,
        status,
        setStatus,
        color,
        setColor,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
