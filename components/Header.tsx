import { Head } from "$fresh/runtime.ts";

type Headerprops = {
  title: string;
};

export default function Header({ title }: Headerprops) {
  return (
    <Head>
      <meta name="title" content="Raspirus" />
      <meta
        name="description"
        content="A lightweight and easy-to-use virus scanner for Windows, macOS and Linux."
      />
      <meta
        name="keywords"
        content="raspirus, download, windows, macos, linux, open-source, virus-scanner"
      />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Benjamin Demetz" />
      <meta name="HandheldFriendly" content="true"/> 

      <link rel="icon" type="image/x-icon" href="/icons/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <link rel="manifest" href="/icons/site.webmanifest" />

      <meta
        name="google-site-verification"
        content="I002awkSsAy6ofmThQ2X8p3j8yehRxYqEOQd8orA93A"
      />
      <link rel="stylesheet" href="style/main.css" />
      <title>{title}</title>
    </Head>
  );
}
