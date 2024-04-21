<template>
    <b-container fluid class="admin-layout">
        <b-row class="top-header">
            <b-col lg="2" class="bg-white rounded-lg p-2 pl-4">
                <div class="d-flex align-items-center height-50px">
                    <h3 class="my-auto">Logo</h3>
                </div>
            </b-col>
            <b-col lg="8" class="bg-white rounded-lg p-2">
            </b-col>
            <b-col lg="2" class="bg-white rounded-lg p-2">
                <div class="d-flex justify-content-end align-items-center">
                    <div class="lead text-danger pr-3">
                        <i class="bi bi-bell-fill"></i>
                    </div>
                    <div>
                        <b-dropdown
                            id="dropdown-left"
                            variant="primary"
                            class="border-circle m-2"
                        >
                            <template #button-content>
                                <img src="https://picsum.photos/300/300/" alt="">
                            </template>
                            <b-dropdown-item href="#">
                                Profile
                            </b-dropdown-item>
                            <b-dropdown-item href="#">
                                Logout
                            </b-dropdown-item>
                        </b-dropdown>
                    </div>
                </div>
            </b-col>
        </b-row>
        <b-row class="p-2">
            <b-col lg="2" class="p-1">
                <b-col lg="12" class="rounded-lg bg-white py-2 my-2 side-navbar">
                    <SideNav/>
                </b-col>
            </b-col>
            <b-col lg="10" class="p-1">
                <b-col lg="12" class="rounded-lg bg-success py-2 my-2 main-content">
                    <router-view />
                </b-col>
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

<style>
    .admin-layout {
        background: #f7f7f7;
    }
    .height-50px{
        height: 50px;
    }
    .dropdown-toggle::after {
        display: none !important;
    }
    button#dropdown-left__BV_toggle_ {
        padding: 0;
        width: 40px;
        height: 40px;
        border-radius: 100%;
        border:0px;
    }
    button#dropdown-left__BV_toggle_ img {
        object-position: center;
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 100%;
    }
    ul.dropdown-menu.show {
        top: 5px !important;
        left: -58px !important;
    }
    .top-header {
        position: relative;
        z-index: 2;
    }
    .side-navbar {
        position: relative  !important;
        height: 100vh;
        top: 0;
        z-index: 1;
    }
    .side-navbar div {
        overflow-y: scroll;
    }
    .main-content {
        position: fixed;
        width: 100vh;
        height: 100vh;
    }
</style>