import React from 'react';
import { nextSlide, prevSlide, dotSlide } from '../../features/sliderSlice';
import { useDispatch, useSelector } from 'react-redux';
import { sliderData } from '../../assets/data/dummyData';
import { slider } from '@material-tailwind/react';
const Slider = () => {
    const sliderIndex = useSelector((state) => state.Slider.value);
    const dispatch = useDispatch();

    return (
        <div className='relative pb-4'>
            <div>
                {

                    sliderData.map((item, index) => {
                        return (
                            <div key={item.id} className={parseInt(item.id) === sliderIndex
                                ? "opacity-100 duration-700 ease-in-out scale-100"
                                : "opacity-0 duration-700 ease-in-out scale-95"}>
                                <div>
                                    {
                                        parseInt(item.id) === sliderIndex && (
                                            <img src={item.img} alt="sliderImage" className='h-[850px] w-full' />
                                        )
                                    }
                                </div>
                                <div className="absolute top-44 mx-auto inset-x-1/4">                                    
                                     <p className='text-white text-4xl font-inter font-bold'>
                                        {parseInt(item.id)===sliderIndex && item.text}
                                        </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex absolute bottom-10 left-[45%]'>
                {
                    sliderData.map((dot, index)=>{
                        return(
                        <div key={dot.id}>
                            <div className={
                                index===sliderIndex 
                                ?"bg-green-400 rounded-full p-4 me-5 cursor-pointer"
                                :"bg-white rounded-full p-4 me-5  cursor-pointer"
                                }
                                onClick={()=>dispatch(dotSlide(index))}
                                >

                                </div>
                        </div>)
                    })
                }
            </div>
            <button className='absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-green-400' onClick={() => { dispatch(nextSlide(sliderIndex + 1)) }}>Next Slice</button>
            <button className='absolute top-[50%] left-4 bg-white rounded-full p-2 hover:bg-green-400' onClick={() => { dispatch(prevSlide(sliderIndex - 1)) }}>Prev Slice</button>
        </div>
    );
};

export default Slider;