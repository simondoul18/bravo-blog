<template>
    <div>
        <div class="py-5 bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <span>Category</span>
                        <h3>{{store.category_detail.title}}</h3>
                        <!-- <p>Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis non maxime quos reiciendis perferendis doloremque maiores!</p> -->
                    </div>
                </div>
            </div>
        </div>
        <Posts />
    </div>
</template>
<script setup>
import { useCategoriesStore } from '@/stores/categories'
import { usePostsStore } from '@/stores/posts'
const postStore = usePostsStore()
const store = useCategoriesStore()
const route = useRoute()

const category = await store.getCategoryDetail(route.params.slug)
if(category && category.status == 'success'){
    store.category_detail = category.data
    postStore.getPosts({category: category.data.id,type:''})
}else{
    throw createError({ statusCode: 404, statusMessage: 'Category Not Found' })
}
</script>