import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import Bride from '../components/Bride';
import Date from '../components/Date';
import Quote from '../components/Quote';
import Lovegift from '../components/Lovegift';

export default function Lander() {
    return (
        <>
            {/* <Header /> */}
            <Home />
            <Bride />
            <Quote />
            <Date />
            <Lovegift />
        </>
    );
}
