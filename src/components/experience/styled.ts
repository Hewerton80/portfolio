import styled, { keyframes } from 'styled-components';
import { SectionsProps } from '../../types/global';

const move = keyframes`
    0%{
        background-position-x:-200%;
    }
    100%{
        background-position-x:450%;
    }
`;
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
const pisca2 = keyframes`
    0%,100%{
        opacity:1;
    }
    50%{
        opacity:0;
       
    }
`

export default styled.section<SectionsProps>`
    background: linear-gradient( #FF9D51 0%,#FFB070 100%);
    display:${props => props.show ? "block" : "none"};

    #container-experience{
        min-height:calc(100vh - 136px);
        padding:32px 20px;
        background-image:url('/images/clouds2.png');
        background-repeat:no-repeat;
        background-repeat:repeat-y;
        background-size:73vw;
        background-position-y:20%;
        animation-name:${move};
        animation-duration:120s;
        animation-timing-function:linear;
        animation-iteration-count:infinite;
        #title-experience{
            display:flex;
            justify-content:center;
            margin:32px 0 64px 0;
            h1{
                font-family:'Press Start 2P';
                background: -webkit-linear-gradient(#050938 50%, #303887 50%);
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
        #container-display{
            width:100%;
            margin-right: auto;
            margin-left: auto;
            
            display:flex;
            justify-content:center;
            flex-direction:column;
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

            .display-xp{
                width:98%;                
                background-color:rgba(253, 253, 253, 0.5);
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                margin-bottom:32px;
                .description{
                    width:100%;
                    padding:32px 32px 0 32px;
                    display:flex;
                    flex-direction:column;
                    h1{
                        font-family:"Press Start 2P";
                        font-size:20px;
                        text-align:center;
                        background: -webkit-linear-gradient(#030101 50%, #464646 50%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                    p{
                        font-family:"Press Start 2P";
                        margin-top:24px;
                        font-size:12px;
                        color:#464646;
                        line-height:20px;
                    }
                    h3{
                        font-family:"Press Start 2P";   
                        font-size:14px;
                        margin-top:24px;
                        background: -webkit-linear-gradient(#030101 50%, #464646 50%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                    .techs{
                        display:flex;
                        flex-direction:row;
                        flex-wrap:wrap;
                        width:100%;
                        margin-top:16px;
                        span{
                            display:flex;
                            text-align:center;
                            margin:8px 8px 0px 0px;
                            padding:6px 8px;
                            justify-content:center;
                            font-family:"Mario Kart";
                            color:#DCDBDA;
                            font-size:18px;
                            text-align:center;
                            background: linear-gradient(#2A2A2A 50%, #4B4C4A 50%);
                       }
                    }

                    @media (max-width: 576px) {
                        h1{
                            font-size:14px;
                        }
                        p{
                            font-size:8px;
                        }
                        h3{
                            font-size:10px;
                        }
                        .techs{
                            span{
                                font-size:12px;
                            }
                        }
                    }
                }
                .imgs{
                    padding:32px;
                    display:flex;
                    /* align-items: center; */
                    flex-direction:column;
                    overflow:hidden;
                    justify-content:center;
                    position:relative;
                    img{
                        /* width:100%; */
                        max-width: 490px;
                        cursor:pointer;
                    }
                }
                .visit{
                    width:100%;
                    display:flex;
                    justify-content:flex-end;
                    padding:0 32px 32px 32px;
                    a{
                        button{
                            display:flex;
                            align-items:center;
                            justify-content:center;
                            padding:8px;
                            font-family:'Press Start 2P';
                            font-size:14px;
                            color:#DCDBDA;
                            background: linear-gradient(#2A2A2A 50%, #4B4C4A 50%);
                            border: 0;
                            border-radius:4px;
                            @media (max-width: 576px) {
                                font-size:12px;
                            }
                            svg {
                                margin-left: 10px;
                            }
                        }
                    }
                }
    
            }


            #next-contacts{
                width:100%;
                display:flex;
                justify-content:flex-end;
                button{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    padding:8px;
                    font-family:'Press Start 2P';
                    font-size:18px;
                    color:#fff;
                    background: linear-gradient(#050938 50%, #303887 50%);
                    border: 0;
                    border-radius:4px;
                    animation-name:${upDown};
                    animation-duration:1s;
                    animation-timing-function:linear;
                    animation-iteration-count:infinite;
                    svg {
                        margin-left: 10px;
                    }
                }
            }
        }
    }
    #moon{
        background-image:url('/images/moon_pixel.gif');
        background-repeat:no-repeat;
        background-position: 10% calc(10% - 72px);
        background-size:18vw;
    }
    footer{
        /* position:absolute;
        top:100%; */
        width:100%; 
        height:72px;
        background-image:url('/images/solo.png');
        background-repeat:repeat-x;
    }
`;