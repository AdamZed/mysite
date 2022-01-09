import Head from "next/head";

interface PageInfo {
  pageName: string;
}

export default function Header(info: PageInfo) {
  return (
    <Head>
      <title>Adam Zanon | {info.pageName}</title>
      <meta name="description" content="Adam Zanon - Software Developer" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
