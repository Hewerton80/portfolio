import styled,{keyframes} from "styled-components"
import sea from "../../assets/images/sea.png"
import bubble from "../../assets/images/bubbles.png"
import sea2 from "../../assets/images/sea2.png"


const move = keyframes`
    0%{
        background-position-x:-200%;
    }
    100%{
        background-position-x:450%;
    }
`;
const moveIverse = keyframes`
    0%{
        background-position-x:200%;
    }
    100%{
        background-position-x:-450%;
    }
`;
const pisca2 = keyframes`
    0%,100%{
        opacity:1;
    }
    50%{
        opacity:0;
       
    }
`
const animateImgs = keyframes`
    0%{
        opacity:.3;
        transform:translateX(-100px);
    }
    30%{
        transform:translateX(80px);
    }
    55%{
        transform:translateX(-60px);
       
    }
    75%{
        transform:translateX(40px);
     
    }
    90%{
        transform:translateX(-20px);
        opacity:1;

    }
    100%{
        transform:translateX(0px);
    }
`

export default  styled.section`
    
    background: linear-gradient(180deg, rgba(57,104,192,1) 10%, rgba(48,95,183,1) 10%, rgba(48,95,183,1) 20%, rgba(17,64,152,1) 20%, rgba(17,64,152,1) 30%, rgba(0,40,128,1) 30%, rgba(0,40,128,1) 40%, rgba(0,32,119,1) 40%, rgba(0,32,119,1) 50%, rgba(0,24,112,1) 50%, rgba(0,24,112,1) 100%);
    display:${props=>props.show?"block":"none"};
    
    #bubbles{
        background-image:url(${sea2});        
        background-repeat:no-repeat;
        background-position-y:20%;
        animation-name:${moveIverse};
        animation-duration:80s;
        animation-timing-function:linear;
        animation-iteration-count:infinite;
        @media(min-width: 840px){
            animation-name:${move};
        }
    }
    #container-contacts{
        padding:32px 20px;
        min-height:calc(100vh - 64px - 153px);
        
        #title-contact{
            display:flex;
            justify-content:center;
            margin:32px 0 64px 0;
            h1{
                font-family:'Press Start 2P';
                background: -webkit-linear-gradient(#ffc855 50%, #c08200 50%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;

                @media (min-width: 1px) {
                    font-size:18px;
                } 
                @media (min-width: 576px) {
                    font-size:28px;
                }      
                @media (min-width: 768px) {
                    font-size:36px;
                }
            }
            span.pointer{
                width:15px;
                background-color: #fff;
                margin-left:5px;
                animation-name:${pisca2};
                animation-duration:.7s;
                animation-iteration-count:infinite;
            }
        }
        #container-logos{
            width:100%;
            display:flex;
            justify-content:center;
            margin-bottom:32px;
            #logos{
                img{
                    width:75px;
                    margin: 0 32px;
                    animation-name:${animateImgs};
                    animation-duration:3s;
                    animation-timing-function:linear;
                    transition-duration:.3s;
                    &:hover{
                        transform:scale(1.2)
                    }
                }
            }
        }
        #phone{
            width:100%;
            display:flex;
            align-items:center;
            justify-content:center;
            margin-bottom:32px;
            img{
                width:40px;
                margin-right:10px;
            }
            h3{
                font-family:'Press Start 2P';
                background: -webkit-linear-gradient(#ffb400 50%, #dd9c00 50%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                @media (min-width: 1px) {
                    font-size:10px;
                } 
                @media (min-width: 576px) {
                    font-size:14px;
                }      
                @media (min-width: 768px) {
                    font-size:18px;
                }

            }
            span.pointer{
                width:15px;
                background-color: #fff;
                margin-left:5px;
                animation-name:${pisca2};
                animation-duration:.7s;
                animation-iteration-count:infinite;
            }
        }
        #email{
            width:100%;
            display:flex;
            align-items:center;
            justify-content:center;
            img{
                width:30px;
                margin-right:10px;
   
            }
            h1{
                font-family:'Press Start 2P';
                background: -webkit-linear-gradient(#ffb800 50%, #d18b00 50%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                @media (min-width: 1px) {
                    font-size:12px;
                } 
                @media (min-width: 576px) {
                    font-size:20px;
                }      
                @media (min-width: 768px) {
                    font-size: 28px;
                }
            }
            span.pointer{
                width:15px;
                background-color: #fff;
                margin-left:5px;
                animation-name:${pisca2};
                animation-duration:.7s;
                animation-iteration-count:infinite;
            }
        }

    }
    footer{
        height:153px;
        background-image:url(${sea});
        background-repeat:no-repeat;
        background-position-y:bottom;
        background-size:100vw;
        
    }
`;