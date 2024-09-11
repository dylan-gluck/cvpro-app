<script>
	export let title = '';
	export let description = '';
</script>

<div
	class="mb-10 flex flex-col items-start justify-between gap-5 rounded-xl bg-background px-6 py-8 text-foreground"
>
	<div class="flex flex-col gap-2">
		<h1 class="font-serif text-xl">{title}</h1>
		<p class="max-w-[60ch] font-sans">
			{description}
		</p>
	</div>
	<div class="flex gap-2">
		<slot name="buttons"></slot>
	</div>
</div>
