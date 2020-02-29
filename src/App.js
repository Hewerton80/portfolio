import React,{useEffect,useState} from 'react';
import whiter from "./utils/whiter"
import vars from "./utils/vars"
import Header from "./components/header/styled"
import AboutMe from "./components/aboutMe/styled"
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
import github_log from "./assets/images/github_octocat.png"
import linkedin_logo from "./assets/images/linkedin.png"


function App() {

  // useEffect(()=>{

  // },[])
  const [showGame,setShowGame] = useState(false)
  const [showAboutMe,setShowAboutMe] = useState(false)
  const [showContacts,setShowContacts] = useState(false)

  async function handleAboutMe(){
    if(!showAboutMe){
      await setShowAboutMe(true)
      whiter("#title h1",500,"Sobre mim")
      whiter("#display p span#text",30,vars.aboutMe)
      whiter("span#nome",100,vars.name)
      whiter("span#email",100,vars.email)
      whiter("span#tel",100,vars.tel)
      whiter("span#end",100,vars.end)
    }
  }
  async function handleContacts(){
    if(!showContacts){
      await setShowContacts(true)

    }
  }
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
      {/* <img id="planets" src={planets} alt="planets"/> */}
      <div id="stars">
        <div id="container-aboutMe">
        <div id="title">
          <h1>Sobre mim</h1><span className="pointer">&nbsp;</span>
        </div>
        <div id="container-info">
          <Row>
            <Col xs={12} lg={6}>
              <div id="info">
                <div id="avatar">
                  <img src={me} alt="hewerton"/>
                </div>
              
                <div id="menu">
                  {/* <ul>
                    <div>
                      <li>
                        <button onClick={handleAboutMe}>
                          <span> Sobre mim</span>
                        </button>
                      </li>
                    </div>
                    <div >
                      <li>
                        <button >
                          <span> Habibildades</span>
                        </button>
                      </li>
                    </div>
                    <div >
                      <li>
                        <button >
                          <span> Experiências</span>
                        </button>
                      </li>
                    </div>
                    <div >
                      <li>
                        <button onClick={handleContacts}>
                          <span> Contatos</span>
                        </button>
                      </li>
                    </div>
                  </ul> */}
                  <ul>
                    <div><li>Nome: <span id="nome">{vars.name}</span> </li><span className="pointer" >&nbsp;</span></div>
                    <div><li>Email: <span id="email">{vars.email}</span></li><span className="pointer" >&nbsp;</span></div>
                    <div><li>Telefone: <span id="tel">{vars.tel}</span></li><span className="pointer" >&nbsp;</span></div>
                    <div><li>Endereço: <span id="end">{vars.end}</span></li><span className="pointer" >&nbsp;</span></div>
                    <li >
                      <a href="https://github.com/Hewerton80" target="_blank" rel="noopener noreferrer" title="https://github.com/Hewerton80">
                        <img src={github_log} alt="https://github.com/Hewerton80"/>
                      </a>
                      <a href="https://www.linkedin.com/in/hewerton-ad%C3%A3o-5b7952127" target="_blank" rel="noopener noreferrer" title="https://www.linkedin.com/in/hewerton-ad%C3%A3o-5b7952127">
                        <img src={linkedin_logo} alt="https://www.linkedin.com/in/hewerton-ad%C3%A3o-5b7952127"/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div id="display">
                {showAboutMe?
                  <p>
                  <span id="text">{vars.aboutMe}</span>
                  <span className="pointer">&nbsp;</span>
                  </p> 
                :showContacts?
                  <ul>
                    <div><li>Nome: <span id="nome">{vars.name}</span> </li><span className="pointer" >&nbsp;</span></div>
                    <div><li>Email: <span id="email">{vars.email}</span></li><span className="pointer" >&nbsp;</span></div>
                    <div><li>Telefone: <span id="tel">{vars.tel}</span></li><span className="pointer" >&nbsp;</span></div>
                    <div><li>Endereço: <span id="end">{vars.end}</span></li><span className="pointer" >&nbsp;</span></div>
                    <li >
                      <a href="https://github.com/Hewerton80" target="_blank" rel="noopener noreferrer" title="https://github.com/Hewerton80">
                        <img src={github_log} alt="https://github.com/Hewerton80"/>
                      </a>
                      <a href="https://www.linkedin.com/in/hewerton-ad%C3%A3o-5b7952127" target="_blank" rel="noopener noreferrer" title="https://www.linkedin.com/in/hewerton-ad%C3%A3o-5b7952127">
                        <img src={linkedin_logo} alt="https://www.linkedin.com/in/hewerton-ad%C3%A3o-5b7952127"/>
                      </a>
                    </li>
                  </ul>
                :
                  null
                }
              </div>
            </Col>
          </Row>

        </div>
      </div>
      </div>
    </AboutMe>
    <GlobalStyle/>
    </>
  );
}

export default App;
