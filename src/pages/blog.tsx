import BlogPosts from '../components/blog-post/BlogPosts';
import Layout from './../components/common/Layout';
import { getSortedPostsData } from './../lib/posts';

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      {allPostsData?.length > 0 ? <BlogPosts blogPosts={allPostsData} /> : null}
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
