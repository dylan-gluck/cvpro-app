<script>
	import Page from '$lib/components/layout/Page.svelte';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
</script>

<svelte:head>
	<title>Profile - CV Pro</title>
</svelte:head>

<Page>
	<Card.Root>
		<Card.Header>
			<Card.Title>Basic info</Card.Title>
			<Card.Description>Maecenas faucibus mollis ipsum dolor.</Card.Description>
		</Card.Header>
		<Card.Content></Card.Content>
		<Card.Footer class="justify-end gap-2">
			<Button size="sm" variant="secondary" disabled>Cancel</Button>
			<Button size="sm" disabled>Save changes</Button>
		</Card.Footer>
	</Card.Root>
</Page>
