"use client";
import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
    const handleScroll = () =>{

    }
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                Search, rent or purchase a car -- swift and efficient!
            </h1>

            <p className='hero__subtitle'>
                Enhance your car browsing experience with our amazing booking process.
            </p>

            <CustomButton 
            title = "Browse Cars"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
            />
        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src="/hero.png" alt="hero" fill className='object-contain'/>
            </div>

            <div className='hero__image-overlay'/>
             
        </div>


    </div>
  )
}

export default Hero