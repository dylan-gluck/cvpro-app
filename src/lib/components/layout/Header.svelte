<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import {
		CircleFadingArrowUp,
		FilePlus,
		LayoutDashboard,
		PencilRuler,
		SquareUserRound
	} from 'lucide-svelte';
	import { LinkedinLogo } from 'svelte-radix';

	function handleActive(path) {
		// return 'ghost' or 'active'
		return path === $page.route.id ? 'active' : 'ghost';
	}

	function navigationHandler(e) {
		const target = '/' + e.target.name;
		goto(target);
	}
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
		<Button
			name="dashboard"
			size="sidebar"
			variant={handleActive('/dashboard')}
			disabled
			on:click={navigationHandler}
		>
			<LayoutDashboard class="nav-icon" />
			Dashboard
		</Button>
		<Button
			name="profile"
			size="sidebar"
			variant={handleActive('/profile')}
			on:click={navigationHandler}
		>
			<SquareUserRound class="nav-icon" />
			Profile
		</Button>
		<Button
			name="layout"
			size="sidebar"
			variant={handleActive('/layout')}
			on:click={navigationHandler}
		>
			<PencilRuler class="nav-icon" />
			Layout
		</Button>
		<Button
			name="apply"
			size="sidebar"
			variant={handleActive('/apply')}
			disabled
			on:click={navigationHandler}
		>
			<FilePlus class="nav-icon" />
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
