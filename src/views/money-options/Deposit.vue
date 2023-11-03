<template>
	<v-app>
		<Header />
		<v-main class="bg-grey-darken-3 h-100">
			<v-card>

			</v-card>
			
		</v-main>
	</v-app>
<Footer />
</template>

<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

export default {
	components: {
		Footer,
		Header,
	},
	data: () => ({
		form: false,
	}),
};
</script>