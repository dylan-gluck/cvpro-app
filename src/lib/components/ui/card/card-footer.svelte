<script>
	import { cn } from '$lib/utils.js';
	let className = undefined;
	export { className as class };
</script>

<div class={cn('flex space-x-1', className)} {...$$restProps}>
	<slot />
</div>
