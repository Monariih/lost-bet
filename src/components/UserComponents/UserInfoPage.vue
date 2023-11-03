<template>
<Header />
<v-main class="bg-grey-darken-3 h-100">
	<v-container>
		<v-row>
			<v-col>
				<v-card
					class="text-center"
					theme="dark"
				>
					<v-card-text class="d-flex flex-nowrap text-center">
						<h2>Informações sobre você! para poder edita-las.</h2><v-spacer></v-spacer>
						<v-btn
							color="#FF9900"
							@click="disable"
						>sed</v-btn>
					</v-card-text>
					<v-card-item>
					<v-divider></v-divider>
						<v-text-field
							v-model="userName"
							density="compact"
							prepend-inner-icon="mdi-information-outline"
							:readonly="loading"
							:rules="[required]"
							disabled
							class="my-2"
							clearable
							variant="outlined"
							placeholder="Enter your name"
						></v-text-field>
						
						<v-text-field
							v-model="userEmail"
							density="compact"
							prepend-inner-icon="mdi-email-outline"
							:readonly="loading"
							:rules="[required]"
							
							class="my-2"
							clearable
							variant="outlined"
							placeholder="Enter your email"
						></v-text-field>
						
						<v-text-field
							:append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
							:type="visible ? 'text' : 'password'"
							:readonly="loading"
							:rules="[required]"
							v-model="password"
							density="compact"
							placeholder="Enter your password"
							prepend-inner-icon="mdi-lock-outline"
							variant="outlined"
							@click:append-inner="visible = !visible"
						></v-text-field>
						<v-divider></v-divider>
					</v-card-item>
					<v-card-item class="d-flex justify-end">
						<v-btn
							elevation="2"
							color="#FF9900"
							:loading="loading"
							@click="updateUser"
						>ATUALIZAR!</v-btn>
					</v-card-item>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</v-main>
</template>

<script>
import { defineComponent, ref } from "vue"

export default defineComponent({
	setup() {
		const required = (v) => !!v || 'Campo obrigatório.'
		const userName = ref('')
		const userEmail = ref('')
		const userPassword = ref('')
		const visible = ref(false)
		const loading = ref(false)
		const form = ref(false)
		const disabled = ref(true)

		function updateUser() {
			loading.value = true
			setTimeout(() => {
				loading.value = false
			}, 2000)
		}

		function disable() {
			disabled.value = false
		}

		return {
			required,
			userName,
			userEmail,
			userPassword,
			visible,
			loading,
			form,
			updateUser,
		}
	},
})
</script>
