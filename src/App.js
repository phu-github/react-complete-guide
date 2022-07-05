import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import MountedUnmounted from './components/MountedUnmounted/MountedUnmounted';
import UpDown from './components/Reducer/UpDown';
import AuthenContext from './store/authen-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };
  const [toggle, setToggle] = useState(false);

  return (
    <React.Fragment>
      <AuthenContext.Provider value = {{isLoggedIn: isLoggedIn}}>
          <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
          <main>
            {!isLoggedIn && <Login onLogin={loginHandler} />}
            {isLoggedIn && <Home onLogout={logoutHandler} />}
          </main>
      </AuthenContext.Provider>
      {/*========== useEffect?  */}
      <button type="button" onClick={() => setToggle(!toggle)}>button</button>
      {toggle && <MountedUnmounted></MountedUnmounted>}

      {/*========== useReducer? */}
      <UpDown></UpDown>
    </React.Fragment>
  );
}

export default App;
