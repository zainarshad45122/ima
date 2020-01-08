import React, { createContext, Provider, useState, Children } from 'react';

export const ApartmentContext = createContext();

export const ApartmentProvider = props => {
    const [apartments, setApartment] = useState([
        {
            cover: 'https://images.unsplash.com/photo-1529408632839-a54952c491e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            title: 'Traumwohnung für Senioren mit Blick auf den Sendlinger Park.',
            building: 'A',
            number: 12,
            address: 'Fallstraße 35a',
            size: 92,
            rooms: 2.5,
            coldRent: 600.00,
            warmRent: 850.00,
            type: 'Maisonette',
            handycap: true,
            available: true
        }
    ]);

    return(
        <ApartmentContext.Provider value={[apartments, setApartment]}>
            {props.children}
        </ApartmentContext.Provider>
    )
}