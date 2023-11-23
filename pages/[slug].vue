<template>
    <div>
        <PostDetail v-if="store.post_detail.id" />
        <SectionRelatedPosts v-if="store.post_detail.id" />
    </div>
</template>
<script setup>
import { usePostsStore } from '@/stores/posts'
const route = useRoute()
const store = usePostsStore()
const post = await store.getPostDetail(route.params.slug)
if(post && post.status == 'success'){
    store.post_detail = post.data
    // definePageMeta({
    //     title: post.data.blog_title+' - OnDaQ'
    // });
}else{
    throw createError({ statusCode: 404, statusMessage: 'Post Not Found'})
}
store.getPosts({type:'featured',section:'home_page'});
</script>