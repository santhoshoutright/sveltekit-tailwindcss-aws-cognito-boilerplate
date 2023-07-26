<script context="module">
	import { Auth } from 'aws-amplify';
	import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
</script>

<script>
	// @ts-nocheck

	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { superForm } from 'sveltekit-superforms/client';
	import { browser } from '$app/environment';

	export let data;
	// Client API:
	const { form, errors, delayed, message } = superForm(data.form);

	const signIn = async (username, password) => {
		
		// console.log('username : ', username);
		// console.log('password : ', password);
		try {
			const user = await Auth.signIn(username, password);
			console.log('user : ', user);
		} catch (error) {
			console.log('error signing in', error); 
		}
	};

	$: if ($message?.status == 'success') {
		signIn($form.email, $form.password);
		console.log('Form : ', $form);
		console.log('data : ', data);
	}
</script>

{#if $message?.status == 'failed' && $message.content}
	<p class="bg-red-100 p-4 text-red-400 text-xs font-semibold rounded">{$message.content}</p>
{/if}
{#if $message?.status == 'success' && $message.content}
	<p class="bg-green-100 p-4 text-green-400 text-xs font-semibold rounded">{$message.content}</p>
{/if}

<SuperDebug data={$form} />

<form method="post" novalidate class="space-y-8">
	<div>
		<input
			type="email"
			name="email"
			placeholder="Enter your email"
			bind:value={$form.email}
			class="input input-bordered input-primary w-full max-w-xs"
		/>
		{#if $errors?.email}<span class="text-error">{$errors.email}</span>{/if}
	</div>
	<div>
		<input
			type="password"
			name="password"
			placeholder="Enter your password"
			bind:value={$form.password}
			class="input input-bordered input-primary w-full max-w-xs"
		/>
		{#if $errors?.password}<span class="text-error">{$errors.password}</span>{/if}
	</div>

	<button type="submit" class="btn btn-primary">
		{#if $delayed}
			<span class="loading loading-spinner" />
		{/if}
		Login
	</button>

	<!-- <button class="btn btn-primary" on:click|preventDefault={() => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google })}>
	
		Google Login
	</button> -->
</form>
