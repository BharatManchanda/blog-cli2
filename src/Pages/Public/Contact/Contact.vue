<template>
	<div>
		<b-container class="my-5 rounded-lg" >
			<b-row>
				<b-col lg="12">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2862.3281858957944!2d76.68303297466164!3d30.73427108555989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef0f7cc21411%3A0x62ac3be132c743bc!2s218%20GREEN%20ENCLAVE!5e1!3m2!1sen!2sin!4v1712993577112!5m2!1sen!2sin"
						width="100%"
						height="350"
						style="border:0;"
						allowfullscreen=""
						loading="lazy"
						class="rounded-lg"
						referrerpolicy="no-referrer-when-downgrade">
					</iframe>
				</b-col>
				<b-col lg="12" class="mt-5">
					<h5>Leave us a message</h5>
				</b-col>
				<b-col lg="6">
					<div class="form-group">
						<label for="name">Name</label>
						<input type="email" class="form-control" id="name" placeholder="Enter First Name" />
					</div>
					<div class="form-group">
						<label for="contact-email">Email</label>
						<input type="email" class="form-control" id="contact-email" placeholder="Enter Your Email" />
					</div>
					<div class="form-group">
						<label for="contact-message">Your Message</label> <br>
						<textarea class="form-control" rows="4" id="validationTextarea" placeholder="Type your message" required></textarea>
					</div>
					<button class="btn btn-danger w-100" type="submit">Send</button>
				</b-col>
				<b-col lg="6">
					<span class="font-weight-bold d-block">
						Weekend UX<br>
						B 37/3 Ground Floor Double<br>
						StoryRamesh Nagar , Near Raja Garden<br>
						Chowk.Delhi: 110015
					</span>
					<span class="d-block text-primary my-2">
						+91 9599272754
					</span>
					<span class="d-block text-primary my-2">
						hello@info.com.ng
					</span>
					<div>
						<i class="mr-3 lead bi bi-instagram"></i>
						<i class="mr-3 lead bi bi-facebook"></i>
						<i class="mr-3 lead bi bi-whatsapp"></i>
						<i class="mr-3 lead bi bi-twitter"></i>
					</div>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
	export default {
		name:'ContactUs',
		components:{
		},
		data() {
			return {

			}
		},
	}
</script>