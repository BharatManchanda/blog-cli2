<template>
    <ul class="p-2">
        <router-link
            v-for="link in links"
            :to="link.to"
            :key="link.id"
            :class="item == 2 ? 'active': ''"
            exact active-class="active"
            class="d-block list-unstyled px-3 py-2 font-weight-bold rounded-lg mt-1 text-dark"
        >
            <i :class="link.icon" class="font-weight-bold"></i>
            <span class="d-inline-block ml-2">{{link.name}}</span>
        </router-link>
    </ul>
</template>

<script>
    import navlinks from './Constant/NavLink';
    export default {
        name: 'SideNav',
        components: {

        },
        data() {
            return {
                links: navlinks
            }
        }
    }
</script>

<style scoped>
    li.list-unstyled.px-3.py-2.font-weight-bold.rounded-lg{
        cursor: pointer;
    }
    a.d-block.list-unstyled.px-3.py-2.font-weight-bold.rounded-lg.mt-1.text-dark.router-link-exact-active.active{
        color: rgb(220, 53, 69) !important;
        background-color: #ff000028;
    }
</style>