// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $about from "./routes/about.tsx";
import * as $commercial from "./routes/commercial.tsx";
import * as $download from "./routes/download.tsx";
import * as $index from "./routes/index.tsx";
import * as $shop from "./routes/shop.tsx";
import * as $DownloadButton from "./islands/DownloadButton.tsx";
import * as $Navbar from "./islands/Navbar.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/about.tsx": $about,
    "./routes/commercial.tsx": $commercial,
    "./routes/download.tsx": $download,
    "./routes/index.tsx": $index,
    "./routes/shop.tsx": $shop,
  },
  islands: {
    "./islands/DownloadButton.tsx": $DownloadButton,
    "./islands/Navbar.tsx": $Navbar,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
