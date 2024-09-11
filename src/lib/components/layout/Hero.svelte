<script>
	export let title = '';
	export let description = '';
</script>

<div class="mb-10 flex flex-col items-center gap-4 text-center">
	<h1 class="font-serif text-2xl lg:text-5xl">{title}</h1>
	<p class="max-w-[60ch] font-sans lg:text-xl">
		{description}
	</p>
</div>
