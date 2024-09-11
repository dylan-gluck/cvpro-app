<script>
	import { Button } from '$lib/components/ui/button';
	import {
		CircleFadingArrowUp,
		FilePlus,
		LayoutDashboard,
		PencilRuler,
		SquareUserRound
	} from 'lucide-svelte';
	import { LinkedinLogo } from 'svelte-radix';
</script>

<header
	class="sticky top-0 z-10 bg-gradient-to-b from-background from-85% to-transparent to-100% p-5 lg:px-24"
>
	<!-- Logo -->
	<div class="flex-0 p-1 px-3">
		<a href="/">
			<span class="sr-only">cv.pro</span>
			<img class="filter-foreground h-8 w-auto" src="/assets/Logo.svg" alt="cv.pro" />
		</a>
	</div>

	<nav class="flex items-center justify-center">
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
		<Button size="sidebar" variant="ghost" disabled>
			<FilePlus class="mr-2 h-4 w-auto" />
			Apply
		</Button>
	</nav>

	<div class="flex items-center justify-end gap-1.5">
		<Button variant="invert" size="sm" class="gap-2">
			<CircleFadingArrowUp class="h-4 w-auto" /> Upgrade
		</Button>
		<Button variant="outlinePrimary" size="sm" class="gap-1 text-muted-foreground">
			<LinkedinLogo class="h-4 w-auto" /> Connected
		</Button>
	</div>
</header>

<style>
	header {
		display: grid;
		grid-template-columns: 1fr 3fr 1fr;
	}
</style>
