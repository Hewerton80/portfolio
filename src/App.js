import React,{useState} from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import writer from "./utils/writer"
import vars from "./utils/vars"
import {MobileStepper,Stepp} from "./components/mobileStepper/styled"
import Header from "./components/header/styled"
import AboutMe from "./components/aboutMe/styled"
import Experience from "./components/experience/styled"
import {Row,Col} from "./components/Grid/styled"
import GlobalStyle from "./assets/global"
//import begin from "./assets/images/begin.svg"
import cloud1 from "./assets/images/cloud1.png"
import cloud2 from "./assets/images/cloud2.png"
import cloud3 from "./assets/images/cloud3.png"
import cloud4 from "./assets/images/cloud4.png"
import sol from "./assets/images/sol.gif"
import cat from "./assets/images/cat.gif"
import me from "./assets/images/hewerton.jpg"
// import github_logo from "./assets/images/github_pixel.png"
// import linkedin_logo from "./assets/images/linkedin_pixel.png"
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function App() {
  //const elementsToWrite = document.querySelectorAll(".white-title-experience")
  
  // useEffect(()=>{

  // },[])
  const [showAboutMe,setShowAboutMe] = useState(false)
  const [showExperience,setShowExperience] = useState(false)
  const [index,setIndex] = useState(0)

  // const [showContacts,setShowContacts] = useState(false)

  async function handleAboutMe(){
    if(!showAboutMe){
      await setShowAboutMe(true);
      writer("#title h1",200,vars.name);
      writer("#display p span#text",10,vars.aboutMe);
      writer("span#nome",100,vars.name);
      writer("span#email",100,vars.email);
      writer("span#tel",100,vars.tel);
      writer("span#end",100,vars.end);
    }
  }
  async function handleShowExperience(){
    if(!showExperience){
      await setShowExperience(true);
      writer("#title-experience h1",500,"Experiência");
    }
  }
  function handleChangeIndex(i){
    setIndex(i)
  }
  // async function handleContacts(){
  //   if(!showContacts){
  //     await setShowContacts(true)

  //   }
  // }
  // function handleScroll(){
  //   const windowTop = window.pageYOffset + (window.innerHeight*3)/4;
  //   //console.log("elemento para animar: ", elementsToWrite);
  //   if(elementsToWrite){
  //     elementsToWrite.forEach(e=>{
  //       console.log("windowTop: ", windowTop)
  //       console.log("elemento para animar: ",e.offsetTop)
  //       console.log("innerHtml: ",typeof e.innerHTML )
  //       if(windowTop>e.offsetTop) {
  //         if(e && !e.innerHTML) {
  //           writer(".white-title-experience",500,"Experiência")
  //         }
  //       }
  //     })
  //   }
  // }
  // window.addEventListener("scroll",handleScroll)
  return (
    <>
    <Header onClick={handleAboutMe}>
      <a id="redirectAboutMe" href="#container-aboutMe">
      <img className="cloud" id="cloud1" src={cloud1} alt="cloud1"/>
      <img className="cloud" id="cloud2" src={cloud2} alt="cloud2"/>  
      <img className="cloud" id="cloud3" src={cloud3} alt="cloud3"/>  
      <img className="cloud" id="cloud4" src={cloud4} alt="cloud4"/>
      <img className="cloud" id="cat" src={cat} alt="."/>
      <img id="sol" src={sol} alt="sol"/>
      <h1>Click to begin</h1>
      </a>
      <footer/>
    </Header>
    <AboutMe show={showAboutMe}>
      <div id="stars">
        <div id="container-aboutMe">
 
          <div id="container-info">
            <Row>
              <Col xs={12} >
                <div id="profile">
                  <div id="avatar">
                    <span >
                      <img src={me} alt="hewerton"/>
                    </span>
                  </div>
                  <div id="title">
                    <h1>Hewerton Adão da Paz</h1><span className="pointer">&nbsp;</span>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              {/* <Col xs={12} lg={6}>
                <div id="info">
                  <div id="avatar">
                    <img src={me} alt="hewerton"/>
                  </div>
                
                  <div id="menu">
                    <ul>
                      <div><li>Nome: <span id="nome">{vars.name}</span> </li><span className="pointer" >&nbsp;</span></div>
                      <div><li>Email: <span id="email">{vars.email}</span></li><span className="pointer" >&nbsp;</span></div>
                      <div><li>Telefone: <span id="tel">{vars.tel}</span></li><span className="pointer" >&nbsp;</span></div>
                      <div><li>Endereço: <span id="end">{vars.end}</span></li><span className="pointer" >&nbsp;</span></div>
                      <li >
                        <a href="https://github.com/Hewerton80" target="_blank" rel="noopener noreferrer" title="https://github.com/Hewerton80">
                          <img src={github_logo} alt="https://github.com/Hewerton80"/>
                        </a>
                        <a href="https://www.linkedin.com/in/hewerton-ad%C3%A3o-5b7952127" target="_blank" rel="noopener noreferrer" title="https://www.linkedin.com/in/hewerton-ad%C3%A3o-5b7952127">
                          <img src={linkedin_logo} alt="https://www.linkedin.com/in/hewerton-ad%C3%A3o-5b7952127"/>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col> */}

              <Col xs={12} >
                <div id="display">
                  <p>
                    <span id="text">{vars.aboutMe}</span>
                    <span className="pointer">&nbsp;</span>
                  </p> 
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <div id="next-level">
                  <a href="#container-experience">
                    <button onClick={handleShowExperience}>
                      Next Level >
                    </button>
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </AboutMe>
    <Experience show={showExperience}>
      <div id="moon">
        <div id="container-experience">
          <div id="title-experience">
            <h1>Experiências</h1><span className="pointer">&nbsp;</span>
          </div>
          
          <div id="container-display">
          {vars.portfolio.map((port,i)=>
            <div key={i+"port"} className="display-xp">
              <Row>
                <Col xs={12} lg={6}>
                  
                </Col>
                <Col xs={12} lg={6}>
                  <div className="imgs">
                    <AutoPlaySwipeableViews
                      index={index}
                      onChangeIndex={handleChangeIndex}
                      enableMouseEvents
                    >
                      {/* <img src={screenshot_lop1} alt="lop"/>
                      <img src={screenshot_lop2} alt="lop"/>
                      <img src={screenshot_lop3} alt="lop"/> */}
                      {port.imgs.map((image,i)=>
                        <img key={i+"imgs"} src={image} alt="lop"/>
                      )}
                    </AutoPlaySwipeableViews>
                    
                    <MobileStepper>
                      {port.imgs.map((image,i)=>
                        <Stepp
                          key={i+String(image)}
                          active={index===i?true:false}
                          onClick={()=>handleChangeIndex(i)}
                        />
                      )}

            
                    </MobileStepper>
                    {/* <div className="pages">
                      <div className="stepp"/>
                      <div className="stepp"/>
                    </div> */}
                  </div>

                </Col>
              </Row>
            </div>
          )}
          </div>
          
        </div>
        
      </div>
      <footer/>
    </Experience>
    <GlobalStyle/>
    </>
  );
}

export default App;
