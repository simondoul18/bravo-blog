import { defineStore } from 'pinia'
export const useTagsStore = defineStore('tags', {
    state: () => ({ 
        tags: []
    }),
    actions: {
        async getTags(prms={}){
            const env = useRuntimeConfig()
            const { data: tags, error } = await useFetch(env.public.API_URL+'blog_tags',{query: prms})
            if(tags.value) {
                if(tags.value.status == 'success'){
                    this.tags = tags.value.data
                    console.log(this.tags)
                }
            }
            if (error.value) {
                console.log('Error fetch post detail:', error.value.message);
            }
        }
    }
})