import { NextPage } from 'next';
import Layout from '../components/Layout';
import Link from 'next/link';

interface Props {
  id: string;
}

const PostLink: NextPage<Props> = ({ id }) => (
  <li>
    <Link href="/p/[id]" as={`/p/${id}`}>
      <a>{id}</a>
    </Link>
    <style jsx>{`
      li {
        margin: 5px 0;
      }
    `}</style>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <p className="lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, architecto a? Quas minus dolores delectus error
        ullam eos voluptate nesciunt, similique blanditiis doloribus commodi beatae explicabo autem impedit? Accusamus,
        ad?
      </p>
      <ul>
        <PostLink id="hello-nextjs" />
        <PostLink id="learn-nextjs" />
        <PostLink id="deploy-nextjs" />
      </ul>
      <style jsx>{`
        /*h1 {
          background-color: goldenrod;
        }

        p {
          color: blueviolet;
        }*/
      `}</style>
    </Layout>
  );
}
