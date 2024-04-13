<template>
	<div id="app">
		<div id="app" v-if="this.$route.meta == 'PublicLayout'">
			<Layout />
		</div>
		<div id="app" v-if="this.$route.meta == 'AdminLayout'">
			<AdminLayout />
		</div>
	</div>
</template>

<script>
	import Layout from './components/Layout/Layout.vue'
	import AdminLayout from './components/AdminLayout/AdminLayout.vue'
	export default {
		name: 'App',
		components: {
			Layout,
			AdminLayout,
		},
		mounted() {

			
		}
	}
</script>