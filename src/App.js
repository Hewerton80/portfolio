import React,{useEffect,useState} from 'react';
import whiter from "./utils/whiter"
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
  const [showAboutMe,setShowAboutMe] = useState(false)
  function hanleShowAboutMe(){
    setShowAboutMe(true)
    if(!showAboutMe){
      whiter("#title h1",500)
      whiter("#about-me p span#text",30)
      whiter("span#nome",500)
      whiter("#email",500)
      whiter("#tel",500)
      whiter("#end",500)
    }
    //document.querySelector("#redirectAboutMe").click()
    
  }
  return (
    <>
    <Header onClick={hanleShowAboutMe}>
      <a id="redirectAboutMe" href="#container-aboutMe">
      <img className="cloud" id="cloud1" src={cloud1} alt="cloud1"/>
      <img className="cloud" id="cloud2" src={cloud2} alt="cloud2"/>  
      <img className="cloud" id="cloud3" src={cloud3} alt="cloud3"/>  
      <img className="cloud" id="cloud4" src={cloud4} alt="cloud4"/>
      <img className="cloud" id="cat" src={cat} alt="."/>
      <img id="sol" src={sol} alt="sol"/>
      <h1>Click to begin</h1>
      {/* <img id="begin" src={begin} alt="click to begin"/> */}
      </a>
      <footer/>
    </Header>
    <AboutMe show={showAboutMe}>
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
              
                <div id="contato">
                  <ul>
                    <div><li>Nome: <span id="nome">Hewerton Adão da Paz</span> </li><span className="pointer">&nbsp;</span></div>
                    <div><li>Email: <span id="email">hewerton80@gmail.com</span></li><span className="pointer">&nbsp;</span></div>
                    <div><li>Telefone: <span id="tel">(84) 98809-1975</span></li><span className="pointer">&nbsp;</span></div>
                    <div><li>Endereço: <span id="end">Natal, RN</span></li><span className="pointer">&nbsp;</span></div>
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
              <div id="about-me">
                <p>
                <span id="text">Graduando do bacharelado em ciência e Tecnologia com ênfase em Engenharia em Computação na UFRN.
                
                Sou uma pessoa que sempre estar em busca de conhecimento e de se inovar, gosto de sempre de se manter atualizado sobre tudo.
                
                Não importa os desafios, sempre irei enfrenta-los, nem quais são as ferramentas, irei estuda-las. Sou pontual, proativo, assíduo e sempre me esforço para deixar o meu melhor, não sou daqueles que não se importam com o que os outros pensam, gosto sempre de estar passando uma boa impressão.
                </span>
                <span className="pointer">&nbsp;</span>
                </p> 
              </div>
            </Col>
          </Row>

        </div>
      </div>
    </AboutMe>
    <GlobalStyle/>
    </>
  );
}

export default App;
