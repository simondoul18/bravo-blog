<template>
    <section class="site-section py-lg">
        <div class="container">
            <div class="row blog-entries element-animate">
                <div class="col-md-12 col-lg-8 main-content">
                    <div class="row mb-5" v-if="title">
                        <div class="col-12">
                            <h2>{{title}}</h2>
                        </div>
                    </div>
                    <div class="row" v-if="store.posts.length > 0">
                        <PostsGrid v-for="post in store.posts" :key="post.id" :post="post" />
                    </div>
                    <div class="row text-center pt-5 " v-else>
                        <div class="col-md-12">No record found</div>
                    </div>

                    <!-- <div class="row text-center pt-5 border-top">
                        <div class="col-md-12">
                            <div class="custom-pagination">
                                <span>1</span>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#">4</a>
                                <span>...</span>
                                <a href="#">15</a>
                            </div>
                        </div>
                    </div> -->
                </div>
                <CommonSideBar />
            </div>
        </div>
    </section>
</template>

<script setup>
import { usePostsStore } from '@/stores/posts'
const store = usePostsStore()
defineProps({
  title: {
    type: String
  }
});
</script>