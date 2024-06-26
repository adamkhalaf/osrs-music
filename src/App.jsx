import React, { useRef } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RunescapeMap from "./RunescapeMap";
import { getRandomSong } from "./utils/getSong";
import GuessCountComponent from "./components/guessCount";
import DailyGuessLabel from "./components/dailyGuessLabel";
import Footer from "./components/footer";

// TODO:
// rs-stylize the volume control and the start button. overlay volume control on top left of map vertically
// regenerate tile data for bigger zoom levels (maybe up to 7-8, and remove 0-1)
// difficulty settings

const initialSong = getRandomSong();
let dailyMode = false;

function App({ dailyChallenge }) {
  const audioRef = useRef(null);
  const sourceRef = useRef(null);
  const [currentSong, setCurrentSong] = useState(initialSong);
  const [guessResult, setGuessResult] = useState(-1);
  const [startedGame, setStartedGame] = useState(false);
  const [resultVisible, setResultVisible] = useState(false);
  const [dailyResults, setDailyResults] = useState([]);
  const [dailyChallengeIndex, setDailyChallengeIndex] = useState(0);
  const [dailyComplete, setDailyComplete] = useState(false);

  let next = false;
  const playSong = (songName) => {
    const src = `https://oldschool.runescape.wiki/images/${songName
      .trim()
      .replaceAll(" ", "_")}.ogg`;
    sourceRef.current.src = src;
    audioRef.current.load();
    audioRef.current.play();
  };

  return (
    <div className="App">
      <div>
        <div
          className="App-inner">
          <div className="statistics" style={{ display: startedGame ? "block" : "none" }}>
            <table>
              <tbody>
                <tr>
                  <td>Guesses</td>
                  <td style={{ textAlign: "right" }}>
                    <GuessCountComponent />
                  </td>
                </tr>
                <tr>
                  <td>Users</td>
                  <td style={{ textAlign: "right" }}>4</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="ui-box" style={{ display: startedGame ? "block" : "none" }}>
            <div className="below-map">
              {dailyMode && (
                <table
                  style={{
                    marginBottom: "10px",
                    width: "100%",
                    pointerEvents: "none",
                  }}>
                  <tbody>
                    <tr>
                      <td>
                        <DailyGuessLabel number={dailyResults[0] || "-"} />
                      </td>
                      <td>
                        <DailyGuessLabel number={dailyResults[1] || "-"} />
                      </td>
                      <td>
                        <DailyGuessLabel number={dailyResults[2] || "-"} />
                      </td>
                      <td>
                        <DailyGuessLabel number={dailyResults[3] || "-"} />
                      </td>
                      <td>
                        <DailyGuessLabel number={dailyResults[4] || "-"} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}

              {/* guess button */}
              <div
                className="guess-btn-container"
                onClick={() => {
                  if (dailyMode) {
                    if (dailyComplete) {

                      return;                        
                    } else {
                      const newSongName = dailyChallenge.songs[dailyChallengeIndex + 1];
                      setCurrentSong(newSongName);
                      playSong(newSongName);
                      setDailyChallengeIndex(dailyChallengeIndex + 1);
                    }
                  } else {
                    const newSongName = getRandomSong();
                    setCurrentSong(newSongName);
                    playSong(newSongName);
                  }
                }}>
                <img
                  src={process.env.PUBLIC_URL + "../assets/osrsButtonWide.png"}
                  alt="OSRS Button"
                />
                <div
                  className="guess-btn">
                  {dailyComplete == true
                    ? "Share Results"
                    : guessResult == -1
                    ? "Place your pin on the map"
                    : "Next Song"}
                </div>
              </div>
              <audio controls id="audio" ref={audioRef}>
                <source id="source" ref={sourceRef} type="audio/ogg"></source>
              </audio>
            </div>
            <Footer/>
          </div>
        </div>
        <div className={`${!startedGame ? "blur" : ""}`}>
          <RunescapeMap
            currentSong={currentSong}
            setGuessResult={setGuessResult}
            setResultVisible={setResultVisible}
            resultVisible={resultVisible}
            dailyResults={dailyResults}
            setDailyResults={setDailyResults}
            dailyChallengeIndex={dailyChallengeIndex}
            setDailyComplete={setDailyComplete}
          />
        </div>
        {!startedGame && (
          <div className="main-menu-container">
            <img
              className="main-menu-image"
              src={process.env.PUBLIC_URL + "/assets/Jingle.png"}
              alt="Jingle"
            />
            <h1 className="main-menu-text">Jingle</h1>
            {/* <h1 className="main-menu-description">"It's like GeoGuessr, but for OSRS Music"</h1> */}
            <h1
              className="main-menu-option"
              style={{ left: "30%" }}
              onClick={() => {
                setStartedGame(true);
                setCurrentSong(dailyChallenge.songs[0]);
                playSong(dailyChallenge.songs[0]);
                dailyMode = true;
              }}>
              Daily
              <br />
              Challenge
            </h1>
            <h1
              className="main-menu-option"
              style={{ left: "70%" }}
              onClick={() => {
                setStartedGame(true);
                playSong(currentSong);
              }}>
              Practice Mode
            </h1>
          </div>
        )}
        {dailyComplete && (
          <div className="main-menu-container">
            <h1 className="main-menu-text">Copy Results to Clipboard</h1>
            <h1 className="main-menu-option" style={{ left: "30%", pointerEvents: "none" }}>
              {dailyResults[0]}
              <br />
              {dailyResults[1]}
              <br />
              {dailyResults[2]}
              <br />
              {dailyResults[3]}
              <br />
              {dailyResults[4]}
            </h1>
          </div>
        )}
        <div
          className="alert result-message"
          role="alert"
          style={{
            opacity: resultVisible ? 1 : 0,
            marginTop: resultVisible ? "-60px" : "0px"
          }}>
          +{guessResult}
        </div>
      </div>
    </div>
  );
}

export default App;
