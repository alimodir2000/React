import React from 'react';
import Card from './Components/UI/Card/Card';
import { useState } from 'react';
import UserList from './Components/User/UserDetail/UserList/UserList';


import UserNewForm from './Components/User/UserNewForm/UserNewForm';
function App() {

  const initData = [
    {
      Id: 1,
      Name: 'Ali',
      Age: 38
    },
    {
      Id: 2,
      Name: 'Arsalan',
      Age: 33
    }
  ];

 

  const [data, setData] = useState(initData);
  const newUserAddedHanlder = (newUser) =>{
    setData((prevData) => {
      return [...prevData, newUser];
    });

  }

  
  
  return (
    
    <div>
      <UserNewForm onNewUserAdded={newUserAddedHanlder}></UserNewForm>
      <Card>
        <UserList items={data}></UserList>
      </Card>
    </div>
  );
}

export default App;
