import Layout from '../components/common/Layout';
import Header from '../components/common/Header';
import DateFormatter from '../components/common/DateFormatter';

const classes = {
  wrapper: 'mt-16 blog-content',
  title: 'mt-16 text-4xl text-gray-900 font-bold',
  date: 'text-gray-600 font-light',
};

export default function BlogPost({ data }) {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Header metadata={data.site.siteMetadata} />
      <h1 className={classes.title}>{post.frontmatter.title}</h1>
      <p className={classes.date}>
        Posted on <DateFormatter dateString={data.date} />
      </p>
      <div
        className={classes.wrapper}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Layout>
  );
}
