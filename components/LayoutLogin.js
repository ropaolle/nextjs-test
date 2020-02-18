export default function Layout({ children }) {
  return (
    <>
      <div className="wrapper">{children}</div>
      <style jsx>{`
        .wrapper {
          margin: 0;
          margin-top: 2rem;
          display: blocK;
        }
        @media (min-width: 600px) {
          .wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
}
