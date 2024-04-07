<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="dark">
			<b-navbar-brand href="#">NavBar</b-navbar-brand>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				
				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">
					<b-navbar-nav>
						<router-link to="/" class="text-white my-auto d-inline-block mr-2" exact active-class="active">Home</router-link>
						<router-link to="/blog" class="text-white my-auto d-inline-block mr-2" exact active-class="active">Blogs</router-link>
						<router-link to="/about" class="text-white my-auto d-inline-block mr-2" exact active-class="active">About</router-link>
						<router-link to="/contact-us" class="text-white my-auto d-inline-block mr-2" exact active-class="active">Contact Us</router-link>
						<b-button variant="light">Subscribe</b-button>
					</b-navbar-nav>
					<!-- <b-nav-form>
						<b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
						<b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
					</b-nav-form> -->

					<!-- <b-nav-item-dropdown text="Lang" right>
						<b-dropdown-item href="#">EN</b-dropdown-item>
						<b-dropdown-item href="#">ES</b-dropdown-item>
						<b-dropdown-item href="#">RU</b-dropdown-item>
						<b-dropdown-item href="#">FA</b-dropdown-item>
					</b-nav-item-dropdown> -->

					<!-- <b-nav-item-dropdown right>
						<template #button-content>
							<em>User</em>
						</template>
						<b-dropdown-item href="#">Profile</b-dropdown-item>
						<b-dropdown-item href="#">Sign Out</b-dropdown-item>
					</b-nav-item-dropdown> -->
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
	export default {
		name: 'SiteHeader',
	}
</script>