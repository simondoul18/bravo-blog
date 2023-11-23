<template>
    <div class="site-section bg-light" v-if="posts.featured.length > 5">
        <div class="container">
            <div class="row align-items-stretch retro-layout">
                <div class="col-md-5 order-md-2">
                    <PostsGridBox v-if="posts.featured[5]" :post="posts.featured[5]" :category="true" class="hentry img-1 h-100" />
                </div>
                <div class="col-md-7">
                    <PostsGridBox v-if="posts.featured[6]" :post="posts.featured[6]" :category="true" class="hentry img-2 v-height mb30" />
                    <div class="two-col d-block d-md-flex">
                        <PostsGridBox v-if="posts.featured[7]" :post="posts.featured[7]" :category="true" class="hentry v-height img-2" />
                        <PostsGridBox v-if="posts.featured[8]" :post="posts.featured[8]" :category="true" class="hentry v-height img-2 ml-auto" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { usePostsStore } from '@/stores/posts'
const posts = usePostsStore()
</script>