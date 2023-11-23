<template>
    <div class="site-cover site-cover-sm same-height overlay single-page" :style="{ 'background-image': 'url('+store.post_detail.blog_image+')' }" >
        <div class="container">
            <div class="row same-height justify-content-center">
                <div class="col-md-12 col-lg-10">
                    <div class="post-entry text-center">
                        <NuxtLink :to="'/category/'+store.post_detail.category.slug"><span class="post-category text-white mb-3" :style="{ 'background-color': store.post_detail.category.color }">{{store.post_detail.category.title}}</span></NuxtLink>
                        <h1 class="mb-4"><a href="#">{{store.post_detail.blog_title}}</a></h1>
                        <div class="post-meta align-items-center text-center">
                            <figure class="author-figure mb-0 mr-3 d-inline-block"><img src="~/assets/images/person_1.jpg" alt="Image" class="img-fluid"></figure>
                            <span class="d-inline-block mt-1">By {{store.post_detail.admin.name}}</span>
                            <span>&nbsp;-&nbsp; {{ moment(store.post_detail.created_at).format('MMMM D, YYYY') }} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { usePostsStore } from '@/stores/posts'
import moment from "moment";
// import bg from "~/assets/images/img_2.jpg"
const store = usePostsStore()
</script>