<template>
	<div id="app">
		<p>This is inside the root element</p>
		<p>This is inside the root element</p>
		<SiteHeader />
	</div>
</template>

<script>
	import SiteHeader from './components/Layout/Header/Header.vue'
	export default {
		name: 'App',
		components: {
			SiteHeader
		}
	}
</script>