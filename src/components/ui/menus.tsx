"use client"
import React, { useState } from 'react';
import { SparklesText } from '../magicui/sparkleText';

const BorderMenu = ({renderText}:{renderText:string}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <div 
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {
            !isHovered ? (
                <li className="text-md capitalize font-normal text-white font-body pb-2">
                {renderText}
              </li>
            ) : (
                <SparklesText className='text-md capitalize font-normal text-white font-body pb-2' text={renderText} />

            )
        }
       
        <div 
          className={`
            absolute 
            bottom-0 
            left-0 
            h-0.5 
            bg-violet-800
            transition-all 
            duration-300 
            ease-in-out
            ${isHovered ? 'w-full' : 'w-0'}
          `}
        />
      </div>
    </div>
  );
};

export default BorderMenu;