<template>
<div class="site-footer">
    <div class="container">
        <div class="row mb-5">
            <div class="col-md-4">
                <h3 class="footer-heading mb-4">About Us</h3>
                <p>OnDaQ is a marketplace and an online platform that will provide tools and marketing strategies for independent beauty professionals, salons and, barbers via its web and mobile application, so business owners and professionals can render the best services to their clients.</p>
            </div>
            <div class="col-md-3 ml-auto">
                <h3 class="footer-heading mb-4">Popular Categories</h3>
                <ul class="list-unstyled float-left mr-5">
                    <li v-for="category in store.categories.slice(0, 5)" :key="category.id"><NuxtLink :to="'/category'+category.slug">{{ category.title }}</NuxtLink></li>
                </ul>
                <ul class="list-unstyled float-left">
                    <li v-for="category in store.categories.slice(5,10)" :key="category.id"><NuxtLink :to="'/category'+category.slug">{{ category.title }}</NuxtLink></li>
                </ul>
            </div>
            <div class="col-md-4">
                <div>
                    <h3 class="footer-heading mb-4">Connect With Us</h3>
                    <p>
                        <a href="#"><span class="icon-facebook pt-2 pr-2 pb-2 pl-0"></span></a>
                        <a href="#"><span class="icon-twitter p-2"></span></a>
                        <a href="#"><span class="icon-instagram p-2"></span></a>
                        <!-- <a href="#"><span class="icon-rss p-2"></span></a>
                        <a href="#"><span class="icon-envelope p-2"></span></a> -->
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <p>
                    Copyright &copy;
                    {{ currentYear }}
                    All rights reserved
                </p>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
    import { useCategoriesStore } from '@/stores/categories'
    const store = useCategoriesStore()
    const currentYear = new Date().getFullYear();
</script>