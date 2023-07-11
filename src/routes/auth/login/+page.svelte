<script>
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { superForm } from 'sveltekit-superforms/client';
	export let data;
	// Client API:
	const { form, errors, delayed } = superForm(data.form);
</script>

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
</form>
