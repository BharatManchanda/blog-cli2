<template>
    <div>
        <b-card
            tag="article"
            style="max-width: 20rem; background-color: #d9d9d9;"
            class="mb-2 border-0"
        >
            <div class="d-flex justify-content-center">
                <img
                    class="rounded-circle d-block"
                    width='100px'
                    height='100px'
                    src="https://picsum.photos/600/300/?image=25"
                />
            </div>
            <b-card-text class="text-center font-weight-bold mt-2">
                Car Reviews
            </b-card-text>
            <b-card-text class="text-center">
                Lorem ipsum dolor sit amet consectetur. Urna dignissim ac egeendrerit in.
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: 'CategoryCard',
    }
</script>