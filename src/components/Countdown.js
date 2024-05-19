import React, { useEffect, useState } from 'react';
import '../style/resultScreen.css';
import getCurrentDateInBritain from '../utils/getCurrentDateinBritain';

const Countdown = () => {
  const [countdown, setCountdown] = useState('');
  const dailyCompleted =
    localStorage?.dailyComplete === getCurrentDateInBritain();

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const utcNow = new Date(now.getTime() + now.getTimezoneOffset() * 60000);

      // Calculate the next 04:00 UTC
      let nextFourAMUTC = new Date(
        Date.UTC(
          utcNow.getUTCFullYear(),
          utcNow.getUTCMonth(),
          utcNow.getUTCDate(),
          3,
          0,
          0,
        ),
      );

      // If the current time is past 04:00 UTC, set the target to the next day
      if (utcNow >= nextFourAMUTC) {
        nextFourAMUTC = new Date(
          Date.UTC(
            utcNow.getUTCFullYear(),
            utcNow.getUTCMonth(),
            utcNow.getUTCDate() + 1,
            3,
            0,
            0,
          ),
        );
      }

      const timeLeft = nextFourAMUTC - utcNow;

      const hours = Math.floor(timeLeft / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      const timeString = `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      setCountdown(timeString);
    };

    const interval = setInterval(calculateTimeLeft, 1000);

    // Initial call to set the countdown immediately
    calculateTimeLeft();

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {!dailyCompleted ? (
        <p style={{ color: '#00FF00' }}>Ready</p>
      ) : (
        <div className='result-screen-time-row'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
            viewBox='0 0 800 800'
            preserveAspectRatio='xMidYMid slice'
            className='clock-svg'
          >
            <defs>
              <pattern
                id='pppixelate-pattern'
                width='20'
                height='20'
                patternUnits='userSpaceOnUse'
                patternTransform='translate(0 0) scale(40) rotate(0)'
                shape-rendering='crispEdges'
              >
                <rect
                  width='1'
                  height='1'
                  x='7'
                  y='1'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='8'
                  y='1'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='9'
                  y='1'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='10'
                  y='1'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='11'
                  y='1'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='5'
                  y='2'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='6'
                  y='2'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='7'
                  y='2'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='11'
                  y='2'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='12'
                  y='2'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='13'
                  y='2'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='3'
                  y='3'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='4'
                  y='3'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='5'
                  y='3'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='9'
                  y='3'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='13'
                  y='3'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='14'
                  y='3'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='15'
                  y='3'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='3'
                  y='4'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='9'
                  y='4'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='15'
                  y='4'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='2'
                  y='5'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='3'
                  y='5'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='9'
                  y='5'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='15'
                  y='5'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='16'
                  y='5'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='2'
                  y='6'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='9'
                  y='6'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='16'
                  y='6'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='1'
                  y='7'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='2'
                  y='7'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='9'
                  y='7'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='16'
                  y='7'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='17'
                  y='7'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='1'
                  y='8'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='9'
                  y='8'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='17'
                  y='8'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='1'
                  y='9'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='9'
                  y='9'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='17'
                  y='9'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='1'
                  y='10'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='10'
                  y='10'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='17'
                  y='10'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='1'
                  y='11'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='2'
                  y='11'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='11'
                  y='11'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='16'
                  y='11'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='17'
                  y='11'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='2'
                  y='12'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='12'
                  y='12'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='16'
                  y='12'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='2'
                  y='13'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='3'
                  y='13'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='15'
                  y='13'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='16'
                  y='13'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='3'
                  y='14'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='15'
                  y='14'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='3'
                  y='15'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='4'
                  y='15'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='5'
                  y='15'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='13'
                  y='15'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='14'
                  y='15'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='15'
                  y='15'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='5'
                  y='16'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='6'
                  y='16'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='7'
                  y='16'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='11'
                  y='16'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='12'
                  y='16'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='13'
                  y='16'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='7'
                  y='17'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='8'
                  y='17'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='9'
                  y='17'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='10'
                  y='17'
                  fill='#edfd07'
                ></rect>
                <rect
                  width='1'
                  height='1'
                  x='11'
                  y='17'
                  fill='#edfd07'
                ></rect>
              </pattern>
            </defs>
            <rect
              width='100%'
              height='100%'
              fill='url(#pppixelate-pattern)'
            ></rect>
          </svg>

          {countdown}
        </div>
      )}
    </>
  );
};

export default Countdown;