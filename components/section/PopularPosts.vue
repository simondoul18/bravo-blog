<template>
    <div class="sidebar-box">
        <h3 class="heading">Popular Posts</h3>
        <div class="post-entry-sidebar">
            <ul>
                <li v-for="post in store.popular_posts" :key="post.id">
                    <NuxtLink :to="'/'+post.blog_slug">
                        <img :src="post.blog_image" alt="Image placeholder" class="mr-4" />
                        <div class="text">
                            <h4>{{post.blog_title}}</h4>
                            <div class="post-meta">
                                <span class="mr-2">{{ moment(post.created_at).format('MMMM D, YYYY') }} </span>
                            </div>
                        </div>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { usePostsStore } from '@/stores/posts'
import moment from "moment";
const store = usePostsStore()

if(store.popular_posts.length < 1){
    store.getPosts({type:'popular',limit:5})
}
</script>