import {createGlobalStyle} from "styled-components"
import fontPressStart from "./fonts/PressStart2P-Regular.ttf"

export default createGlobalStyle`
    /* @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap'); */
    @font-face{
        src: url(${fontPressStart});
        font-family: 'Press Start 2P';    
        font-weight: normal;
    }
    html{
        scroll-behavior: smooth;
    }
    *{
        margin:0;
        padding:0;
    }

    a{
        text-decoration:none;
    }
    button{
        cursor:pointer;
        outline:none;
    }
    ul{
        list-style:none;
    }
`;