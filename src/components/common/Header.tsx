import Link from 'next/link';

import IUserInfo from '../../interfaces/IUserInfo';

const classes = {
  wrapper: 'block mb-6 md:flex',
  imageWrapper:
    'w-full max-w-150 h-150 min-h-full bg-gray-300 overflow-hidden rounded-full',
  image:
    'object-fit transition duration-500 ease-in-out transform hover:scale-105',
  contentWrapper: 'flex-none pt-6 md:pt-1 md:flex-1 md:pl-20',
  name:
    'text-5xl text-gray-900 font-bold leading-tight hover:text-black dark:text-gray-100 lg:dark:hover:text-green-500',
  description: 'text-gray-600 dark:text-gray-300',
  list: 'mt-6 uppercase tracking-wider',
  item: 'inline list-none pr-4',
  link:
    'inline-block py-2 font-semibold text-xs text-gray-600 hover:text-black dark:text-gray-200 lg:dark:hover:text-green-500',
};

const twitter = 'https://twitter.com/sarthakvox';
const github = 'https://github.com/iamsarthakjoshi';
const linkedin = 'https://www.linkedin.com/in/joshisarthak';

export default function Header({
  userInfo = {},
  noBlog = false,
}: {
  userInfo?: IUserInfo;
  noBlog?: boolean;
}) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        <Link href="/">
          <img
            className={classes.image}
            src="/images/profile_image.jpeg"
            alt={userInfo.name}
            title="Profile Image"
          />
        </Link>
      </div>
      <div className={classes.contentWrapper}>
        <h1 className={classes.name}>
          <Link href="/">{userInfo.name}</Link>
        </h1>
        <p className={classes.description}>{userInfo.excerpt}</p>
        <ul className={classes.list}>
          {twitter && (
            <li className={classes.item}>
              <a className={classes.link} href={twitter}>
                Twitter
              </a>
            </li>
          )}
          {github && (
            <li className={classes.item}>
              <a className={classes.link} href={github}>
                GitHub
              </a>
            </li>
          )}
          {linkedin && (
            <li className={classes.item}>
              <a className={classes.link} href={linkedin}>
                LinkedIn
              </a>
            </li>
          )}
          {!noBlog && (
            <li className={classes.item}>
              <Link href="/blog">
                <a className={classes.link}>Blog</a>
              </Link>
            </li>
          )}
          <li className={classes.item}>
            <a className={classes.link}></a>
          </li>
        </ul>
      </div>
    </div>
  );
}
