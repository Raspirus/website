<template>
  <div>
    <h1 class="text-center text-4xl font-bold p-4">About</h1>
    <h2 class="text-2xl font-bold p-2 pl-10">Short story:</h2>
    <p class="text-lg p-2 px-14">
      Hi, I'm Benji377, the maintainer of Raspirus. 
      I started this project in September 2021 as a high school project. Its original purpose was to be used on Raspberry Pi's to
      scan USB sticks for viruses before putting them in your computer. After the school was over, I decided to continue the project
      and make it available for everyone. I have come a long way since then and I am very proud of what I have achieved so far. It
      is now cross-platform and available in 3 languages, furthermore it got faster and more stable. It also allows for more
      customization. I hope you enjoy using Raspirus as much as I enjoy developing it.
    </p>

    <UDivider class="p-4">
      <h2 class="text-2xl font-bold">Main Features:</h2>
    </UDivider>

    <div class="flex flex-wrap justify-center gap-4">
      <AboutCard
        icon="heroicons-solid:lock-open"
        class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
        title="Free & Open Source"
        description="Raspirus is free and open source software. You can use it for free and you can also contribute to the project.
        This ensures safety and transparency. The project runs solely on donations."
      />

      <AboutCard
        icon="heroicons-solid:shield-check"
        class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
        title="Runs everywhere"
        description="Raspirus runs on Windows, macOS and Linux. It is also available as a Docker container. 
        It is designed to run on low-end devices.
        This ensures that Raspirus can be used on almost any device, especially on Raspberry Pi's."
      />

      <AboutCard
        icon="heroicons-solid:lightning-bolt"
        class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
        title="Easy & Intuitive"
        description="Raspirus is designed to be easy to use and intuitive. It is designed to be used by everyone, 
        even by people who are not very familiar with computers. The user interface is designed to be as simple as possible."
      />
    </div>

    <UDivider class="p-4">
      <h2 class="text-2xl font-bold">Information:</h2>
    </UDivider>

    <ul class="list-disc p-2 pl-10">
      <li><b>Maintainer: </b><a href="https://github.com/Benji377" target="_blank" class="text-mainred-500">Benjamin Demetz</a></li>
      <li><b>Co-Maintainer: </b><a href="https://github.com/GamingGuy003" target="_blank" class="text-mainred-500">Felix Hell Björn</a></li>
      <li><b>Country: </b><Icon name="flagpack:it" /> Italy</li>
      <li><b>In Development Since: </b>21.09.2022</li>
      <li><b>Category: </b>Malware scanner / Security</li>
      <li><b>Platforms: </b>Windows, macOS, Linux (Debian based)</li>
      <li><b>Languages: </b>English (default), German & Italian</li>
      <li><b>Performance Requirements: </b>Very low</li>
      <li><b>Technology Stack: </b>Rust (backend), Next.js (frontend), Tauri (builder), Docker</li>
      <li><b>License: </b><a href="https://github.com/Raspirus/Raspirus/blob/main/LICENSE" target="_blank" class="text-mainred-500">GPL-3.0</a></li>
      <li><b>Source: </b><a href="https://github.com/Raspirus" target="_blank" class="text-mainred-500">GitHub</a></li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
</script>

<style>
</style>