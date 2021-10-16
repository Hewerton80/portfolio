const vars = {
    aboutMe: `
        Graduando do bacharelado em ciência e Tecnologia na UFRN.       
        Sou um programador fullstack, com experiência em Javascript, typescript, NextJs, NodeJs, express,
        ReactJs, banco de dados relacionais e não relacionais, bootstrap, html, css. No momento estudo React
        Native e tenho interesse em escalabilidade, Clean code e práticas de testes.
    `,
    name: "Hewerton Adão da Paz",
    email: "hewerton80@gmail.com",
    tel: "(84) 9880-91975",
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
                '/images/Screenshot_lop11.png',
                '/images/Screenshot_lop22.png',
                '/images/Screenshot_lop33.png'
            ],
            link: "https://lop.ect.ufrn.br",
        },
        {
            title: "Gerenciador de tarefas",
            description:
                `
                Agendador/Gerenciador de tarefas. Funcionalidades: Criar/Atualizar/Remover tarefas, 
                Listar tarefas com base nas categorias (Atrasadas, Para fazer hoje, Para fazer e Feitas), 
                Atualizar tarefas para 'Feitas' 
            `,
            imgs: [
                'https://user-images.githubusercontent.com/37268237/110219011-8321e780-7e9b-11eb-9138-065fb96003e8.gif'
            ],
            widthImages: 200,
            techs: [
                "React Native",
                "TypeScript",
                "Styled Components",
            ],
            link: "https://github.com/Hewerton80/Task-Manger/blob/master/README.md",
        },
        {
            title: "My-animes",
            description:
                `
                Site similar ao IMD animes, utilizando a kitsu api. Ótimo para acompanhar os novos lançamentos e avaliações da comunidade otaku.
            `,
            imgs: [
                '/images/my-animes1.png',
                '/images/my-animes2.png',
                '/images/my-animes3.png',
                '/images/my-animes4.png',
            ],
            techs: [
                "TypeScript",
                "NextJs",
            ],
            link: "https://my-animes-db.vercel.app/",
        },
        {
            title: "Encurtador de URLs",
            description:
                `
                Sistema web onde seja possível um usuário poder realizar o encurtamento de uma URL.
            `,
            imgs: [
                '/images/url-short1.png',
                '/images/url-short2.png',
                '/images/url-short3.png',
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
        },
        {
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
                '/images/poke1.png',
                '/images/poke2.png',
                '/images/poke3.png',
                '/images/poke4.png',
                '/images/poke5.png',
            ],
            link: "https://upbeat-jones-72d20b.netlify.app/",
        },
        {
            title: "Google Drive",
            description:
                `
                Para fins de estudo, desenvolvi um "clone" do Google drive 100% responivo. 
            Onde usuário pode se cadastrar, criar pastas, navegar entre elas,
             fazer uploads de arquivos, renomear, mover para lixeira, etc.
            `,
            imgs: [
                '/images/Screenshot-drive.png',
                '/images/Screenshot-drive2.png',
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
        },
        {

            title: "Instagram",
            description:
                `
                Para fins de estudo, desenvolvi ampliar as funcionaidades do projeto da Semana 7 da OmniStack (instagram). 
            Onde usuário pode se cadastrar, postar fotos, colocar o local, descrição e hastags.
            `,
            imgs: [
                '/images/Screenshot-insta1.png',
                '/images/Screenshot-insta2.png',
                '/images/Screenshot-insta3.png',
            ],
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