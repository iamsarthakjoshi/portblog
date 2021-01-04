import Link from 'next/link';

const classes = {
  wrapper: 'mb-6',
  name:
    'font-semibold text-gray-900 pb-1 cursor-pointer dark:text-white lg:dark:hover:text-green-500',
  description: 'text-base text-gray-700 font-normal dark:text-gray-200',
};

export default function SummaryItem({
  name,
  description,
  link = null,
  internal = false,
}) {
  let linkContent: any;
  if (internal) {
    linkContent = <Link href={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link ? 'hover:underline hover:text-black' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      <p className={classes.description}>{description}</p>
    </div>
  );
}
