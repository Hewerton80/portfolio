// @next/next/no-img-element
import { useState, useCallback } from 'react';
import writer from "../utils/writer"
import vars from "../utils/vars"
import Header from "../components/header/styled"
import AboutMe from "../components/aboutMe/styled"
import Experience from "../components/experience/styled"
import Contact from "../components/contact/styled"
import { FaGreaterThan } from 'react-icons/fa'

import DisplayExperience from "../components/diplayExperience";
import { Row, Col } from "../components/Grid"
import GlobalStyle from "../assets/global"

function Index() {
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showContacts, setShowContacts] = useState(false);

  // const [showContacts,setShowContacts] = useState(false)
  const handleAboutMe = useCallback(() => {
    if (!showAboutMe) {
      setShowAboutMe(true);
      writer("#title h1", 200, vars.name);
      writer("#display p span#text", 10, vars.aboutMe);
      writer("span#nome", 100, vars.name);
      writer("span#email", 100, vars.email);
      writer("span#tel", 100, vars.tel);
      writer("span#end", 100, vars.end);
    }
  }, [showAboutMe]);

  const handleShowExperience = useCallback(() => {
    if (!showExperience) {
      setShowExperience(true);
      writer("#title-experience h1", 300, "Experiências");
    }
  }, [showExperience]);

  const handleShowContacts = useCallback(() => {
    if (!showContacts) {
      setShowContacts(true);
      writer("#title-contact h1", 300, "Contatos");
      writer("#phone h3", 300, vars.tel);
      writer("#email h1", 300, vars.email);
    }
  }, [showContacts]);

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
          <img
            className="cloud"
            id="cloud1"
            src='/images/cloud1.png'
            alt="cloud1"
          />
          <img
            className="cloud"
            id="cloud2"
            src='/images/cloud2.png'
            alt="cloud2"
          />
          <img
            className="cloud"
            id="cloud3"
            src='/images/cloud3.png'
            alt="cloud3"
          />
          <img
            className="cloud"
            id="cloud4"
            src='/images/cloud4.png'
            alt="cloud4"
          />
          <img
            className="cloud"
            id="cat"
            src='/images/cat.gif'
            alt="cat"
          />
          <img
            id="sol" src='/images/sol.gif' alt="sol"
          />
          <h1>Click to begin</h1>
        </a>
        <footer />
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
                        <img src='/images/hewerton.jpg' alt="hewerton" />
                      </span>
                    </div>
                    <div id="title">
                      <h1>Hewerton Adão da Paz</h1><span className="pointer">&nbsp;</span>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
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
                  <div id="next-experience">
                    <a href="#container-experience">
                      <button onClick={handleShowExperience}>
                        Experiências
                        <FaGreaterThan/>
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
              <Row>
                {vars.portfolio.map((port, i) =>
                  <Col key={'port' + i} xs={12} lg={6}>
                    <DisplayExperience
                      key={i}
                      i={i}
                      port={port}
                    />
                  </Col>
                )}
              </Row>
              <Row>
                <Col xs={12}>
                  <div id="next-contacts">
                    <a href="#container-contacts">
                      <button onClick={handleShowContacts}>
                        Contatos
                        <FaGreaterThan
                          color={'#fff'}
                        />
                      </button>
                    </a>
                  </div>
                </Col>
              </Row>
            </div>

          </div>
        </div>
        <footer />
      </Experience>
      <Contact show={showContacts}>
        <div id="bubbles">


          <div id="container-contacts">
            <div id="title-contact">
              <h1>Contatos</h1> <span className="pointer">&nbsp;</span>
            </div>

            <div id="container-logos">
              <div id="logos">
                <a href="https://github.com/Hewerton80" target="_blank" rel="noopener noreferrer" title="https://github.com/Hewerton80">
                  <img src='/images/github_pixel.png' alt="https://github.com/Hewerton80" />
                </a>
                <a href="https://www.linkedin.com/in/hewerton-ad%C3%A3o-5b7952127" target="_blank" rel="noopener noreferrer" title="https://www.linkedin.com/in/hewerton-ad%C3%A3o-5b7952127">
                  <img src='/images/linkedin_pixel.png' alt="https://www.linkedin.com/in/hewerton-ad%C3%A3o-5b7952127" />
                </a>
              </div>
            </div>
            <div id="phone">
              <img src='/images/whatsapp_pixel.png' alt="whats" />
              <h3>{vars.tel}</h3> <span className="pointer">&nbsp;</span>
            </div>
            <div id="email">
              <img src='/images/email_pixel.png' alt="whats" />
              <h1>{vars.email}</h1> <span className="pointer">&nbsp;</span>
            </div>
          </div>
        </div>
        <footer />
      </Contact>
      <GlobalStyle />
    </>
  );
}

export default Index;
