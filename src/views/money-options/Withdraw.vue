<template>
	<v-app>
		<Header />
		<v-main class="bg-grey-darken-3 h-100">
			<v-container>
				<v-row>
					<v-col>
						<v-card
							class="ma-auto bg-grey-darken-4 elevation-2"
							theme="dark"
							max-width="500"
						>
							<v-card-title>
								<h2>Saque</h2>
							</v-card-title>
							<v-card-text>
								<v-form v-model="form" @submit.prevent="onSubmit">
									<v-text-field
										:readonly="loading"
										:rules="[required]"
										variant="outlined"
										density="compact"
										label="Valor"
										placeholder="Digite o valor que deseja depositar"
										v-model="value"
										type="number"
									></v-text-field>
									<v-divider></v-divider>
									<v-card-item class="d-flex justify-end">
										<v-btn
										:disabled="!form"
										:loading="loading" 
										type="submit"
										class="ma-1" 
										elevation="2" 
										color="#FF9900"
										>
											SACAR !
										</v-btn>
									</v-card-item>
								</v-form>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
				<v-row>
					<v-col>
						<v-card
							class="ma-auto bg-grey-darken-4 elevation-2"
							theme="dark"
							max-width="500"
						>
							<v-card-title>
								<h3>INFORMATIVO !!!</h3>
							</v-card-title>
							<v-card-text
								class="text-justify"
							>
								Até o breve momento a nossa aba de depósitos e saques estpa funcionande de maneira meramente ilustrativa e não está integrada com nenhum gateway de pagamento.<br>
								Para realizar um depósito, basta digitar o valor que deseja depositar e clicar no botão "DEPOSITAR !".<br>
								Para realizar um saque, basta digitar o valor que deseja sacar e clicar no botão "SACAR !".<br>
							</v-card-text>	
						</v-card>	
					</v-col>
				</v-row>
			</v-container>
		</v-main>
	</v-app>
<Footer />
</template>

<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import api from '@/configs/api';
import store from '@/store';
import { ref } from 'vue';
import router from '@/router';

const user = store.state.user;
const form = ref(false);
const loading = ref(false);
const value = ref(null);
const newBalance = ref(null);

function required(v) {
	return !!v || 'Campo obrigatório';
}

async function onSubmit() {
	if (!form) return;
	loading.value = true;
	form.value = false;
	newBalance.value = parseFloat(user.userbalance) - parseFloat(value.value);
	try {
		const response = await api.put(`/v1/user/${user.usercpf}`, {
			usercpf: user.usercpf,
			username: user.username,
			useremail: user.useremail,
			userpassword: user.userpassword,
			userbalance: newBalance.value,
		})
		.then((response) => {
			store.commit('storeUser', response.data);
			router.push('/games');
		});
		loading.value = false;
		form.value = true;
		console.log(response);
	} catch (error) {
		loading.value = false;
		form.value = true;
		console.log(error);
	}
}

</script>
