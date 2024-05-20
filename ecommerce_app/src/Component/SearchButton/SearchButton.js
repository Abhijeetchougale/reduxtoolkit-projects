import React from 'react';
import clothes from '../../assets/images/clothes.jpg'

const SearchButton = () => {
    const buttons = ["Hoodies", "Dresses", "Suits", "Shoes", "Tshirt", "Jeans", "Jacket", "Bags"]; 
            
    return (
        <>
            <div className='flex flex-wrap items-center justify-center py-8'>
                {
                    buttons.map((item, index) => (
                        <div key={index} className='mr-7'>
                            <button className='py-4 px-10 rounded-md outline-brown-400 bg-gray-400 hover:bg-green-400 ease-out duration-300 mb-2'>{item}</button>
                        </div>
                    ))
                }
            </div>
            <div className='bg-green-400 p-4 w-[55%] mx-auto rounded-md'>
                <h3 className='text-orange-700 text-lg text-center font-inter tracking-normal leading-none'>SALES UP TO 50%</h3>
            </div>
            <div className='flex justify-center items-center py-4'>
                <img className='h-[600px] w-[70%] rounded-lg shadow-lg shadow-gray-500' src={clothes} alt="Clothes" />
            </div>
        </>

      
    );
};

export default SearchButton;
