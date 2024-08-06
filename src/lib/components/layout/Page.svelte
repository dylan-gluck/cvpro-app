<script>
	import Sidebar from './Sidebar.svelte';
	import Header from './Header.svelte';
</script>

<div class="page">
	<Sidebar />
	<main>
		<Header />
		<section class="page-content">
			<slot></slot>
		</section>
	</main>
</div>

<style lang="postcss">
	.page {
		@apply flex min-h-screen;
	}

	main {
		@apply flex h-screen w-full flex-shrink flex-grow flex-col overflow-auto bg-background;
	}

	.page-content {
		@apply flex flex-1 flex-col gap-3 p-3;
	}
</style>
