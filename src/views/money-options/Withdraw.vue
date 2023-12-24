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

<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import api from '@/configs/api';
import store from '@/store';

const user = store.state.user;
	components: {
		Footer,
		Header,
	},
	data: () => ({
		user: JSON.parse(localStorage.getItem('user')),
		form: false,
		loading: false,
		value: null,
		newBalance: null,
	}),
	created() {
		console.log(this.user);
	},
	methods: {
		async deposit() {
			this.loading = true;
			this.form = false;
			this.newBalance = parseFloat(this.user.userbalance) - parseFloat(this.value);
			try {
				const response = await api.put(`/v1/user/${this.user.usercpf}`, {
					usercpf: this.user.usercpf,
					username: this.user.username,
					useremail: this.user.useremail,
					userpassword: this.user.userpassword,
					userbalance: this.newBalance,
				})
				.then((response) => {
			store.commit('storeUser', response.data);
					this.$router.push('/games');
				});
				this.loading = false;
				this.form = true;
				console.log(response);
			} catch (error) {
				this.loading = false;
				this.form = true;
				console.log(error);
			}
		},
		onSubmit() {
			this.deposit();
		},
		required(v) {
			return !!v || 'Campo obrigatório';
		},
	}
};
</script>