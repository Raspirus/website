<template>
  <UCard class="m-10">
    <template #header>
      <h1 class="text-2xl font-bold">{{ title }}</h1>
    </template>
      <!-- Hide this part on mobile devices -->
      <div class="flex flex-row">
        <div class="w-1/3">
          <NuxtImg :src="`/img/${imageName}`" alt="OS Logo Image" class="h-32"/>
        </div>
        <div class="w-2/3 p-4">
          <p class="text-lg">{{ description }}</p>
        </div>
      </div>

    <template #footer>
      <div class="flex flex-row justify-between">
        <div class="flex flex-col hidden md:flex">
          <p class="text-xs">Last Update: {{ updateDate }}</p>
          <p class="text-xs">Latest Version: {{ latestVersion }}</p>
        </div>
        <!-- Display two buttons aligned to the right of the card one next to each other-->
        <div class="flex flex-row">
          <UButton class="font-bold py-2 px-4 mr-4" :to=downloadLink>
            <Icon v-if="!isExternal" name="heroicons-solid:download" class="w-6 h-6" />
            <Icon v-else name="heroicons-solid:external-link" class="w-6 h-6" />
            {{ displayExtension(downloadLink) }} {{ downloadSize == 0 ? "" : "- " + (downloadSize / 1048576).toFixed(2) + "MB" }}
          </UButton>
          <UButton v-if="downloadLink2" class="font-bold py-2 px-4">
            <Icon v-if="!isExternal" name="heroicons-solid:download" class="w-6 h-6" />
            {{ displayExtension(downloadLink2) }} - {{ (downloadSize2 / 1048576).toFixed(2) }}MB
          </UButton>
        </div>
      </div>
    </template>
  </UCard>
</template>

<script lang="ts" setup>

defineProps({
  title: {
    type: String,
    default: "OS Name",
  },
  imageName: {
    type: String,
    default: "linux",
  },
  description: {
    type: String,
    default: "Some basic description",
  },
  downloadLink: {
    type: String,
    default: "https://github.com/Raspirus/Raspirus/",
  },
  downloadSize: {
    type: Number,
    default: 0,
  },
  downloadLink2: {
    type: String,
    default: null,
  },
  downloadSize2: {
    type: Number,
    default: 0,
  },
  updateDate: {
    type: String,
    default: "0",
  },
  latestVersion: {
    type: String,
    default: "0",
  },
  isExternal: {
    type: Boolean,
    default: false,
  },
})

const getFileExtension = (url: string) =>
    url.substring(url.lastIndexOf("/") + 1).split(".").pop();

  const displayExtension = (url: string) => {
    if (url.endsWith("/")) {
      return "Download";
    }
    const extension = getFileExtension(url)?.toLowerCase();
    const isDeb = extension === "deb";
    const isArm64 = url.includes("arm64");
    const isAmd64 = url.includes("amd64");

    if (isDeb && !isAmd64) {
      if (isArm64) {
        return "ARM64";
      } else {
        return "ARMHF";
      }
    } else {
      return extension?.toUpperCase();
    }
  };

</script>