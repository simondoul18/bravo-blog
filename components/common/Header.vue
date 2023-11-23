<template>
    <div>
        <div class="site-mobile-menu">
            <div class="site-mobile-menu-header">
                <div class="site-mobile-menu-close mt-3">
                    <span class="icon-close2 js-menu-toggle"></span>
                </div>
            </div>
            <div class="site-mobile-menu-body"></div>
        </div>

        <header class="site-navbar" role="banner">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-4 site-logo">
                        <NuxtLink to="/" class="text-black h2 mb-0"><img src="/img/logo.png" alt="OnDaQ Blog" /></NuxtLink>
                    </div>
                    <div class="col-8 text-right">
                        <nav class="site-navigation" role="navigation">
                            <ul class="site-menu js-clone-nav mr-auto d-none d-lg-block mb-0">
                                <li><NuxtLink to="/">Home</NuxtLink></li>
                                <li v-for="cate in store.categories" :key="cate.id"><NuxtLink :to="'/category/'+cate.slug">{{cate.title}}</NuxtLink></li>
                                <li class="d-none d-lg-inline-block">
                                    <a href="#" class="search-input-item" ><span class="icon-search search-input-item"></span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <a href="#" class="site-menu-toggle js-menu-toggle text-black d-inline-block d-lg-none"><span class="icon-menu h3"></span></a>
                    </div>
                    <div class="col-md-3 search-form-wrap js-search-form active" v-show="isInputVisible" ref="searchForm">
                        <input type="text" id="s" v-model="search" class="form-control" @keyup.enter="searchPost" placeholder="Search...">
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>
<script setup>
import { useCategoriesStore } from '@/stores/categories'
import { usePostsStore } from '@/stores/posts'
const store = useCategoriesStore()
const postStore = usePostsStore()
const route = useRoute()

if(store.categories.length < 1){
    store.getCategories({limit:10,withPostCounts:true})
}
const search = ref('')
const searchPost = async () => {
    isInputVisible.value = false;
    if(route.name == 'posts'){
        postStore.getPosts({q: search.value,type:''})
        await navigateTo('/posts?q='+search.value,{refresh:true})
    }else{
        await navigateTo('/posts?q='+search.value)
    }
}

// Search input visible code
const isInputVisible = ref(false);
const searchForm = ref(null);
const handleClickOutside = (event) => {
    if(event.target.classList.contains('search-input-item')){
        isInputVisible.value = !isInputVisible.value;
        search.value = ''
        // v-on:click.prevent="isInputVisible = !isInputVisible"
    }else if (searchForm.value && !searchForm.value.contains(event.target)) {
        isInputVisible.value = false;
    }else{
        isInputVisible.value = true;
    }
};
onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>
<style scoped>
/* .rounded-pill {
    border-radius: 50rem!important;
} */
</style>