<script>
	import * as Card from '$lib/components/ui/card';
	import * as Table from '$lib/components/ui/table';
	import { Button } from '$lib/components/ui/button';
	import { Delete, Edit } from 'lucide-svelte';
	import { Plus } from 'svelte-radix';
</script>

<Card.Root>
	<div class="flex items-start justify-between gap-5">
		<Card.Header>
			<Card.Title>Certifications</Card.Title>
			<Card.Description>Trade certifications</Card.Description>
		</Card.Header>
		<Button size="xs" variant="outline" class="gap-2"><Plus class="w-4" /> Add Certification</Button
		>
	</div>
	<Card.Content>
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head class="min-w-40">Certification</Table.Head>
					<Table.Head class="min-w-30">Issuer</Table.Head>
					<Table.Head class="min-w-10">Start</Table.Head>
					<Table.Head class="min-w-10">Finished</Table.Head>
					<Table.Head class="min-w-28"></Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell>Masters - Accounting</Table.Cell>
					<Table.Cell>Yale</Table.Cell>
					<Table.Cell>1999</Table.Cell>
					<Table.Cell>2001</Table.Cell>
					<Table.Cell class="text-right">
						<Button variant="ghost" size="sm"><Edit class="w-4" /></Button>
						<Button variant="ghost" size="sm"><Delete class="w-4" /></Button>
					</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>Executive MBA</Table.Cell>
					<Table.Cell>Cornell</Table.Cell>
					<Table.Cell>1997</Table.Cell>
					<Table.Cell>1999</Table.Cell>
					<Table.Cell class="text-right">
						<Button variant="ghost" size="sm"><Edit class="w-4" /></Button>
						<Button variant="ghost" size="sm"><Delete class="w-4" /></Button>
					</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table.Root>
	</Card.Content>
</Card.Root>
