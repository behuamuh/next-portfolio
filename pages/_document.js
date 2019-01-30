import Document, { Main, Head, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="description" content="My portfolio cite" />
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width" />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Mali"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>
          {`
            body {
              margin: 0;
              font-size: 110%;
              background: #f0f0f0;
              font-family: "Mali", cursive;
            }
          `}
        </style>
      </html>
    );
  }
}
