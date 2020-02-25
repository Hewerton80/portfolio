import React from 'react';
import Header from "./components/header/styled"
import GlobalStyle from "./assets/global"
//import begin from "./assets/images/begin.svg"
import cloud1 from "./assets/images/cloud1.png"
import cloud2 from "./assets/images/cloud2.png"
import cloud3 from "./assets/images/cloud3.png"
import cloud4 from "./assets/images/cloud4.png"
import sol from "./assets/images/sol.gif"

function App() {
  return (
    <>
    <Header>
        <img className="cloud" id="cloud1" src={cloud1} alt="cloud1"/>
        <img className="cloud" id="cloud2" src={cloud2} alt="cloud2"/>  
        <img className="cloud" id="cloud3" src={cloud3} alt="cloud3"/>  
        <img className="cloud" id="cloud4" src={cloud4} alt="cloud4"/>
        <img id="sol" src={sol} alt="sol"/>
        <h1>Click to begin</h1>
        {/* <img id="begin" src={begin} alt="click to begin"/> */}
      <footer/>
    </Header>
    <h1>olá</h1>
    <br/><br/><br/><br/><br/><br/><br/>
    <GlobalStyle/>
    </>
  );
}

export default App;
