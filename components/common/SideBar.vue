<template>
    <div class="col-md-12 col-lg-4 sidebar">
        <div class="sidebar-box search-form-wrap">
            <form action="#" class="search-form">
                <div class="form-group">
                    <span class="icon fa fa-search"></span>
                    <input type="text" class="form-control" id="s" placeholder="Type a keyword and hit enter" />
                </div>
            </form>
        </div>

        <SectionPopularPosts />
        <SectionCategoriesWithCounts />
        <SectionTags />
    </div>
</template>
<!-- <script setup>
import { usePostsStore } from '@/stores/posts'
import moment from "moment";
const store = usePostsStore()

if(store.popular_posts.length < 1){
    store.getPopularPosts()
}
</script> -->