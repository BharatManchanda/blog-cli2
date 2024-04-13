<template>
	<div>
		<b-container class="conatainer my-1">
			<img class="main-img" src="https://picsum.photos/1200/" alt="">
			<h2 class="font-weight-bold">Classic Revival: Revisiting Iconic Cars Through Modern Reviews</h2>
			<div class="d-flex align-items-center my-3">
				<img class="rounded-circle" width="50px" src="https://picsum.photos/200/" alt="">
				<div class="ml-2">
					<span class="text-muted font-weight-bold mr-2">Dasteen</span>
					<span>Jan 10, 2024 - 3 min read</span>
				</div>
			</div>

			<div class="px-5">
				<h3 class="font-weight-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h3>
				<p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
				<h3 class="font-weight-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h3>

				<p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>

				<p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>

				<ul>
					<li class="font-weight-bold text-muted">Lorem ipsum dolor sit amet</li>
					<li class="font-weight-bold text-muted">Non blandit massa enim nec scelerisque</li>
					<li class="font-weight-bold text-muted">Neque egestas congue quisque egestas</li>
				</ul>
			</div>

			<!-- All Category -->
		</b-container>
		<b-container class="mt-4">
			<hr style="border-top: 3px solid #d9d9d9" class="mt-3" />
			<h5 class="mb-3 font-weight-bold">All Category</h5>
			<b-row>
				<b-col cols="3" v-for="index in 4" :key="index">
					<CategoryCard />
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>
  
<script>
	import CategoryCard from  '../../../components/CategoryCard/CategoryCard.vue'
    export default {
		name:'BlogDetail',
		components:{
			CategoryCard,
		},
		data() {
			return {

			}
		},
    }
</script>

<style>
.conatainer .main-img{
	width: 100%;
	height: 500px;
	object-fit: cover;
	object-position: center;
}
</style>