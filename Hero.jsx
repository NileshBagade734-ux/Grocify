import React from 'react'
import HeroImg from "../assets/Hero1.png"
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className='relative bg-green-600 text-white mt-12 md:mt-15'>
            <div className='max-w-6xl mx-auto py-16 flex flex-col md:flex-row items-center px-6 md:px-0 gap-7'>
                
                {/* Left Content */}
                <div className='md:w-1/2 mb-8 md:mb-0'>
                    <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                        Fresh <span className='text-orange-400'>Groceries</span> Delivered to Your Door
                    </h1>
                    <p className='text-lg mb-6'>
                        Shop from our wide selection of fresh fruits, vegetables, dairy, and more. Get same-day delivery!
                    </p>
                    <div className='flex flex-wrap gap-4 items-center'>
                        <Link to={'/shop'}>
                            <button className='cursor-pointer bg-white text-green-600 hover:bg-gray-100 rounded-full px-3 py-2'>
                                Shop Now
                            </button>
                        </Link>
                        <Link to={'/about'}>
                            <button className='text-white cursor-pointer border-white bg-green-700 hover:bg-green-600 rounded-full px-3 py-2'>
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className='relative flex justify-end md:w-1/2'>
                    <div className='absolute inset-0 bg-white/20 rounded-lg backdrop-blur-sm'></div>
                    <img 
                        src={HeroImg} 
                        alt="Hero" 
                        className='z-10 w-[320px] md:w-[420px] lg:w-[500px] object-contain'
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
