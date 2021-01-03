import Head from 'next/head';

import Header from './Header';
import ThemeChanger from '../common/ThemeChanger';
import { fullName, userExcerpt } from './../../data';

const classes = {
  outerWrapper: 'relative dark:bg-gray-800 min-h-screen',
  wrapper: 'p-8 relative max-w-screen-xl xs:p-12',
  svg: 'hidden fixed transform right-0 top-5 z-0 xl:block',
  darkModeBtn:
    'z-10 absolute sticky top-1 right-0 border border-gray-500 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline',
  emojis: 'text-xl transform transition-all duration-30 hover:text-2xl',
};

export default function Layout({
  children,
  title = "Sarthak Joshi's Blog",
  noBlog = false,
}) {
  return (
    <div className={classes.outerWrapper}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="og:title" content={title} />
      </Head>

      <ThemeChanger />
      <svg
        className={classes.svg}
        width="500" // 404
        height="784"
        fill="none"
        viewBox="0 0 500 784" // 404 -> 500
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="2"
              height="2"
              className="fill-current text-green-200 dark:text-green-900"
              fill="none"
            />
          </pattern>
        </defs>
        <rect
          width="500" // 404
          height="784"
          fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
        />
      </svg>
      <div className={classes.wrapper}>
        <Header
          userInfo={{ name: fullName, excerpt: userExcerpt }}
          noBlog={noBlog}
        />
        {children}
      </div>
    </div>
  );
}
