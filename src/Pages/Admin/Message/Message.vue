<template>
	<div>
		<b-row>
			<b-col lg="8" class="border-rounded">
				<div class="chat-box rounded-lg">
					<span class="d-flex m-1 receive pt-2 my-1">
						<span class="bg-danger max-w-50 p-2 rounded-lg text-white">
							Hi Admin
						</span>
					</span>
					<span class="d-flex m-1 send pt-2 my-1">
						<span class="bg-danger max-w-50 p-2 rounded-lg text-white">
							Hello Meenu
						</span>
					</span>
					<span class="d-flex m-1 send pt-2 my-1">
						<span class="bg-danger max-w-50 p-2 rounded-lg text-white">
							An excellent welcome message will make a positive first impression, which can help your group grow.
						</span>
					</span>
				</div>
				<div class="input-group mt-3">
					<input
						type="text"
						class="form-control"
						placeholder="Type message here..."
					/>
					<div class="input-group-append">
						<button class="btn btn-outline-danger" type="button">Send</button>
					</div>
				</div>
			</b-col>
			<b-col lg="4">
				<PersonCard v-for="item in 7" :key="item" />
				<button class="text-center border w-100 mt-2 btn btn-danger p-1 see-more">See More...</button>
			</b-col>
		</b-row>
	</div>
</template>
  
<script>
	import PersonCard from "./Components/PersonCard.vue"
    export default {
		name:'MessagePage',
		components:{
			PersonCard,
		},
		data() {
			return {
				
			}
		},
    }
</script>

<style>
.see-more{
	cursor: pointer;
}
.chat-box{
	min-height: 50vh;
	max-height: 87vh;
	box-shadow: 0px 0px 3px 1px #dc3545;
	display: flex;
	flex-direction: column;
	justify-content: end;
	
}
.receive{
	justify-content: flex-start;
}
.send{
	justify-content: end;
}
.max-w-50{
	max-width: 50%;
}
</style>