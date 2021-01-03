import SummaryItem from '../common/SummaryItem';
import Section from '../section/Section';
import DateFormatter from '../common/DateFormatter';
// import IBlogPost from '../interfaces/IBlogPost';

export default function BlogPosts({ blogPosts }: { blogPosts: any }) {
  if (!blogPosts.length) return null;

  return (
    <Section title="All Blog Posts">
      {blogPosts.map(({ id, date, title }) => (
        <SummaryItem
          key={id}
          name={title}
          description={<DateFormatter date={date} prefix={'Posted on'} />}
          link={`/posts/${id}`}
        />
      ))}
    </Section>
  );
}
