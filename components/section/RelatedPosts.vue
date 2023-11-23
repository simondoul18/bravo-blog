<template>
    <div class="site-section bg-light" v-if="store.related_posts.length > 0">
        <div class="container">
            <div class="row mb-5">
                <div class="col-12">
                    <h2>Related Posts</h2>
                </div>
            </div>
            <div class="row align-items-stretch retro-layout">
                <div class="col-md-7">
                    <PostsGridBox v-if="store.related_posts[0]" :post="store.related_posts[0]" :category="true" class="hentry img-2 v-height mb30" />
                    <div class="two-col d-block d-md-flex">
                        <PostsGridBox v-if="store.related_posts[1]" :post="store.related_posts[1]" :category="true" class="hentry v-height img-2" />
                        <PostsGridBox v-if="store.related_posts[2]" :post="store.related_posts[2]" :category="true" class="hentry v-height img-2 ml-auto" />
                    </div>
                </div>
                <div class="col-md-5">
                    <PostsGridBox v-if="store.related_posts[3]" :post="store.related_posts[3]" :category="true" class="hentry img-1 h-100" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { usePostsStore } from '@/stores/posts'
const store = usePostsStore()
store.getPosts({type:'related',slug:store.post_detail.blog_slug,limit:4});
</script>