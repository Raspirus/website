<script setup lang="ts">
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
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
  <nav class="bg-black w-full py-6 px-8 flex flex-col md:flex-row gap-4">
    <div class="flex items-center flex-1">
      <img alt="Raspirus Logo" src="~/assets/transparent-logo.png" class="w-8 h-8" />
      <a href="/" class="text-2xl text-white ml-1 font-bold">
        RASPIRUS
      </a>
      <button
      @click="toggleMenu"
      class="md:hidden text-white focus:outline-none ml-auto"
      aria-label="Toggle Menu"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </button>
    </div>
    <ul
      :class="{
        'hidden': !isMenuOpen,
        'flex': isMenuOpen,
        'flex-col': isMenuOpen,
        'md:flex': true,
        'md:flex-row': true,
        'items-center': true,
        'md:gap-6': true,
      }"
    >
      <li v-for="menu in menus" :key="menu.name">
        <a
          :href="menu.href"
          :target="menu.target ? menu.target : '_self'"
          class="text-white hover:text-mainred-500 py-1"
        >
          <div class="flex items-center">
            <span
              :class="{
                'font-bold border-b-2 border-primary': menu.href === active,
              }"
            >
              {{ menu.name }}
            </span>
            <Icon
              name="heroicons-solid:external-link"
              v-if="menu.target"
              class="w-4 h-4"
            />
          </div>
        </a>
      </li>
      <SwitchDarkMode />
    </ul>
  </nav>
</template>