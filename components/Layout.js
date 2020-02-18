import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap';

export default function Layout({ children }) {
  return (
    <>
      <div className="wrapper">
        <header>
          <Header />
        </header>
        <main>
          <Container>{children}</Container>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
      <style jsx>{`
        .wrapper {
          display: grid;
          grid-template-rows: minmax(4rem, max-content) auto minmax(6rem, max-content);
          height: 100vh;
          grid-template-columns: 1fr;
          grid-template-areas:
            'header'
            'main'
            'footer';
          background-color: #fff;
          color: #444;
        }

        header {
          grid-area: header;
          background-color: #444;
          display: flex;
          align-items: center;
        }

        main {
          grid-area: main;
          background-color: #fff;
          padding: 40px 0;
        }

        footer {
          grid-area: footer;
          background-color: #e7e7e7;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
      `}</style>
    </>
  );
}
