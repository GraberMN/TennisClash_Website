import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import titleImg from './assets/title.png'
import titleScreenImg from './assets/titleScreenSS.png'
import characterSelectImg from './assets/characterSelectSS.png'
import gameScreen1Img from './assets/gameScreen1SS.png'
import gameScreen2Img from './assets/gameScreen2SS.png'
import optionsPageImg from './assets/optionsPageSS.png'
import rightButtonImg from './assets/rightButton.png'
import leftButtonImg from './assets/leftButton.png'
import './App.css'

function nextPreviewImage(isRight, idList) {
    if (isRight) {
        document.getElementById(idList[0]).style.zIndex = "4";
        let temp = idList.shift();
        idList.push(temp);
        document.getElementById(idList[0]).style.zIndex = "5";
    }
    else {
        document.getElementById(idList[0]).style.zIndex = "4";
        let temp = idList.pop();
        idList.unshift(temp);
        document.getElementById(idList[0]).style.zIndex = "5";
    }
}

function App() {
    const idList = ["titleScreen", "characterSelect", "gameScreen1", "gameScreen2", "optionsPage"];
    const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <div className="title">
          <img src={titleImg} width="600" height="133" alt="Tennis Clash" />
        </div>
        <div id="previewSection">
          <h1 id="previewTitle">Preview</h1>
            <div id="previewSlideshow">
              <img src={titleScreenImg} id="titleScreen" width="600" height="400" alt="Title Screen Image"/>
              <img src={characterSelectImg} id="characterSelect" width="600" height="400" alt="Character Select Image" />
              <img src={gameScreen1Img} id="gameScreen1" width="600" height="400" alt="Game Screen 1 Image" />
              <img src={gameScreen2Img} id="gameScreen2" width="600" height="400" alt="Game Screen 2 Image" />
              <img src={optionsPageImg} id="optionsPage" width="600" height="400" alt="Options Page Image" />
              <img src={rightButtonImg} onClick={() => nextPreviewImage(true, idList)} id="rightButton" width="75" height="150" alt="Right Button" />
              <img src={leftButtonImg} onClick={() => nextPreviewImage(false, idList)} id="leftButton" width="75" height="150" alt="Left Button" />
            </div>
        </div>
        <a href="TennisClash.zip" download="TennisClash.zip">
          <button
            type="button"
            className="downloadButton"
          >
            Download
          </button>
        </a>
      </section>

      <div className="ticks"></div>

      <section id="infoSection">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Download Instructions</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>

        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Hey, It's Me, The Creator</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
