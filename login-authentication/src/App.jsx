// App.js
import React, { useState } from 'react';
import { encrypt, decrypt } from 'n-krypta'

import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import SecuredPage from './Components/SecurePage';

const App = () => {
  const [userDetails, setUserDetails] = useState(JSON.parse(localStorage.getItem('user')) || []);
  const [page, setPage] = useState(false);
  const [user, setuser] = useState('')
  const [userlast, setuserlast] = useState('')
  const [login, setLogin] = useState(true)
  let scount = 0
  let ucount = 0
  let Skey = "GautamMehto"


  function displayInfo() {
    let obj = JSON.stringify(userDetails)
    localStorage.setItem("user", obj);
  }
  displayInfo()

  function TogglePage(data) {
    if (data == false) {
      setLogin(false)
    }
    else {
      setLogin(true)
    }
  }

  const handleLogin = (username, password) => {

    for (let i = 0; i < userDetails.length; i++) {
      if (decrypt(userDetails[i].userName, Skey) === username && decrypt(userDetails[i].userPass, Skey) === password) {
        setuser(decrypt(userDetails[i].firstname, Skey))
        setuserlast(decrypt(userDetails[i].lastname, Skey))
        setPage(true);
        scount++
      }
      else {
        ucount++
      }
    }

    if (scount == 0 && ucount == userDetails.length) {
      alert("Username or Password is incorrect");
    }
    else if (scount == 1 && ucount == userDetails.length - 1) {
      // alert("Username or Password is correct");
    }

  };

  const handleRegister = (firstname, lastname, username, password) => {
    let obj2 = {
      firstname: encrypt(firstname, Skey),
      lastname: encrypt(lastname, Skey),
      userName: encrypt(username, Skey),
      userPass: encrypt(password, Skey),
    }
    setUserDetails([...userDetails, obj2]);
    displayInfo()
    alert(`Registered successfully!\nUsername: ${username}\nPassword: ${password}`);
    setLogin(true)
  };

  const handleLogout = () => {
    setPage(false);
  };

  return (
    <div>
      {page ? (
        <SecuredPage user={user} userlast={userlast} handleLogout={handleLogout} />
      ) : (
        <div className='relative'>
          <LoginForm handleLogin={handleLogin} login={login} TogglePage={TogglePage} />
          <RegisterForm handleRegister={handleRegister} login={login} TogglePage={TogglePage} />
        </div>
      )}
    </div>
  );
};

export default App;
