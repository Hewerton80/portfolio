import screenshot_lop1 from "../assets/images/Screenshot_lop11.png"
import screenshot_lop2 from "../assets/images/Screenshot_lop22.png"
import screenshot_lop3 from "../assets/images/Screenshot_lop33.png"

import screenshot_urlShort1 from "../assets/images/url-short1.png"
import screenshot_urlShort2 from "../assets/images/url-short2.png"
import screenshot_urlShort3 from "../assets/images/url-short3.png"

import screenshot_poke1 from "../assets/images/poke1.png"
import screenshot_poke2 from "../assets/images/poke2.png"
import screenshot_poke3 from "../assets/images/poke3.png"
import screenshot_poke4 from "../assets/images/poke4.png"
import screenshot_poke5 from "../assets/images/poke5.png"

import screenshot_drive1 from "../assets/images/Screenshot-drive.png"
import screenshot_drive2 from "../assets/images/Screenshot-drive2.png"
import screenshot_insta1 from "../assets/images/Screenshot-insta1.png"
import screenshot_insta2 from "../assets/images/Screenshot-insta2.png"
import screenshot_insta3 from "../assets/images/Screenshot-insta3.png"

const vars =  {
    aboutMe: `
        Graduando do bacharelado em ciência e Tecnologia com ênfase em Engenharia da Computação na UFRN.       
        Sou um programador fullstack, com experiência em Javascript, typescript, NodeJs, express,
        ReactJs, Angular, banco de dados relacionaise não relacionais, bootstrap, html, css. No momento estudo React
        Native e tenho interesse em escalabilidade, DevOps e práticas de testes.
    `,
    name: "Hewerton Adão da Paz",
    email: "hewerton80@gmail.com",
    tel: "(84) 988091975",
    end: "Natal, RN",
    portfolio: [
        {
            title: "Platafoma LoP",
            description: "Sou colaborador de uma plataforma voltada para área da educação, essa plataforma tem o intuito de agilizar o processo de ensino e aprendizagem na área da programação. Ideal para praticar algorítimos, a plataforma faz correções automáticas dos códigos submetidos.",
            techs: [
                "HTML",
                "CSS",
                "JavaScript",
                "NodeJS",
                "MySQL",
                "ReactJS",
                "BootStrap"
            ],
            imgs: [
                screenshot_lop1,
                screenshot_lop2,
                screenshot_lop3
            ],
            link: "https://lop.ect.ufrn.br",
        }, {
            title: "Poke info",
            description: "Projeto desenvolvido para consumir a api 'pokeapi.co'. Funcionalidades: Lista pokemons, habilidades, tipos e obtêm informações especificas do pokemon.",
            techs: [
                "HTML",
                "CSS",
                "NodeJS",
                "ReactJS",
                "Material UI",
                "Styled components"
            ],
            imgs: [
                screenshot_poke1,
                screenshot_poke2,
                screenshot_poke3,
                screenshot_poke4,
                screenshot_poke5,
            ],
            link: "https://upbeat-jones-72d20b.netlify.app/",
        },
        {
            title: "Encurtador de URLs",
            description:
                `
                Sistema web onde seja possível um usuário poder realizar o encurtamento de uma URL.
            `,
            imgs: [
                screenshot_urlShort1,
                screenshot_urlShort2,
                screenshot_urlShort3
            ],
            techs: [
                "HTML",
                "CSS",
                "TypeScript",
                "NodeJS",
                "MongoDB",
                "ReactJS",
                
            ],
            link: "https://url-shortener-hewerton80.vercel.app",
        }, {
            title: "Google Drive",
            description:
                `
                Para fins de estudo, desenvolvi um "clone" do Google drive 100% responivo. 
            Onde usuário pode se cadastrar, criar pastas, navegar entre elas,
             fazer uploads de arquivos, renomear, mover para lixeira, etc.
            `,
            imgs: [
                screenshot_drive1,
                screenshot_drive2
            ],
            techs: [
                "HTML",
                "CSS",
                "JavaScript",
                "NodeJS",
                "MongoDB",
                "ReactJS",
            ],
            link: "https://jovial-lamport-bad4c9.netlify.com",
        }, {
            imgs: [
                screenshot_insta1,
                screenshot_insta2,
                screenshot_insta3
            ],
            title: "Instagram",
            description:
                `
                Para fins de estudo, desenvolvi ampliar as funcionaidades do projeto da Semana 7 da OmniStack (instagram). 
            Onde usuário pode se cadastrar, postar fotos, colocar o local, descrição e hastags.
            `,
            techs: [
                "HTML",
                "CSS",
                "JavaScript",
                "NodeJS",
                "MongoDB",
                "ReactJS",
            ],
            link: "https://distracted-pasteur-c86c90.netlify.com",
        }

    ]
}
export default vars;