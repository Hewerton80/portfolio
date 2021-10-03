// @next/next/no-img-element
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { writer } from "../utils/writer"
import vars from "../utils/vars"
import Header from "../components/header/styled"
import AboutMe from "../components/aboutMe/styled"
import Experience from "../components/experience/styled"
import Contact from "../components/contact/styled"
import { FaGreaterThan } from 'react-icons/fa'
import DisplayExperience from "../components/diplayExperience";
import { Row, Col } from "../components/Grid"

function Index() {
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showContacts, setShowContacts] = useState(false);

  const clickToBeginTextRef = useRef<HTMLHeadingElement>(null);
  const aboutMeTextRef = useRef<HTMLSpanElement>(null);
  const experienceTextRef = useRef<HTMLHeadingElement>(null);
  const contactTextRef = useRef<HTMLHeadingElement>(null);
  const phoneTextRef = useRef<HTMLHeadingElement>(null);
  const emailTextRef = useRef<HTMLHeadingElement>(null);

  const router = useRouter();

  useEffect(() => {
    if (showAboutMe) {
      router.push('#container-aboutMe');
      writer(clickToBeginTextRef, 200, vars.name)
      writer(aboutMeTextRef, 10, vars.aboutMe);
    }
  }, [showAboutMe]);

  useEffect(() => {
    if (showExperience) {
      router.push('#container-experience')
      writer(experienceTextRef, 300, "Experiências");
    }
  }, [showExperience])

  useEffect(() => {
    if (showContacts) {
      router.push('#container-contacts')
      writer(contactTextRef, 300, "Contatos");
      writer(phoneTextRef, 300, vars.tel);
      writer(emailTextRef, 300, vars.email);
    }
  }, [showContacts])

  return (
    <>
      <Header onClick={() => showAboutMe ? router.push('#container-aboutMe') : setShowAboutMe(true)}>
        <div id="redirectAboutMe">
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
        </div>
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
                      <h1 ref={clickToBeginTextRef}>Hewerton Adão da Paz</h1><span className="pointer">&nbsp;</span>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} >
                  <div id="display">
                    <p>
                      <span id="text" ref={aboutMeTextRef}>{vars.aboutMe}</span>
                      <span className="pointer">&nbsp;</span>
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <div id="next-experience">
                    <button onClick={() => showExperience ? router.push('#container-experience') : setShowExperience(true)}>
                      Experiências
                      <FaGreaterThan />
                    </button>
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
              <h1 ref={experienceTextRef}>Experiências</h1><span className="pointer">&nbsp;</span>
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
                    <button onClick={() => showContacts ? router.push('#container-contacts') : setShowContacts(true)}>
                      Contatos
                      <FaGreaterThan
                        color={'#fff'}
                      />
                    </button>
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
              <h1 ref={contactTextRef}>Contatos</h1> <span className="pointer">&nbsp;</span>
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
              <h3 ref={phoneTextRef}>{vars.tel}</h3> <span className="pointer">&nbsp;</span>
            </div>
            <div id="email">
              <img src='/images/email_pixel.png' alt="whats" />
              <h1 ref={emailTextRef}>{vars.email}</h1> <span className="pointer">&nbsp;</span>
            </div>
          </div>
        </div>
        <footer />
      </Contact>
    </>
  );
}

export default Index;
