<script>
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Pencil } from 'lucide-svelte';
	import ResumePreview from '$lib/components/profile/ResumePreview.svelte';
	import CardPreview from '$lib/components/profile/CardPreview.svelte';
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Live Preview</Card.Title>
		<div class="flex items-center justify-between gap-2">
			<Card.Description>Digital business card</Card.Description>
			<Button variant="secondary" size="xs" class="gap-2">
				<Pencil class="h-3 w-auto" /> Layout
			</Button>
		</div>
	</Card.Header>
	<Card.Content>
		<CardPreview />
	</Card.Content>

	<Card.Header class="mt-4">
		<Card.Description>Resume</Card.Description>
	</Card.Header>
	<Card.Content>
		<ResumePreview />
	</Card.Content>
</Card.Root>
