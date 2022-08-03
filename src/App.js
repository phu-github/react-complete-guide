import React, { useState, useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import MountedUnmounted from './components/MountedUnmounted/MountedUnmounted';
import UpDown from './components/Reducer/UpDown';
import { AuthenContextProvider } from './store/authen-context';

function App() {
  const [toggle, setToggle] = useState(false);
  const ctx  = useContext(AuthenContextProvider);
  
  return (
    <React.Fragment>
          <MainHeader/>
          <main>
            {!ctx.isLoggedIn && <Login  />}
            {ctx.isLoggedIn && <Home />}
          </main>
      {/*========== useEffect?  */}
      <button type="button" onClick={() => setToggle(!toggle)}>button</button>
      {toggle && <MountedUnmounted></MountedUnmounted>}

      {/*========== useReducer? */}
      <UpDown></UpDown>
    </React.Fragment>
  );
}

export default App;
