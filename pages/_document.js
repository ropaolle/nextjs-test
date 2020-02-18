import Document, { Html, Head, Main, NextScript } from 'next/document';
// import StylesBase from '../StylesBase';

// const globalStyles = `
// * {
//   box-sizing: border-box;
//   margin: 0;
//   padding: 0;
// }
// `;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" /> */}
          {/* <style type="text/css">{globalStyles}</style> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        {/* <StylesBase /> */}
        <style jsx global>{`
          p {
            color: blue;
          }
        `}</style>
      </Html>
    );
  }
}

export default MyDocument;
