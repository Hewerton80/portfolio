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
    from{
        left: -30%;
    }
    to{
        left: 75%;
    }
`
const move2 = keyframes`
    from{
        left: 10%;
    }
    to{
        left: -30%;
    }
`
const move3 = keyframes`
    from{
        left: 132%;
    }
    to{
        left: -30%;
    }
`
const move4 = keyframes`
    from{
        left: 176%;
    }
    to{
        left: -30%;
    }
`

export default  styled.header`
    @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
    background-color:#649FD8;
    height:100vh;
    display:flex;
    justify-content:center;
    overflow:hidden;

    img.cloud{
        position:absolute;
        z-index: 1;
        display: block!important;
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
    img#begin{
        position:absolute;
        z-index:1;
        top:65%;
        width:37vw;
        animation-name:${pisca};
        animation-duration:.7s;
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