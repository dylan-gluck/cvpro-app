<script>
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Pencil } from 'lucide-svelte';
	import ResumePreview from '$lib/components/profile/ResumePreview.svelte';
	import CardPreview from '$lib/components/profile/CardPreview.svelte';
</script>

<Card.Root>
	<div class="flex items-start justify-between gap-2">
		<Card.Header>
			<Card.Title>Live Preview</Card.Title>
			<Card.Description>Digital business card</Card.Description>
		</Card.Header>
		<Button variant="outline" size="xs" class="gap-2">
			<Pencil class="h-3 w-auto" /> Customize
		</Button>
	</div>
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
