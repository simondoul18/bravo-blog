<template>
    <div class="site-section bg-light" v-if="posts.featured.length > 0">
        <div class="container">
            <div class="row align-items-stretch retro-layout-2">
                <div class="col-md-4">
                    <PostsGridBox v-if="posts.featured[0]" :post="posts.featured[0]" class="h-entry v-height mb-30 h-entry" />
                    <PostsGridBox v-if="posts.featured[1]" :post="posts.featured[1]" class="h-entry v-height" />
                </div>
                <div class="col-md-4">
                    <PostsGridBox v-if="posts.featured[2]" :post="posts.featured[2]" class="h-100 h-entry img-5" />
                </div>
                <div class="col-md-4">
                    <PostsGridBox v-if="posts.featured[3]" :post="posts.featured[3]" class="mb-30 h-entry v-height" />
                    <PostsGridBox v-if="posts.featured[4]" :post="posts.featured[4]" class="h-entry v-height"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { usePostsStore } from '@/stores/posts'
const posts = usePostsStore()
</script>