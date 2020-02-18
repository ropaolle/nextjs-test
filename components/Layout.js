import Header from './Header';
import Footer from './Footer';

export default function Layout(props) {
  return (
    <>
      <div className="wrapper">
        <header>
          <Header />
        </header>
        <main>{props.children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
      <style jsx>{`
        .wrapper {
          display: grid;
          grid-template-rows: minmax(50px, max-content) auto minmax(50px, max-content);
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
          background-color: #999;
          display: flex;
          align-items: center;
        }

        main {
          grid-area: main;
          background-color: #666;
          padding: 0 20px;
        }

        footer {
          grid-area: footer;
          background-color: #999;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
      `}</style>
    </>
  );
}
