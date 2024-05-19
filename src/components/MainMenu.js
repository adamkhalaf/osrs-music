import React from 'react';
import { mediaHostUrl } from '../data/hostUrl';
import { getDailyChallenge, getStatistics } from '../db/db';
import '../style/mainMenu.css';
import getCurrentDateInBritain from '../utils/getCurrentDateinBritain';
import Countdown from './Countdown';

export default function MainMenu({
  setDailyComplete,
  setResultsArray,
  setTimeTaken,
  setStartedGame,
  setStartTime,
  setCurrentSong,
  currentSong,
  playSong,
  dailyChallenge,
  setDailyMode,
  dailyComplete,
  setPracticeRoundsMode,
}) {
  const [guessCount, setGuessCount] = React.useState(0);
  const [dailySubmissions, setDailySubmissions] = React.useState(0);
  const fetchPost = async () => {
    getStatistics().then((response) => {
      const guesses = response.guesses;
      setGuessCount(guesses);
    });
    getDailyChallenge().then((response) => {
      const submissions = response.submissions;
      setDailySubmissions(submissions);
    });
  };
  React.useEffect(() => {
    const interval = setInterval(() => {
      fetchPost();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className='main-menu-container'>
      <img
        className='main-menu-image'
        src={`${mediaHostUrl}/Jingle.png`}
        alt='Jingle'
      />
      <h1 className='main-menu-text'>Jingle</h1>
      {/* Daily Jingle Option */}
      <h1
        className='main-menu-option'
        style={{ left: '30%', top: '70%' }}
        onClick={() => {
          if (localStorage?.dailyComplete === getCurrentDateInBritain()) {
            setDailyComplete(true);
            setResultsArray(JSON.parse(localStorage.dailyResults));
            setTimeTaken(localStorage.dailyTimeTaken);
          }
          if (dailyComplete) {
            setStartedGame(true);
            return;
          } else {
            setStartTime(new Date());
            setStartedGame(true);
            setCurrentSong(dailyChallenge.songs[0]);
            playSong(dailyChallenge.songs[0]);
            setDailyMode(true);
          }
        }}
      >
        Daily Jingle
        <Countdown style={{ color: 'orange' }} />
      </h1>
      {/* Practice Rounds Option */}
      {/* <h1
        className='main-menu-option'
        style={{ left: '50%', top: '70%' }}
        onClick={() => {
          setStartTime(new Date());
          setStartedGame(true);
          setPracticeRoundsMode(true);
          playSong(currentSong);
        }}
      >
        Practice Rounds
      </h1> */}
      {/* Infinite Training Option */}
      <h1
        className='main-menu-option'
        style={{ left: '70%', top: '70%' }}
        onClick={() => {
          setStartedGame(true);
          playSong(currentSong);
        }}
      >
        Unlimited Practice
      </h1>
      <div className='menu-statistics'>
        <div>
          {guessCount.toLocaleString()}
          <br />
          <span style={{ fontSize: '78%' }}>Guesses</span>
        </div>
        {/* <div>
          {dailySubmissions.toLocaleString()}
          <br />
          <span style={{ fontSize: '78%' }}>Today</span>
        </div> */}
      </div>
    </div>
  );
}