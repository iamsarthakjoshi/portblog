import { parseISO, format } from 'date-fns';

type Props = {
  date: string;
  prefix?: string;
};

export default function DateFormatter({ date, prefix }: Props) {
  const parsedDate = parseISO(date);
  return (
    <>
      <span>{prefix} </span>
      <time dateTime={date}>{format(parsedDate, 'LLLL	d, yyyy')}</time>
    </>
  );
}
