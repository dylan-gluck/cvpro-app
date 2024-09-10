<script>
	import { Button } from '$lib/components/ui/button';
	import ThemeSwitch from './ThemeSwitch.svelte';
	import UserNotifications from './UserNotifications.svelte';
	import UserMenu from './UserMenu.svelte';
	import { FilePlus, LayoutDashboard, PencilRuler, SquareUserRound } from 'lucide-svelte';
</script>

<header
	class="sticky top-0 z-10 flex items-center justify-between gap-1.5 bg-gradient-to-b from-background from-85% to-transparent to-100% p-5 lg:px-24"
>
	<!-- Logo -->
	<div class="flex-0 p-1 px-3">
		<a href="/">
			<span class="sr-only">cv.pro</span>
			<img class="filter-foreground h-8 w-auto" src="/assets/Logo.svg" alt="cv.pro" />
		</a>
	</div>

	<nav>
		<Button size="sidebar" variant="ghost" disabled>
			<LayoutDashboard class="mr-2 h-4 w-auto" />
			Dashboard
		</Button>
		<Button size="sidebar" variant="active">
			<SquareUserRound class="mr-2 h-4 w-auto" />
			Profile
		</Button>
		<Button size="sidebar" variant="ghost">
			<PencilRuler class="mr-2 h-4 w-auto" />
			Layout
		</Button>
		<Button size="sidebar" variant="ghost">
			<FilePlus class="mr-2 h-4 w-auto" />
			Apply
		</Button>
	</nav>

	<div class="flex items-center gap-1.5">
		<ThemeSwitch />
		<UserNotifications />
		<UserMenu />
	</div>
</header>
