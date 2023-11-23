<template>
    <div>
        <SectionFeaturedTop />
        <Posts title="Recent Posts" />
        <SectionFeaturedBottom />
    </div>
</template>
<script setup>
definePageMeta({
    title: 'Blog - OnDaQ',
    meta: [
        { name: 'description', content: 'OnDaQ is amazing app.' }
    ]
});
import { usePostsStore } from '@/stores/posts'
const store = usePostsStore()
store.getPosts({type:''});
store.getPosts({type:'featured',section:'home_page',limit:9});
</script>