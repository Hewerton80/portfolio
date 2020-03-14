import styled,{keyframes} from "styled-components"

const pisca2 = keyframes`
    0%,100%{
        opacity:1;
    }
    50%{
        opacity:0;
       
    }
`

export default  styled.section`
    background-color:#555;
    display:${props=>props.show?"block":"none"};
    #container-contacts{
        padding:32px 20px;
        min-height:calc(100vh - 64px);
        #title-contact{
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
        #container-logos{
            width:100%;
            display:flex;
            justify-content:center;
            margin-bottom:32px;
            #logos{
                img{
                    width:75px;
                    margin: 0 32px;
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
                font-family:digits;
                background: -webkit-linear-gradient(#050938 50%, #303887 50%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;

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
                background: -webkit-linear-gradient(#050938 50%, #303887 50%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent; 
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
`;