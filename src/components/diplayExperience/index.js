import React,{useState} from 'react';
import {Row,Col} from "../Grid/styled"
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {MobileStepper,Stepp} from "../mobileStepper/styled";
import { FaGreaterThan } from 'react-icons/fa'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const DiplayExperience = props =>{
    const {port,i} = props;
    const [index,setIndex] = useState(0);
    function handleChangeIndex(i){
        setIndex(i)
    }
    return (
        <div key={i+"port"} className="display-xp">
            <Row>
                <Col xs={12} lg={6}>
                    <div className="description">
                        <h1>{port.title}</h1>
                        <p>{port.description}</p>
                        <h3>Tecnologias: </h3>
                        <div className="techs">
                            {port.techs.map(tech=>
                                <span key={tech}>
                                    {tech.toUpperCase()}   
                                </span>
                            )}
                        </div>

                    </div>
                </Col>
                <Col xs={12} lg={6}>
                    <div className="imgs">
                        <AutoPlaySwipeableViews
                            index={index}
                            onChangeIndex={handleChangeIndex}
                            enableMouseEvents
                        >
                            {port.imgs.map((image,j)=>
                                <img  key={j+"imgs"} src={image} alt="lop"/>
                            )}
                        </AutoPlaySwipeableViews>
                        
                        <MobileStepper>
                            {port.imgs.map((image,j)=>
                                <Stepp
                                    key={j+"stepp"}
                                    active={index===j?true:false}
                                    onClick={()=>handleChangeIndex(j)}
                                />
                            )}
                        </MobileStepper>
                    </div>

                </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <div className="visit">
                    <a href={port.link} target="_blank" rel="noopener noreferrer">
                        <button >
                            Visitar <FaGreaterThan colors={'#fff'}  style={{marginLeft: 10}}/>
                        </button>
                  </a>
                </div>
              </Col>
            </Row>
        </div>
    )
}

export default DiplayExperience;