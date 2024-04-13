<template>
	<div>
        <b-container class="mt-5">
            <b-row class="mt-3">
				<b-col lg="7">
					<h1 class="text-danger font-weight-bold">About Us</h1>
					<h3 class="mr-5">
						<span class="text-warning">WEEKEND UX</span>
						providing the best opportunities to the students around the glob.
					</h3>
					<p class="mr-5">Weekend UX, is a UI/UX Design Academy in Delhi involved in User Experience and User Interface Training and Consulting. It was started in 2023 and passionate towards User Interface Design/ User Experience Design, Human Computer Interaction Design. Humanoid is gushing towards competence to acquire knowledge and have a wide understanding towards the sphere through the foremost courses in the area of UI/UX Design, by strengthening up your skills, for your golden future</p>
					<b-button variant="danger">Join Us <i class="bi bi-arrow-right-short"></i></b-button>
				</b-col>
				<b-col lg="5" class="bg-danger-light rounded-lg">
					<div class="d-flex flex-column">
						<div class="d-flex justify-content-end height-193">
							<div style="margin: -10px -28px auto auto;">
								<img src="https://picsum.photos/300/200" class="rounded-lg top-image" alt="" srcset="">
							</div>
						</div>
						<div class="d-flex justify-content-start height-193">
							<div style="margin:auto auto -10px -28px">
								<img src="https://picsum.photos/300/200" class="rounded-lg top-image" alt="" srcset="">
							</div>
						</div>
					</div>
				</b-col>
            </b-row>
            <b-row class="mt-5">
				<b-col lg="5" class="bg-danger-light rounded-lg p-3">
					<img src="https://picsum.photos/500/500" class="rounded-lg feature-image" alt="" srcset="">
				</b-col>
				<b-col lg="7">
					<h6 class="text-success ml-5">Features</h6>
					<h1 class="ml-5">We are always working to provide you best of the features in all aspects.</h1>
					<p class="ml-5">At WEEKENDUX the chief determination is to clear the minds of our students about their goals, while making them consistent in their ambitions and pushing them to be confident for their journey towards the course of time.</p>
					<p class="ml-5">You will find every little thing on the internet in just a click of hand, but here we admire that without knowledge and practice the internet may even also fail you in your life.</p>
					<b-button variant="danger" class="ml-5">Learn More <i class="bi bi-arrow-right-short"></i></b-button>
				</b-col>
            </b-row>
			<div class="d-flex flex-column justify-content-center align-items-center my-5">
				<p class="text-center">Our Benefits</p>
				<h3 class="text-center w-50">By Joining WEEKENS UX Platform, One Can Avail a Lot Of Benefits.</h3>
				<p class="text-center w-50">Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best.</p>
			</div>
			<b-row>
				<b-col v-for="item in 6" lg="4" :key="item">
					<BenifitCart/>
				</b-col>
			</b-row>
        </b-container>
	</div>
</template>
  
<script>
	import BenifitCart from './Components/BenifitCart.vue';
    export default {
		name:'AboutPage',
		components:{
			BenifitCart,
		},
		data() {
			return {

			}
		},
    }
</script>

<style>

.bg-danger-light{
	background: #dc354529
}
.height-193{
	height: 193px;
}

.top-image{
	width:280px;
	height:180px;
	object-position: center center;
	object-fit: cover;
}
.feature-image{
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center center;
}
</style>