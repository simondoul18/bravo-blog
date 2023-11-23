<template>
    <div class="sidebar-box">
        <h3 class="heading">Tags</h3>
        <ul class="tags">
            <li v-for="tag in store.tags" :key="tag.id">
                <NuxtLink :to="'/tag/'+tag.title">{{tag.title}}</NuxtLink>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { useTagsStore } from '@/stores/tags'
const store = useTagsStore()
if(store.tags.length < 1){
    store.getTags({limit:10})
}
</script>