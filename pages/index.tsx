import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle, user } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

interface IAllPostsData {
  date: string;
  title: string;
  id: string;
}
[];
export default function Home({
  allPostsData,
}: {
  allPostsData: IAllPostsData[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-center p-4">
        <p>{user.description}</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className="p-1 text-md">
        <h2 className="font-bold text-2xl text-center my-10">Blog</h2>
        <ul className="list-none">
          {allPostsData.map(({ id, title, date }) => (
            <li
              className="flex flex-col font-bold m-3 p-4 rounded-lg bg-white text-gray-800 shadow-lg cursor-pointer transform transition-all hover:bg-green-500"
              key={id}
            >
              <Link href={`/posts/${id}`}>
                <a className="block">{title}</a>
              </Link>
              <p className="text-sm font-semibold">
                <Date dateString={date} />
              </p>
            </li>
          ))}
        </ul>
      </section>
      <div>
        <Link href="./users/first-user">
          <a className="text-center text-green-500 font-semibold m-4">
            Go to users →
          </a>
        </Link>
      </div>
    </Layout>
  );
}
