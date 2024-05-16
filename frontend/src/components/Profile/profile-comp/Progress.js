import React, { useState, useEffect } from 'react';

const Progress = ({ startValue, endValue, footer }) => {
    const [progressValue, setProgressValue] = useState(startValue);
    
    useEffect(() => {
      const interval = setInterval(() => {
        if (progressValue < endValue) {
          setProgressValue(prevValue => prevValue + 1);
        } else {
          clearInterval(interval);
        }
      }, 10);
      
      return () => clearInterval(interval);
    }, [progressValue, endValue]);
    
    return (
      <div className="flex flex-col items-center mb-8">
        <div className="circular-progress mb-4" style={{ background: `conic-gradient(#000000 ${progressValue * 3.6}deg, #ededed 0deg)` }}>
          <div className="relative text-[2.5rem] font-normal text-black hover:text-[#ff9b05] hover:text-[2.55rem]">{progressValue}%</div>
        </div>
        <div className='font-medium pl-[4.4rem]'>
          {footer}
        </div>
      </div>
    );
  };

export default Progress

