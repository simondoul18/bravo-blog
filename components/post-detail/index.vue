<template>
    <div>
        <PostDetailBanner />
        <section class="site-section py-lg">
            <div class="container">
                <div class="row blog-entries element-animate">
                    <div class="col-md-12 col-lg-8 main-content">
                        <div class="post-content-body" v-html="store.post_detail.blog_detail"></div>
                        <div class="pt-5">
                            <p>
                                <span v-if="store.post_detail.category">Category: <NuxtLink :to="'/category/'+store.post_detail.category.slug">{{store.post_detail.category.title}}</NuxtLink></span> 
                                <span v-if="store.post_detail.blog_tags"> Tags: <NuxtLink :to="'/tag/'+tag.trim()" v-for="(tag,index) in tags" :key="index" >{{ '#' + tag.trim() }}<span v-if="index < tags.length - 1">, </span></NuxtLink></span>
                            </p>
                        </div>
                        <Comments />
                    </div>
                    <CommonSideBar />
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
import { usePostsStore } from '@/stores/posts'
const store = usePostsStore()
const data = ref(store.post_detail.blog_tags);
const tags = computed(() => {
  if (data.value) {
    return data.value.split(',');
  }
  return [];
});
</script>