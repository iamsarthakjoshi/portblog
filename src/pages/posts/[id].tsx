import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import DOMPurify from 'isomorphic-dompurify';

import Layout from '../../components/common/Layout';
import DateFormatter from '../../components/common/DateFormatter';
import { getAllPostIds, getPostData } from '../../lib/posts';

const classes = {
  wrapper: 'mt-16 blog-content',
  title: 'mt-16 text-4xl text-gray-900 font-bold',
  date: 'text-gray-600 font-normal text-sm',
};

export default function BlogPost({ postData }) {
  const post = postData;

  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <h1 className={classes.title}>{post.title}</h1>
      <p className={classes.date}>
        <DateFormatter date={post.date} />
      </p>
      <div
        className={classes.wrapper}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(post.contentHtml),
        }}
      />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};
