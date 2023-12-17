<script setup lang="ts">
const title = ref('Raspirus');
const description = ref('A lightweight and easy-to-use virus scanner for Windows, macOS and Linux.');
const keywords = ref('raspirus, download, windows, macos, linux, open-source, virus-scanner');

import '~/assets/style/main.css';
</script>

<template>
    <Head>
      <Meta name="title" :content="title" />
      <Meta name="description" :content="description" />
      <Meta name="keywords" :content="keywords" />
      <Meta name="robots" content="index, follow" />
      <Meta name="content-type" content="text/html; charset=utf-8" />
      <Meta name="language" content="English" />
      <Meta name="author" content="Benjamin Demetz" />
      <Meta name="HandheldFriendly" content="true"/> 
      <Meta name="google-site-verification" content="I002awkSsAy6ofmThQ2X8p3j8yehRxYqEOQd8orA93A"/>

      <Link rel="icon" type="image/x-icon" href="/favicon.png" />

      <Title>{{ title }}</Title>
    </Head>
    <AppHeader />
    <NuxtPage />
</template>
