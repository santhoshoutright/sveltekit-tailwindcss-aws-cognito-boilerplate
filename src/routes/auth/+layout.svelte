<script>
	import { browser } from '$app/environment';

	// @ts-nocheck
	
	// import awsconfig from '$lib/aws-config';
	// import { Amplify, Auth } from 'aws-amplify';
	

	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let data;
	let pages = {
		'/auth/signup': 'Sign Up',
		'/auth/login': 'Login'
	};

	// Amplify.configure(awsconfig);

    // You can get the current config object
    // const currentConfig = Auth.configure();
	
	// console.log("cognito : ", dataa.cognito);
</script>

<div class="p-10 mx-auto max-w-7xl">
	<div
		class="bg-primary text-white p-8 rounded-xl text-3xl font-bold mb-4 flex justify-between items-center"
	>
		<div>
			<button
				class="btn btn-square text-white mr-4 btn-neutral"
				on:click={() => {
					goto('/');
				}}
			>
				<svg
					height="24px"
					id="Layer_1"
					class=" fill-white"
					style="enable-background:new 0 0 512 512;"
					version="1.1"
					viewBox="0 0 512 512"
					width="512px"
					xml:space="preserve"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
				>
					<polygon
						points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "
					/>
				</svg>
			</button>

			{pages[$page.url.pathname]}
		</div>
		<div>
			{#if $page.url.pathname == '/auth/signup'}
				<a href="/auth/login" class="btn btn-secondary">Login</a>
			{:else}
				<a href="/auth/signup" class="btn btn-secondary">Sign Up</a>
			{/if}
		</div>
	</div>

	<div class="mx-auto rounded bg-neutral flex min-h-[70vh]">
		<div class="mx-auto my-auto w-80">
			<slot />
		</div>
	</div>
</div>
