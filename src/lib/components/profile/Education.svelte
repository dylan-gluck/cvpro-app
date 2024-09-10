<script>
	import * as Card from '$lib/components/ui/card';
	import * as Table from '$lib/components/ui/table';
	import { Button } from '$lib/components/ui/button';
	import { Delete, Edit } from 'lucide-svelte';
	import { Plus } from 'svelte-radix';
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Education</Card.Title>
		<Card.Description>Undergraduate & post-grad school history</Card.Description>
	</Card.Header>
	<Card.Content>
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head class="min-w-40">Degree</Table.Head>
					<Table.Head class="min-w-30">School</Table.Head>
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
	<Card.Footer class="mb-2 justify-end gap-2">
		<Button size="xs" variant="outline" class="gap-2"><Plus class="w-4" /> Add Degree</Button>
	</Card.Footer>
</Card.Root>
