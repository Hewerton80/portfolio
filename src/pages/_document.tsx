import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import { Helmet } from 'react-helmet'

class MyDocument extends Document {

    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang='pt_BR'>
                <Head >
                    <meta name="author" content="Hewerton Hewerton Adão" />
                    <meta name="robots" content="index" />
                    
                    <meta name="description" content="portfolio de Hewerton Adão" />

                    <meta property="og:description" content="portfolio de Hewerton Adão" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Hewerton Adão" />
                    <meta property="og:locale" content="pt_BR" />
                    <meta property="og:image" content="https://avatars.githubusercontent.com/u/37268237?v=4" />
                    <meta property="og:url" content="https://vercel.com/hewerton-portfolio" />
                    <meta property="og:site_name" content="Hewerton Adão" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument