import Header from './Header';
import Footer from './Footer';

export default function Layout(props) {
  return (
    <>
      <div className="wrapper">
        <header className="box header">
          <Header />
        </header>
        <main className="box main">{props.children}</main>
        <footer className="box footer">
          <Footer />
        </footer>
      </div>
      <style jsx>{`
        .wrapper {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-areas:
            'header'
            'main'
            'footer';
          background-color: #fff;
          color: #444;
        }

        .header {
          grid-area: header;
        }

        .main {
          grid-area: main;
        }

        .footer {
          grid-area: footer;
        }

        .header,
        .footer {
          background-color: #999;
        }
      `}</style>
    </>
  );
}
