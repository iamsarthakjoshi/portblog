import SummaryItem from '../common/SummaryItem';
import Section from './Section';
import IExperience from '../../interfaces/IExperience';

export default function SectionExperience({
  experience,
}: {
  experience: IExperience[];
}) {
  if (!experience.length) return null;

  return (
    <Section title="Experience">
      {experience.map((item: IExperience) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          description={item.description}
          link={item.link}
        />
      ))}
    </Section>
  );
}
