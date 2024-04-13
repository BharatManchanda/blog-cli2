<template>
	<div class="overflow-auto d-flex justify-content-center mt-2">
		<b-pagination
			v-model="currentPage"
			:total-rows="rows"
			:per-page="perPage"
			first-text="First"
			prev-text="Prev"
			next-text="Next"
			last-text="Last"
			pills 
			variant="danger"
		></b-pagination>
	</div>
</template>

<script>
	export default {
		name: 'PaginationDesign',
		data() {
			return {
				rows: 70,
				perPage: 7,
				currentPage: 3
			}
		}
	}
</script>

<style>
	ul.pagination.b-pagination.b-pagination-pills{
		margin-top: 10px;
	}
	button.page-link{
		color: #dc3545;
		border:1px solid #dc3545;
	}
	span.page-link {
		border: none;
		color: red;
	}
	.page-item.active button{
		background: #dc3545 !important;
		border: 1px solid #dc3545 !important;
	}
	.page-link:hover{
		z-index: 2;
		color: #dc3545;
		text-decoration: none;
		background-color: #d1c3c4;
		border-color: #d1c3c4;
	}
	.page-link:focus{
		box-shadow: 0 0 0 0.15rem #fdb6bd;
	}
</style>