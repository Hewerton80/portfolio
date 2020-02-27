import styled,{keyframes} from "styled-components"
import grama from "../../assets/images/grama.svg"
const pisca = keyframes`
    0%,100%{
        opacity:1;
    }
    50%{
        opacity:0
    }
`
const move1 = keyframes`
    0%{
        left: -30%;
    }
    90%{
        opacity:1;
    }
    100%{
        opacity:0;
        left: 75%;
    }
`
export default  styled.header`
    @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
    background-color:#649FD8;
    height:100vh;

    a{
        height:100%;
        display:flex;
        justify-content:center;
        overflow:hidden;
    }
    h1{
        font-family:'Press Start 2P';
        position:absolute;
        z-index:1;
        top:65%;
        background: -webkit-linear-gradient(#FF9F26 50%, #FFCF92 50%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation-name:${pisca};
        animation-duration:.7s;
        animation-iteration-count:infinite;
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

    img.cloud{
        position:absolute;
        z-index: 2;
    }
    img#sol{
        position:absolute;
        left: 10%;
        width:20vw;
        top:calc(17% - 72px);
        
    }
    img#cloud1{
        left: 6%;
        top:calc(17% - 72px);
        width:24vw;
        /* height:24vw; */

        animation-name:${move1};
        animation-duration:30s;
        animation-timing-function:linear;
        animation-iteration-count:infinite;
    }
    img#cloud2{
        left: -30%;
        top:0%;
        width:24vw;
        /* height:24vw; */
        animation-name:${move1};
        animation-duration:30s;
        animation-delay:7s;
        animation-timing-function:linear;
        animation-iteration-count:infinite;
    }
    img#cloud3{
        left: -30%;
        top:calc(48% - 72px);
        width:18vw;
        /* height:18vw; */
        animation-name:${move1};
        animation-duration:30s;
        animation-delay:2s;
        animation-timing-function:linear;
        animation-iteration-count:infinite;
    }
    img#cloud4{
        left: -30%;
        top:calc(66% - 72px);
        width:11vw;
        /* height:11vw; */
        animation-name:${move1};
        animation-duration:25s;
        animation-delay:0s;
        animation-timing-function:linear;
        animation-iteration-count:infinite;
    }
    img#cat{
        left: -30%;
        top:calc(60% - 72px);
        width:4vw;
        /* height:11vw; */
        animation-name:${move1};
        animation-duration:15s;
        animation-delay:0s;
        animation-timing-function:linear;
        animation-iteration-count:infinite;
    }
    footer{
        height:72px;
        background-color:#81C56C;
        width:100%;
        position:absolute;
        top:calc(100vh - 72px);
        background-image:url(${grama});
        background-repeat:repeat-x;
        background-position:10px 10px;
    }
`;