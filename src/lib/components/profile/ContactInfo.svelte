<script>
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Check } from 'svelte-radix';
	import InputFieldText from '$lib/components/form/InputFieldText.svelte';
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Contact info</Card.Title>
		<Card.Description>Used on your resume, cover letters, & business card</Card.Description>
	</Card.Header>
	<Card.Content class="grid grid-cols-1 gap-3 space-y-0 lg:grid-cols-2">
		<InputFieldText id="user-name" label="Name" value="John Doe" placeholder="Your full name" />
		<InputFieldText
			id="user-title"
			label="Title"
			value="VP, Director of sales"
			placeholder="Current title or position"
		/>
		<InputFieldText
			id="user-company"
			label="Company"
			value="ABC Contracting & Consulting"
			placeholder="Current / recent employer or business name"
		/>
		<InputFieldText
			id="user-location"
			label="Location"
			value="2294 E 155th St, New York, NY"
			placeholder="Business address or city / state"
		/>
		<InputFieldText
			id="user-email"
			label="Email"
			value="jdoe@abconsulting.com"
			placeholder="Email address used to apply"
		/>
		<InputFieldText
			id="user-phone"
			label="Phone"
			value="+1 (123) 555-4561"
			placeholder="Best daytime phone number"
		/>
	</Card.Content>
	<Card.Footer class="my-2 justify-end gap-2">
		<Button size="xs" variant="secondary">Cancel</Button>
		<Button size="xs" class="gap-2"><Check class="w-4" /> Save</Button>
	</Card.Footer>
</Card.Root>
