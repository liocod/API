import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function UserList() {
    const [UserList, setUserList]= useState([]);

    const fetchData = async () => {
      const result = await axios.get("https://jsonplaceholder.typicode.com/users")
      setUserList(result.data);
    }

    useEffect(()=>{
        fetchData()
    },[])
  return(
    <ul>
        {UserList.map((users) => (
          <li style={{listStyle : "none"}} key={users.id}>

            <h1><u>{users.name}</u></h1> 
            <h4><u>{users.username} </u></h4> 
            <h5>{users.email}</h5>
            <p><i>{users.address.street} </i></p>
            <p><i>{users.address.suite}</i></p>
            <p><i>{users.address.city} </i></p>
            <p><i>{users.address.zipcode}</i></p>
            <p> <i>{users.address.geo.lat}</i></p> 
            <p><i>{users.address.geo.lng}</i></p>
            <p>{users.phone}</p>
            <h4>{users.website}</h4>
            <h4>{users.company.name}</h4>
            <h4>{users.company.catchPhrase}</h4>
            <h4>{users.company.bs}</h4>
            
            
            </li>
        ))}
        
    </ul>
  )
}
