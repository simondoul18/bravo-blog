<template>
    <div class="col-md-6 mb-4" v-if="post.id">
        <div class="entry2">
            <NuxtLink :to="'/'+post.blog_slug"><img :src="post.blog_image" alt="Image" class="img-fluid rounded" /></NuxtLink>
            <div class="excerpt">
                <NuxtLink :to="'/category/'+post.category.slug"><span class="post-category text-white  mb-3" :style="{ 'background-color': post.category.color}">{{post.category.title}}</span></NuxtLink>
                <h2><NuxtLink :to="'/'+post.blog_slug">{{post.blog_title}}</NuxtLink></h2>
                <div class="post-meta align-items-center text-left clearfix">
                    <figure class="author-figure mb-0 mr-3 float-left"><img src="~/assets/images/person_1.jpg" alt="Image" class="img-fluid" /></figure>
                    <span class="d-inline-block mt-1">By <a href="javascript:void(0);">{{post.admin.name}}</a></span>
                    <span>&nbsp;-&nbsp; {{ moment(post.created_at).format('MMMM D, YYYY') }}</span>
                </div>
                <p>{{post.blog_excerpt}}</p>
                <p><NuxtLink :to="'/'+post.blog_slug">Read More</NuxtLink></p>
            </div>
        </div>
    </div>
</template>

<script setup>
import moment from "moment";
defineProps({
  post: {
    type: Object,
    required: true
  }
});
</script>