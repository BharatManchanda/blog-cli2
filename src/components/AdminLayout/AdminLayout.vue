<template>
    <b-container fluid class="admin-layout">
        <b-row>
            <b-col lg="12" class="bg-white rounded-lg mb-2">
                <h3>Logo</h3>
            </b-col>
            <b-col lg="2" class="bg-white rounded-lg my-2">
                <SideNav/>
            </b-col>
            <b-col lg="10" class="rounded-lg my-2">
                Main Content Comming Soon
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import SideNav from './SideNav.vue';
    export default {
        name: 'AdminLayout',
        components:{
            SideNav,
        }
    }

</script>

<style scoped>
.admin-layout{
    background: #f7f7f7;
}
</style>