import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="description" content="Frontend coding test" />
                    <link rel="icon" href="/favicon.ico" />
                    <link href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet" />
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
