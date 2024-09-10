<script>
	import Sidebar from './Sidebar.svelte';
	import Header from './Header.svelte';
</script>

<div class="page">
	<main>
		<Header />
		<section class="flex flex-1 flex-col gap-3 p-5 lg:px-24">
			<slot></slot>
		</section>
	</main>
</div>

<style lang="postcss">
	.page {
		@apply flex min-h-screen;
	}

	main {
		@apply flex min-h-screen w-full flex-col bg-background;
	}
</style>
