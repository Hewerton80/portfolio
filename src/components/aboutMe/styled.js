import styled,{keyframes} from 'styled-components';

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

export default styled.section`
    @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
    background: linear-gradient( #40014D 0%,#570668 100%);
    display:${props=>props.show?"block":"none"};

    #container-aboutMe{
        
        min-height:100vh;
        padding:32px;
        span.pointer{
            width:15px;
            background:#fff;
            margin-left:5px;
            animation-name:${pisca2};
            animation-duration:.7s;
            animation-iteration-count:infinite;
        }
        #title{
            display:flex;
            justify-content:center;
            margin-bottom:32px;
            h1{
                font-family:'Press Start 2P';
                background: -webkit-linear-gradient(#756700 50%, #F8E667 50%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                /* animation-name:${pisca1};
                animation-duration:.7s;
                animation-iteration-count:infinite; */
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
        }
        #container-info{
            display:flex;
            
            
            #info{
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
                #contato{
                    ul{
                        div{
                            display:flex;
                            flex-direction:row;
                            align-items:center;
                            &+div{
                                    margin-top:16px;
                            }
                            li{
                                
                                font-family:'Press Start 2P';
                                font-size:16px;
                                background: -webkit-linear-gradient(#9E8B06 50%, #F8E667 50%);
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
                            margin: 16px 24px 0 0;
                            transition-duration:.3s;
                            &:hover{
                                transform:scale(1.2)
                            }
                        }
                    }
                }
            }
            #about-me{
                width:100%;
                border:5px solid #9346A4;
                padding:16px;
                display:flex;
                flex:1;
                flex-direction:row;
                margin-bottom:32px;
                p{
                    font-family:'Press Start 2P';
                    font-size:14px;
                    line-height:1.6;
                    color: #9346A4;
                    text-indent:30px;
                    @media (min-width: 1px) {
                        font-size:10px;
                    } 
                    @media (min-width: 576px) {
                        font-size:12px;
                    }      
                    @media (min-width: 768px) {
                        font-size:14px;
                    }
                    /* &::after{
                        content:"|";
                        margin-left:5px;
                        animation-name:${pisca2};
                        animation-duration:.7s;
                        animation-iteration-count:infinite;
                    } */
                }
            }
        }
    }
    
`;
