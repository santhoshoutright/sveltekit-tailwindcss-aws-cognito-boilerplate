<script>
	import { superForm } from 'sveltekit-superforms/client';
	export let data;
	// Client API:
	const { form } = superForm(data.form);
</script>

<form method="post" novalidate class="space-y-8">
	<div>
		<input
			type="email"
			name="email"
			placeholder="Enter your email"
			bind:value={$form.email}
			class="input input-bordered input-primary w-full max-w-xs"
		/>
	</div>
	<div>
		<input
			type="password"
			name="email"
			placeholder="Enter your password"
			bind:value={$form.password}
			class="input input-bordered input-primary w-full max-w-xs"
		/>
	</div>
	<button type="button" class="btn btn-primary"> Login </button>
</form>
