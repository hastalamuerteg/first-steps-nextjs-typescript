import Date from "../../components/date";
import Layout from "../../components/layout";
import Head from "next/head";

import { getAllPostIds, getPostData } from "../../lib/posts";
import { GetStaticProps, GetStaticPaths } from "next";

interface IPostData {
  id: string;
  title: string;
  date: string;
  contentHTML: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};

export default function Post({ postData }: { postData: IPostData }) {
  const { title, date, contentHTML } = postData;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <h2 className="text-2xl font-bold text-green-300">{title}</h2>
      <Date dateString={date} />
      <div dangerouslySetInnerHTML={{ __html: contentHTML }} />
    </Layout>
  );
}
