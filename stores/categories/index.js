import { defineStore } from 'pinia'
export const useCategoriesStore = defineStore('categories', {
    state: () => ({ 
        categories: [],
        category_detail:{}
    }),
    actions: {
        async getCategories(prms={}){
            const env = useRuntimeConfig()
            const { data: posts, error } = await useFetch(env.public.API_URL+'blog_categories',{query: prms})
            if(posts.value) {
                if(posts.value.status == 'success'){
                    this.categories = posts.value.data
                }
            }
            if (error.value) {
                console.log('Error fetch post detail:', error.value.message);
            }
        },
        async getCategoryDetail(slug){
            const env = useRuntimeConfig()
            const { data: category, error } = await useFetch(env.public.API_URL+'blog_category_detail/'+slug)
            if(category.value) {
                return category.value
            }
            if (error.value) {
                console.log('Error fetch Category detail:', error.value.message);
                return false
            }
        },
    }
})