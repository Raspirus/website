<template>
  <UCard class="m-2">
    <template #header>
      <div class="flex items-center">
        <Icon :name="icon" class="w-8 h-8 mr-2" />
        <span class="text-xl font-bold">{{ title }}</span>
      </div>
    </template>

    <p class="text-lg p-2 pl-10">{{ description }}</p>

  </UCard>
</template>

<script lang="ts" setup>

defineProps({
  icon: {
    type: String,
    default: 'heroicons-outline:question-mark-circle'
  },
  title: {
    type: String,
    default: 'Title'
  },
  description: {
    type: String,
    default: 'Description'
  }
})

</script>