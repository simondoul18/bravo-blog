<template>
    <div>
        <div class="py-5 bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <span v-if="route.query.q">Search</span>
                        <h3 v-if="route.query.q">{{route.query.q}}</h3>
                        <h3 v-else>Latest posts</h3>
                        <!-- <p>Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis non maxime quos reiciendis perferendis doloremque maiores!</p> -->
                    </div>
                </div>
            </div>
        </div>
        <Posts />
    </div>
</template>
<script setup>
import { usePostsStore } from '@/stores/posts'
const store = usePostsStore()
const route = useRoute()
store.getPosts({q: route.query.q,type:''})
</script>