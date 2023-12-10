import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* meta begin */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          {/* meta end */}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* public assets begin */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap-grid.min.css"
            integrity="sha384-GLhlTQ8iK7lSw5GpfDQnx6uJ+Ac6Z9S/Zy4DeLUqL5z5Lq6UJeg6QpxXZUqoWrAl"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofI+Yd/RSn7xIM+1PU7W2jOVWreRXI5TkN"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/swiper/swiper-bundle.min.css"
          />
          {/* public assets end */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
