<template>
	<div class="background-container m-0 position-sticky">
		<b-container>
		<b-row>
			<b-col lg="6" class="py-5">
				<h1 class="text-white font-weight-bold">Your Journey</h1>
				<h1 class="text-white font-weight-bold">Your Car</h1>
				<h1 class="text-white font-weight-bold">Your Way</h1>
				<p class="text-white font-weight-bold lead">Lorem ipsum dolor sit amet consectetur. Diam volutpat morbi elementum vel euismod aliquam. Amet ultrices neque augue consectetur purus phasellus. Ullamcorper lorem montes varius amet vestibulum tellus facilisis consequat pretium. Et faucibus laoreet molestie diam semper fames diam eget.</p>
				<button class="btn btn-danger">Subscribe <i class="bi bi-arrow-right-circle-fill"></i></button>
			</b-col>
			<b-col lg="6" class="py-5">
				<div class="my-auto py-5">
					<FrontCar style="height:12px"/>
				</div>
			</b-col>
		</b-row>
		</b-container>
	</div>
</template>
<script>
	import FrontCar from '../SVG/FrontCar.vue'
	export default {
		name:'HomePage',
		components:{
			FrontCar,
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.background-container {
		background-color: #31323c;
		width: 100%;
		background-image: url('./dotted-texture.png');
		/* Optional background styles */
		background-size: cover; /* Adjust based on your needs */
		background-position: center; /* Adjust based on your needs */
		background-attachment: fixed;
	}
</style>