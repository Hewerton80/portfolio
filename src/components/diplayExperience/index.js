import React,{useState} from 'react';
import {Row,Col} from "../Grid/styled"
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {MobileStepper,Stepp} from "../mobileStepper/styled"
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default props =>{
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
                        {/* <h3>Tecnologias: </h3> */}

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
                            <a key={j+"imgs"} href="https://lop.ect.ufrn.br" target="_blank" rel="noopener noreferrer">
                                <img  src={image} alt="lop"/>
                            </a>
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
        </div>
    )
}