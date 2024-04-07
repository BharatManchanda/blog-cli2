<template>
	<div>
		<HeaderSection />
		<b-container class="mt-5">
			<h3 class="font-weight-bold">All Posts</h3>
			<hr style="border: 1px solid #e8e9ea" />
			<BlogCard v-for="index in 7" :key="index" />
		</b-container>
	</div>
</template>
  
<script>
	import BlogCard from './Components/BlogCard.vue'
	import HeaderSection from '../../../components/HeaderSection/HeaderSection.vue'
    export default {
		name:'BlogPage',
		components:{
			BlogCard,
			HeaderSection,
		},
		data() {
			return {

			}
		},
    }
</script>