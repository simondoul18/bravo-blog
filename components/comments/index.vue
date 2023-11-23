<template>
    <div class="pt-5">
        <h3 class="mb-5">{{ store.post_detail.comments.length }} Comments</h3>
        <CommentsList />
        <CommentsLeaveComment />
    </div>
</template>
<script setup>
import { usePostsStore } from '@/stores/posts'
const store = usePostsStore()
</script>