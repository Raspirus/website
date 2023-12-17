<script setup lang="ts">
import { useRoute } from 'vue-router';

const menus = [
    { name: "HOME", href: "/" },
    { name: "DOWNLOADS", href: "/downloads" },
    {
      name: "DOCS",
      href: "https://raspirus.github.io/docs/",
      target: "_blank",
    },
    { name: "ABOUT", href: "/about" },
  ];

  const active = useRoute().path;
</script>


<template>
  <div class="bg-black w-full py-6 px-8 flex flex-col md:flex-row gap-4">
      <div class="flex items-center flex-1">
        <img alt="Raspirus Logo" src="~/assets/transparent-logo.png" class="w-8 h-8" />
        <a href="/" class="text-2xl text-white ml-1 font-bold">
          RASPIRUS
        </a>
      </div>
      <ul class="flex items-center gap-6">
        <li v-for="menu in menus" :key="menu.name">
          <a
              :href="menu.href"
              :target="menu.target ? menu.target : '_self'"
              class="text-white hover:text-mainred-500 py-1"
            >
            <div class="flex items-center">
                <span
                  :class="{ 'font-bold border-b-2 border-primary': menu.href === active }"
                >
                  {{ menu.name }}
                </span>
                <Icon name="heroicons-solid:external-link" v-if="menu.target" class="w-4 h-4"/>
              </div>
            </a>
        </li>
      </ul>
      <SwitchDarkMode />
    </div>
</template>