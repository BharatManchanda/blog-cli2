<template>
    <div>
        <Header/>
            <router-view />
        <Footer/>
    </div>
</template>

<script>
    import Header from './Header/Header.vue'
    import Footer from './Footer/Footer.vue'
	export default {
		name: 'PublicLayout',
        components:{
            Header,
            Footer,
        },
	}
</script>