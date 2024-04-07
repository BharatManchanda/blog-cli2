<template>
    <div>
        <h1>All Posts</h1>
		<BlogCard />
    </div>
</template>
  
<script>
	import BlogCard from './Components/BlogCard.vue'
    export default {
		name:'BlogPage',
		components:{
			BlogCard,
		},
		data() {
			return {

			}
		},
    }
</script>