import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react';
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
              <a href="./var/www/html/TennisClash.zip" download="TennisClash.zip">
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
        <div id="downloadInstructions">
          <svg id="icon1" role="presentation" aria-hidden="true">
            <use href="/instructionsIcon.svg"></use>
          </svg>
          <h1>Download & Play Instructions</h1>
          <p>Your questions, answered</p>
          <h2>Video Guide</h2>
          <video width="600" height="400" controls>
            
          </video>
          <h2>Written Guide</h2>
          <p>1) Click the Download button above, and go to Downloads in File Explorer.</p>
          <p>2) Extract "TennisClash.zip" into Downloads or wherever you want.ㅤㅤㅤㅤ</p>
          <p>3) Find and go into the extracted folder, and follow this path:ㅤㅤㅤㅤㅤㅤ&#8287;</p>
          <p>TennisClash -&gt; out -&gt; build -&gt; x64-debug-user -&gt; TennisClashㅤㅤㅤ</p>
          <p>4) Right click on "TennisClash.exe", and then click Show more options -&gt;ㅤ</p>
          <p>Send to ... Desktop (create shortcut)ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</p>
          <p>5) Go to your Desktop, and open up the new shortcut icon. Have fun!ㅤㅤ</p>
        </div>

        <div id="mySocials">
          <svg id="icon2" role="presentation" aria-hidden="true">
            <use href="/creatorIcon.svg"></use>
          </svg>
          <h1>Hey, It's Me, The Creator</h1>
          <p>Mateo Graber</p>
          <ul>
            <li>
              <a href="https://github.com/GraberMN" target="_blank">
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
              <a href="https://www.linkedin.com/in/mateo-g-33a20230b/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/linkedinLogo.svg"></use>
                </svg>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/mayothebrotho" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/instagramLogo.svg"></use>
                </svg>
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100086580240269" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/facebookLogo.svg"></use>
                </svg>
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="spacer">
        <div id="copyright"> © 2026 Mateo Graber. All rights reserved. </div>
      </section>
      <Analytics />
    </>
  )
}

export default App
