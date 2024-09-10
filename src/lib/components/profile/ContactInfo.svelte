<script>
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Check } from 'svelte-radix';
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Contact info</Card.Title>
		<Card.Description>Used on your resume, cover letters, & business card</Card.Description>
	</Card.Header>
	<Card.Content class="grid grid-cols-1 gap-3 space-y-0 lg:grid-cols-2">
		<div class="flex flex-col gap-1.5">
			<Label for="user-name">Name</Label>
			<Input type="text" id="user-name" placeholder="Your full name" />
		</div>
		<div class="flex flex-col gap-1.5">
			<Label for="user-title">Title</Label>
			<Input type="text" id="user-title" placeholder="Professional title" />
		</div>
		<div class="flex flex-col gap-1.5">
			<Label for="user-company">Company</Label>
			<Input type="text" id="user-company" placeholder="Business name" />
		</div>
		<div class="flex flex-col gap-1.5">
			<Label for="user-location">Location</Label>
			<Input type="text" id="user-location" placeholder="Business Address" />
		</div>
		<div class="flex flex-col gap-1.5">
			<Label for="user-email">Email</Label>
			<Input type="email" id="user-email" placeholder="Email address" />
		</div>
		<div class="flex flex-col gap-1.5">
			<Label for="user-phone">Phone</Label>
			<Input type="email" id="user-phone" placeholder="Telephone number" />
		</div>
	</Card.Content>
	<Card.Footer class="my-2 justify-end gap-2">
		<Button size="xs" variant="secondary">Cancel</Button>
		<Button size="xs" class="gap-2"><Check class="w-4" /> Save</Button>
	</Card.Footer>
</Card.Root>
