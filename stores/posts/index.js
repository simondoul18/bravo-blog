import { defineStore } from 'pinia'
export const usePostsStore = defineStore('posts', {
    state: () => ({ 
        featured: [],
        post_detail:{},
        popular_posts:[],
        related_posts:[],
        posts:[],
        comment_:{
            name:'',
            email:'',
            message:'',
            post_id:''
        },
        // filters:{
        //     type:'',
        //     section:''
        // }
    }),
    actions: {
        async getPosts(query_filters={}) {
            const env = useRuntimeConfig()
            // if (filters == '') {
            //     filters = this.filters
            // }
            // const query_filters = { ...filters, ...additional_filters };
            // console.log(query_filters)
            const { data: posts, error } = await useFetch(env.public.API_URL+'posts',{
                // pick: ['title']
                query:query_filters
            })
            if (error.value) {
                console.log('Error fetching posts:', error.value.message);
            }
            
            if(posts.value) {
                if(posts.value.status == 'success'){
                    if (query_filters.type == 'featured') {
                        this.featured = posts.value.data
                    }else if (query_filters.type == 'popular') {
                        this.popular_posts = posts.value.data
                    }else if (query_filters.type == 'related') {
                        this.related_posts = posts.value.data
                    }else{
                        this.posts = posts.value.data
                    }
                }
            }
        },
        async getPostDetail(slug){
            const env = useRuntimeConfig()
            const { data: post, error } = await useFetch(env.public.API_URL+'post_detail/'+slug)
            if(post.value) {
                return post.value
            }
            if (error.value) {
                console.log('Error fetch post detail:', error.value.message);
                return false
            }
        },
        async postComment(){
            const env = useRuntimeConfig()
            const { data: comment, error } = await useFetch(env.public.API_URL+'leave_post_comment',{method: 'POST',body:this.comment_})
            // console.log(comment)
            if(comment.value) {
                if(comment.value.status == 'success'){
                    this.post_detail.comments.push(comment.value.data)
                    this.comment_ = {
                        name:'',
                        email:'',
                        message:'',
                        post_id:''
                    }
                    alert(comment.value.message);
                }else{
                    console.log(error.value.message);
                }
            }
            if (error.value) {
                console.log('Error fetch post detail:', error.value.message);
            }
        },
        // async getFeaturedPosts() {
        //     const env = useRuntimeConfig()
        //     const { data: posts, error } = await useFetch(env.public.API_URL+'posts',{
        //         // pick: ['title']
        //         query:{type:'featured'},params:{section:'home_page'}
        //     })
        //     if (error.value) {
        //         console.log('Error fetching posts:', error.value.message);
        //     }
            
        //     if(posts.value) {
        //         if(posts.value.status == 'success'){
        //             this.featured = posts.value.data
        //         }
        //     }
        // },
        // async getPopularPosts(){
        //     const env = useRuntimeConfig()
        //     const { data: posts, error } = await useFetch(env.public.API_URL+'posts',{query:{type:'popular',limit:5}})
        //     if(posts.value) {
        //         if(posts.value.status == 'success'){
        //             this.popular_posts = posts.value.data
        //         }
        //     }
        //     if (error.value) {
        //         console.log('Error fetch post detail:', error.value.message);
        //     }
        // },

    }
})