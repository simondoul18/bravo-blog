<template>
  <NuxtLink :to="'/'+post.blog_slug" v-if="post.id" class="gradient" :style="{ 'background-image': 'url('+post.blog_image+')' }" >
    <span v-if="category" class="post-category text-white" :style="{'background-color':post.category.color}">{{post.category.title}}</span>
    <div class="text">
      <h2>{{ post.blog_title }}</h2>
      <span class="date"> {{ moment(post.created_at).format('MMMM D, YYYY') }}</span>
    </div>
  </NuxtLink>
</template>

<script setup>
import moment from "moment";
defineProps({
  post: {
    type: Object,
    required: true
  },
  category: {
    type: Boolean,
  }
});
</script>