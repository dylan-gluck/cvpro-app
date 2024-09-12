<script>
	import * as Card from '$lib/components/ui/card';
	import * as Select from '$lib/components/ui/select';
	import ResumePreview from '$lib/components/profile/ResumePreview.svelte';
	import CardPreview from '$lib/components/profile/CardPreview.svelte';
	import { PencilRuler } from 'lucide-svelte';
</script>

<Card.Root>
	<div class="flex items-start justify-between gap-2">
		<Card.Header>
			<Card.Title>Live Preview</Card.Title>
			<Card.Description>Digital business card</Card.Description>
		</Card.Header>
		<div class="flex items-center gap-2">
			<PencilRuler class="h-auto w-5 text-muted-foreground" />
			<Select.Root selected={{ value: 'professional', label: 'Professional' }}>
				<Select.Trigger class="w-[180px]">
					<Select.Value placeholder="Layout" />
				</Select.Trigger>
				<Select.Content>
					<Select.Item value="professional" label="Professional" />
					<Select.Item value="creative" label="Creative" />
				</Select.Content>
			</Select.Root>
		</div>
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
