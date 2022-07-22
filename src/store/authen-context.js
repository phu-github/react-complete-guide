import React, {useState, useEffect} from 'react';

const AuthenContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});

export const AuthenContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] =  useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
        if (storedUserLoggedInInformation === '1') {
          setIsLoggedIn(true);
        }
      }, []);

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false)
    }

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true)
    }

    return <AuthenContext.Provider
        value = {{ 
            isLoggedIn: isLoggedIn, 
            onLogout: logoutHandler,
            onLogin: loginHandler
        }}
    >
        {props.children}
    </AuthenContext.Provider>
}

export default AuthenContext;