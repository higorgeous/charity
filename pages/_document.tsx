import Document, {
    DocumentContext,
    Html,
    Head,
    Main,
    NextScript,
} from 'next/document'

class AppDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link
                        rel="preload"
                        as="style"
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
                    />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
                        media="print"
                        // @ts-ignore
                        onLoad="this.media='all'"
                    />
                    <noscript>
                        <link
                            rel="stylesheet"
                            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
                        />
                    </noscript>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default AppDocument;
