<template>
	<div>
		<HeaderSection/>
		<b-container class="bv-example-row mt-3">
			<b-row>
				<b-col cols="7">
					<h4 class="font-weight-bolder">Latest</h4>
					<div>
						<b-card
							title="Lorem ipsum dolor sit amet, consectetur aiscing elit, sed do eiusmod tempor."
							img-src="https://picsum.photos/600/300/?image=25"
							img-alt="Image"
							img-top
							tag="article"
							class="mb-2"
							>
							<b-card-text>
								By John Doe   l   March 12, 2024
							</b-card-text>
							<b-card-text>
								Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
								Duis aute irure dolor in reprehenderit in voluptate v
								Duis aute irure dolor in reprehenderit in volusse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
							</b-card-text>
							<b-button variant="danger">Read More</b-button>
						</b-card>
					</div>
				</b-col>
				<b-col cols="5">
					<h4 class="font-weight-bolder">Trending Blogs</h4>
					<p class="mt-3">By John Deo   l   Aug 23, 2023 </p>
					<p class="lead font-weight-bold">Lorem ipsum dolor sit amet, consectetur adipiscing </p>

					<div class="bg-danger px-3 py-4 text-white mt-5">
						<small>By John Deo l Aug 23, 2023</small>
						<p class="lead font-weight-bold">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
					</div>
					<div v-for="index in 2" :key="index"  class="px-3 py-4 text-dark">
						<small>By <span class="text-danger">John Deo</span> l Aug 23, 2023</small>
						<p class="lead font-weight-bold">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
					</div>
				</b-col>
			</b-row>
		</b-container>

		<!-- New Technology -->
		<b-container class="mt-4">
			<h5 class="mb-3 font-weight-bold">New Technology</h5>
			<b-row>
				<b-col cols="3" v-for="index in 4" :key="index">
					<NewTechnologyCard />
				</b-col>
			</b-row>
		</b-container>

		<!-- All Category -->
		<b-container class="mt-4">
			<hr style="border-top: 3px solid #d9d9d9" class="mt-3" />
			<h5 class="mb-3 font-weight-bold">All Category</h5>
			<b-row>
				<b-col cols="3" v-for="index in 4" :key="index">
					<CategoryCard />
				</b-col>
			</b-row>
		</b-container>

		<!-- Testimonal Section -->
		<b-container fluid class="bg-dark mt-4 p-5 text-white">
			<b-row class="pl-5">
				<b-col cols="5" class="border-right p-5">
					<small>TESTIMONIALS</small>
					<p class="lead font-weight-bolder">What people say about our blog</p>
					<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</small>
				</b-col>
				<b-col cols="5" class="p-5">
					<p class="lead font-weight-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<div class="d-flex justify-content-between align-items-center mt-5">
						<div class="d-flex jusify-content-between">
							<img
								src="https://picsum.photos/600/300/?image=25"
								width="50px"
								height="50px"
								class="rounded-circle"
							/>
							<div class="ml-2">
								<small class="d-block font-weight-bold">Jonathan Vallem</small> 
								<small>New York, USA</small>
							</div>
						</div>
						<div class="d-flex align-items-center">
							<i class="bi bi-arrow-left-circle-fill display-4" style="font-size: 24px;"></i>
							<i class="bi bi-arrow-right-circle-fill text-danger lead ml-2" style="font-size: 32px;"></i>
						</div>
					</div>
				</b-col>
			</b-row>
		</b-container>

		<!-- New Technology -->
		<b-container class="mt-4">
			<h5 class="mb-3 font-weight-bold">New Technology</h5>
			<b-row>
				<b-col cols="3" v-for="index in 4" :key="index">
					<NewTechnologyCard />
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
	import NewTechnologyCard from './Components/NewTechnologyCard.vue'
	import CategoryCard from  './Components/CategoryCard.vue'
	import HeaderSection from  '../../../components/HeaderSection/HeaderSection.vue'
	export default {
		name:'HomePage',
		components:{
			NewTechnologyCard,
			CategoryCard,
			HeaderSection,
		},
		data() {
			return {

			}
		},
		methods: {
			
		}
	}
</script>