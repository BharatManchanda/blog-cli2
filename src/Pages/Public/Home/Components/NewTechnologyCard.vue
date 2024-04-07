<template>
    <b-card
        style="background-color: #d9d9d9"
        class="p-3 border-0"
        img-src="https://picsum.photos/300/300/?image=41"
        img-alt="Image"
        img-top
        img-height="200px"
    >
        <b-card-text class="font-weight-bolder">
            A Review of Cars with Advanced Infotainment Systems
        </b-card-text>
            <div class="d-flex justify-content-around">
                <div>
                    <b-card-img height="45px" width="45px" src="https://picsum.photos/300/300/?image=42" class="rounded-circle" />
                </div>
                <div class="ml-2">
                    <small class="font-weight-bold">Dasteen</small> <br/>
                    <small>Jan 10, 2024 ∙ 3 min read</small>
                </div>
            </div>
    </b-card>
</template>

<script>
    export default {
        name: 'NewTechnologyCard',
    }
</script>

<style scoped>
    .card-img-top {
        border-radius: 0.25rem;
    }
    .card-body  {
        padding: 20px 5px;
    }
</style>