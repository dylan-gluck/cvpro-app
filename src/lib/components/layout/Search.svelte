<script>
	import Search from 'lucide-svelte/icons/search';
	import { Input } from '$lib/components/ui/input';
	import { Badge } from '$lib/components/ui/badge';
</script>

<form class="search">
	<Search class="absolute left-2 top-[50%] h-4 w-4 translate-y-[-50%] text-muted-foreground" />
	<Input placeholder="Search" class="pl-8 pr-12" />
	<Badge class="absolute right-2 top-[50%] translate-y-[-50%]" variant="secondary">⌘K</Badge>
</form>

<style lang="postcss">
	.search {
		@apply relative mr-auto max-w-lg flex-1;
	}
</style>
