const classes = {
  footer: 'z-10 text-sm text-gray-600 dark:text-gray-400 text-center pb-1',
  footerA: 'z-10 text-green-500 cursor-pointer hover:underline',
};

export default function Footer({}) {
  return (
    <div className={classes.footer}>
      <span>
        This site is built with{' '}
        <span style={{ color: ' #e25555' }}>&#9829;</span> using{' '}
        <a
          className={classes.footerA}
          href="https://nextjs.org/"
          target="_blank"
        >
          Next.js
        </a>{' '}
        +{' '}
        <a
          className={classes.footerA}
          href="https://tailwindcss.com/"
          target="_blank"
        >
          Tailwind CSS
        </a>{' '}
        and hosted on{' '}
        <a
          className={classes.footerA}
          href="https://vercel.com/"
          target="_blank"
        >
          Vercel
        </a>
        . You can inspect source on{' '}
        <a
          className={classes.footerA}
          href="https://github.com/iamsarthakjoshi/portblog"
          target="_blank"
        >
          GitHub
        </a>
        .
      </span>
    </div>
  );
}
