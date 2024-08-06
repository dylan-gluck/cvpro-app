<script>
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { FilePlus, LayoutDashboard, PencilRuler, SquareUserRound } from 'lucide-svelte';
	import { Progress } from '$lib/components/ui/progress';
</script>

<aside>
	<!-- Logo -->
	<div class="logo">
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

	<Card.Root>
		<Card.Header>
			<Card.Title>Upgrade your plan</Card.Title>
			<Card.Description>Maecenas faucibus mollis ipsum dolor.</Card.Description>
		</Card.Header>
		<Card.Content>
			<Progress value={90} />
		</Card.Content>
		<Card.Footer>
			<Button size="sm">Get Pro</Button>
		</Card.Footer>
	</Card.Root>
</aside>

<style lang="postcss">
	aside {
		@apply flex h-screen min-w-48 max-w-60 flex-col justify-start gap-6 overflow-auto bg-background p-3;
	}

	.logo {
		@apply flex-shrink-0 p-1 px-3;
	}

	nav {
		@apply mt-20 flex flex-1 flex-col space-y-1;
	}
</style>
