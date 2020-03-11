import {createGlobalStyle} from "styled-components"
import fontPressStart from "./fonts/PressStart2P-Regular.ttf"
import marioKart from "./fonts/Mario-Kart-DS.ttf"
import fonyM04b from "./fonts/m04b.TTF"

export default createGlobalStyle`
    @font-face{
        src: url(${fontPressStart});
        font-family: 'Press Start 2P';    
        font-weight: normal;
    }
    @font-face{
        src: url(${marioKart});
        font-family: 'Mario kart';    
        font-weight: normal;
    }
    @font-face{
        src: url(${fonyM04b});
        font-family: 'm04b';    
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