import React from 'react';
import Navbar from '../Navbar/Navbar';
import Slider from '../Slider/Slider';
import SearchButton from '../SearchButton/SearchButton';
const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <SearchButton></SearchButton>
        </div>
    );
};

export default Main;