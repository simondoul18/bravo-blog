<template>
    <div class="sidebar-box">
        <h3 class="heading">Categories</h3>
        <ul class="categories">
            <li v-for="cate in store.categories" :key="cate.id">
                <NuxtLink :to="'/category/'+cate.slug">{{cate.title}} <span>({{cate.posts_count}})</span></NuxtLink>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { useCategoriesStore } from '@/stores/categories'
const store = useCategoriesStore()
if(store.categories.length < 1){
    store.getCategories({limit:10,withPostCounts:true})
}
</script>