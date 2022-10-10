import React from "react";
import UserListItem from "../UserListItem/UserListItem";

import './UserList.css';

const UserList = (props)=>{
   
    
    return (
        <div>
            {
                props.items.map(item =>  <UserListItem key={item.Id} name={item.Name} age={item.Age}></UserListItem>)
            }           
           
        </div>
    );
}

export default UserList;