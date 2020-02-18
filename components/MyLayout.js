import Header from './Header';
import Footer from './Footer';

export default function Layout(props) {
  return (
    <>
      <div>
        <Header />
        {props.children}
        <Footer />
      </div>
      <style jsx>{`
        div {
          display: grid;
          grid-gap: 10px;
          grid-template-columns: 120px 120px 120px;
          grid-template-areas:
            '....... header header'
            'sidebar content content'
            'footer  footer  footer';
          background-color: #fff;
          color: #444;
        }
      `}</style>
      <style jsx global>{`
        header.box {
          background-color: #444;
          color: #fff;
          border-radius: 5px;
          padding: 10px;
          font-size: 150%;
        }

        header,
        footer {
          background-color: #999;
        }
      `}</style>
    </>
  );
}
