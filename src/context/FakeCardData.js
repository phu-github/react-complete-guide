import React, { useState } from 'react';


export const CardContext = React.createContext()

export default function FakeCardData({ children }) {

    const [cardData, setCardData] = useState([
        {
            id: 1,
            photoURL:'link image',
            title: '2020 World Champs Gaming Warzone', 
            avatarURL:'link avatar',
            displayName:'user game',
            userGame:'user game',
            watching: 2.4
        },
        {
            id: 1,
            photoURL:'link image',
            title: '2020 World Champs Gaming Warzone', 
            avatarURL:'link avatar',
            displayName:'user game',
            userGame:'user game',
            watching: 2.5
        },
        {
            id: 1,
            photoURL:'link image',
            title: '2020 World Champs Gaming Warzone', 
            avatarURL:'link avatar',
            displayName:'user game',
            userGame:'user game',
            watching: 2.6
        },
        {
            id: 1,
            photoURL:'link image',
            title: '2020 World Champs Gaming Warzone', 
            avatarURL:'link avatar',
            displayName:'user game',
            userGame:'user game',
            watching: 2.7
        }, 
    ]);
    return(
        <CardContext.Provider value={ {cardData} }>
            {children}
        </CardContext.Provider>
    );
}


