<template>
    <div>
        <b-card no-body class="overflow-hidden p-2 my-1" style="max-width: 540px;">
            <b-row gutters>
                <b-col md="3">
                    <b-card-img
                        src="https://picsum.photos/400/400/?image=20"
                        alt="Image"
                        class="rounded-circle chat-img"
                        height="50"
                        width="50"
                    >
                    </b-card-img>
                </b-col>
                <b-col md="9">
                    <b-card-text>
                        <p class="lead font-weight-bold">Bharat Manchanda</p>
                    </b-card-text>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>
  
<script>
    export default {
		name:'PersonCard',
		components:{

		},
		data() {
			return {
				
			}
		},
    }
</script>
<style>
.chat-img{
    width: 60px;
    height: 60px;
}
</style>