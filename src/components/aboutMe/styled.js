import styled,{keyframes} from 'styled-components';
import planets from "../../assets/images/planets.png"
import stars from "../../assets/images/stars.png"
import colors from "../../assets/colors"

const move = keyframes`
    0%{
        background-position-x:-100%;
    }
    100%{
        background-position-x:300%;
    }
`;
const pisca1 = keyframes`
    0%{
        opacity:0;
        transform:translateY(-200px);
    }
    100%{
        opacity:1;
        transform:translateY(0);
    }
`
const pisca2 = keyframes`
    0%,100%{
        opacity:1;
    }
    50%{
        opacity:0;
       
    }
`
const upDown = keyframes`
    0%,100%{
        transform:scale(0.95);
    }
    25%,75%{
        transform:scale(1);
    }
    50%{
        transform:scale(1.05);
    }
`

export default styled.section`
    background: linear-gradient( ${colors.primary4} 0%,${colors.primary2} 100%);
    display:${props=>props.show?"block":"none"};
    #stars{
        background-image:url(${stars});
        animation-name:${move};
        animation-duration:440s;
        animation-timing-function:linear;
        animation-iteration-count:infinite;
    }
    #container-aboutMe{
        min-height:100vh;
        padding:32px 20px;
        background-image:url(${planets});
        
        background-repeat:no-repeat;
        background-position-y:20%;
        animation-name:${move};
        animation-duration:80s;
        animation-timing-function:linear;
        animation-iteration-count:infinite;


        #container-info{
            display:flex;
            flex-direction:column;
            width: 100%;
            margin-right: auto;
            margin-left: auto;
            @media (min-width: 576px) {
                max-width: 540px;
            }
            @media (min-width: 768px){
                max-width: 720px;
            }
            @media (min-width: 992px){
                max-width: 960px;
            }
            @media (min-width: 1200px){
                max-width: 1140px;
            }
            
            /* #info{
                width:100%;
                display:flex;
                flex-direction:column;
                margin-bottom:32px;
                #avatar{
                    width:196px;
                    height:196px;
                    border:5px solid #F8E667;
                    overflow:hidden;
                    margin-bottom:32px;
                    background:#fff;
                    img{
                        width:100%;
                        animation-name:${pisca1};
                        animation-duration:5s;
                        animation-timing-function:linear;
                    }
                }
                #menu{
                    ul{
                        div{
                            display:flex;
                            flex-direction:row;
                            align-items:center;
                            

                            &+div{
                                    margin-top:16px;
                            }
                            span.pointer{
                                background-color:#fff;
                            }
                            li{
                                
                                font-family:'Press Start 2P';
                                font-size:16px;
                                background: -webkit-linear-gradient(${colors.secunday3} 50%, ${colors.secunday1} 50%);
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                                @media (min-width: 1px) {
                                    font-size:10px;
                                } 
                                @media (min-width: 576px) {
                                    font-size:12px;
                                }      
                                @media (min-width: 768px) {
                                    font-size:16px;
                                }
                            
                            }
                        }
                        img{
                            width:62px;
                            margin: 16px 24px 0 0;
                            transition-duration:.3s;
                            &:hover{
                                transform:scale(1.2)
                            }
                        }
                    }
                }
            } */
            #profile{
                display:flex;
                flex-direction:column;
                width:100%;
         
                #avatar{
                    display:flex;
                    width:100%;
                    align-items:center;
                    justify-content:center;
                    margin:32px 0;
                    span{
                        width:196px;
                        height:196px;
                        border:5px solid #F8E667;
                        overflow:hidden;
                        background:#fff;
                        img{
                            width:100%;
                            animation-name:${pisca1};
                            animation-duration:5s;
                            animation-timing-function:linear;
                        }
                    }
                }
                #title{
                    display:flex;
                    justify-content:center;
                    margin-bottom:32px;
                    h1{
                        font-family:'Press Start 2P';
                        
                        background: -webkit-linear-gradient(${colors.secunday3} 50%, ${colors.secunday1} 50%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        @media (min-width: 1px) {
                            font-size:14px;
                        } 
                        @media (min-width: 576px) {
                            font-size:18px;
                        }      
                        @media (min-width: 768px) {
                            font-size:28px;
                        }
                    }
                }
            }
            #display{
                
                width:100%;
                min-height:400px;
                border:0;
                border-radius:5px;
                padding:16px;
                display:flex;
                margin-bottom:32px;
                background-color:${colors.primary5+"6B"};   
                @media (min-width: 768px) {
                    min-height:252px;
                }
                p{
                    
                    font-size:20px;
                    
                    font-family:'Press Start 2P';
                    /* line-height:30px; */
                    line-height:1.6;
                    color:#cccfec;
                    text-indent:30px;
                    span.pointer{
                        background-color:#cccfec;
                    }
                    @media (min-width: 1px) {
                        font-size:10px;
                        line-height:20px;
                    } 
                    @media (min-width: 576px) {
                        font-size:14px;
                        line-height:1.6;
                    }      
                    @media (min-width: 768px) {
                        font-size:18px;
                        
                    }
                }
            }
            #next-experience{
                width:100%;
                display:flex;
                justify-content:flex-end;
                a{
                    button{
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        padding:8px;
                        font-family:'Press Start 2P';
                        font-size:18px;
                        background: linear-gradient(#f0f80a 50%, #c8a104 50%);
                        border: 0;
                        border-radius:4px;
                        animation-name:${upDown};
                        animation-duration:1s;
                        animation-timing-function:linear;
                        animation-iteration-count:infinite;
                    }
                }
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
    
`;
