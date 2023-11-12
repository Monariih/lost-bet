<template>
	<v-app>
		<Header />
		<v-main class="bg-grey-darken-3 h-100">
			<v-container>
				<v-row>
					<v-col>
						
                        <h1>404 - Not Found<br>
                            <p>Desculpe, a pagína que você esta buscando não existe!</p>
                        </h1><br>
                        <div id="link">
                            <router-link class="flex text-blue" to="/games">Voltar para a página principal</router-link>
                        </div>
					</v-col>
				</v-row>
			</v-container>
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
};
</script>

<style scoped>

h1{
    font-size: 50pt;
    text-align: center;
}
#link{
    text-align: center;
}
</style>