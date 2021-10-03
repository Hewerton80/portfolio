import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    @font-face{
        src: url('/fonts/PressStart2P-Regular.ttf');
        font-family: 'Press Start 2P';    
        font-weight: normal;
    }
    @font-face{
        src: url('/fonts/Mario-Kart-DS.ttf');
        font-family: 'Mario kart';    
        font-weight: normal;
    }
    @font-face{
        src: url('./fonts/m04b.TTF');
        font-family: 'm04b';    
        font-weight: normal;
    } 
    @font-face{
        src: url('/fonts/advanced_pixel_lcd-7.ttf');
        font-family: 'digits';    
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