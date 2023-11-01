<template>
<v-app>
	<Header />
	<v-main class="bg-grey-darken-3 h-100">
		<v-sheet class="mx-2 my-2 w-full bg-grey-darken-4 bg-opacity rounded elevation-3 h-50">
			<v-container>
				<v-row>
					<v-col>
						<v-card>
							<v-card-title>ESTA TELA É APENAS UM EXEMPLO PARA O PATH NÃO FICAR VAZIO</v-card-title>
						</v-card>
					</v-col>
					<v-col>
						<v-card>
							<v-card-title>TALVEZ EM ATUALIZAÇÕES FUTURAS TRAREMOS MAIS INFORMAÇÕES SOBRE</v-card-title>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</v-sheet>
	</v-main>
</v-app>  
</template>

<script setup>
import Header from '@/components/Header.vue';
</script>
  