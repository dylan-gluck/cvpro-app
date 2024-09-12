<script>
	import '../app.css';

	import Header from '$lib/components/layout/Header.svelte';
</script>

<div class="flex min-h-screen w-full flex-col bg-background">
	<Header />
	<main class="flex flex-1 flex-col gap-3 p-5 lg:px-24">
		<slot></slot>
	</main>
</div>
