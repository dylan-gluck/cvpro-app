<script>
	import { Button } from '$lib/components/ui/button';
	import { FilePlus } from 'lucide-svelte';
	import Search from './Search.svelte';
	import ThemeSwitch from './ThemeSwitch.svelte';
	import UserNotifications from './UserNotifications.svelte';
	import UserMenu from './UserMenu.svelte';
</script>

<header>
	<Button variant="default" size="sm">
		<FilePlus class="h-5 w-auto" />
	</Button>

	<Search />
	<ThemeSwitch />
	<UserNotifications />
	<UserMenu />
</header>

<style lang="postcss">
	header {
		@apply flex items-center justify-between gap-1.5 p-3;
	}
</style>
