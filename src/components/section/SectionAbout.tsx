import Section from './Section';

export default function SectionAbout({ about }) {
  return (
    <Section title="About Me">
      <div className="mb-6">
        <p>{about}</p>
      </div>
    </Section>
  );
}
