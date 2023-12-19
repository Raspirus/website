<template>
  <!-- https://icones.js.org/collection/heroicons-solid -->
  <div class="flex flex-wrap justify-center items-center flex-1 py-8 text-gray-600 my-auto">
    <div class="flex flex-col justify-center items-center">
      <div class="mb-8 mx-8 text-center">
        <img class="h-48 mx-auto mb-6" src="~/assets/transparent-logo.png" alt="Raspirus Logo" />
        <span class="block text-3xl font-bold text-black dark:text-white mb-3">
          RASPIRUS
        </span>
        <span class="block text-black dark:text-white text-lg -mb-1.5">
          A lightweight and intuitive Virusscanner - Open Source!
        </span>
      </div>
      <div class="flex justify-center items-center flex-col">
          <UButton
            color="mainred"
            class="font-bold py-3 px-4 flex justify-start items-center cursor-pointer"
            to="https://github.com/sponsors/Raspirus" target="_blank">
            <Icon name="heroicons-solid:heart" class="w-6 h-6" />
            <span>Donate</span>
          </UButton>
        <SocialIcons />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style></style>