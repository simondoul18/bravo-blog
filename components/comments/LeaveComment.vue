<template>
<div class="comment-form-wrap pt-5">
    <h3 class="mb-5">Leave a comment</h3>
    <form v-on:submit="submitComment" class="p-5 bg-light">
        <div class="form-group">
            <label for="name">Name *</label>
            <input type="text" class="form-control" id="name" v-model="store.comment_.name" />
        </div>
        <div class="form-group">
            <label for="email">Email *</label>
            <input type="email" class="form-control" id="email" v-model="store.comment_.email" />
        </div>
        <div class="form-group">
            <label for="message">Message</label>
            <textarea v-model="store.comment_.message" id="message" cols="30" rows="8" class="form-control"></textarea>
        </div>
        <div class="form-group">
            <input type="submit" value="Post Comment" class="btn btn-primary" />
        </div>
    </form>
</div>
</template>
<script setup>
import { usePostsStore } from '@/stores/posts'
const store = usePostsStore()
function submitComment(e){
    e.preventDefault();
    if(store.comment_.name != '' && store.comment_.name != undefined && store.comment_.name != null
    && store.comment_.email != '' && store.comment_.email != undefined && store.comment_.email != null
    && store.comment_.message != '' && store.comment_.message != undefined && store.comment_.message != null){
        store.comment_.post_id = store.post_detail.id
        store.postComment()
    }else{
        alert("Please fill all fields.");
    }
}
</script>