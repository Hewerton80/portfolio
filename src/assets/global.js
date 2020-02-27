import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
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