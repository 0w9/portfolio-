import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <html data-theme="cupcake">
      <Component {...pageProps} />
    </html>
  )
}

export default MyApp;
