<script>
	import * as Card from '$lib/components/ui/card';
	import * as Table from '$lib/components/ui/table';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Delete, Edit } from 'lucide-svelte';
	import { Plus } from 'svelte-radix';
</script>

<Card.Root>
	<div class="flex items-start justify-between gap-5">
		<Card.Header>
			<Card.Title>Experience</Card.Title>
			<Card.Description>Professional background and work history</Card.Description>
		</Card.Header>
		<Button size="xs" variant="outline" class="gap-2"><Plus class="w-4" /> Add Position</Button>
	</div>
	<Card.Content>
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head class="min-w-32">Position</Table.Head>
					<Table.Head class="min-w-40">Company</Table.Head>
					<Table.Head class="min-w-10">Start</Table.Head>
					<Table.Head class="min-w-10">End</Table.Head>
					<Table.Head class="min-w-52 lg:w-1/3">Skills</Table.Head>
					<Table.Head class="min-w-28"></Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell>VP, Director of Sales</Table.Cell>
					<Table.Cell>ABC Contracting & Consulting</Table.Cell>
					<Table.Cell>2009</Table.Cell>
					<Table.Cell>Present</Table.Cell>
					<Table.Cell>
						<Badge class="mb-1" variant="invert">Sales</Badge>
						<Badge class="mb-1" variant="invert">Finance</Badge>
						<Badge class="mb-1" variant="secondary">Leadership</Badge>
						<Badge class="mb-1" variant="secondary">Teamwork</Badge>
						<Badge class="mb-1" variant="secondary">MS Word</Badge>
					</Table.Cell>
					<Table.Cell class="text-right">
						<Button variant="ghost" size="sm"><Edit class="w-4" /></Button>
						<Button variant="ghost" size="sm"><Delete class="w-4" /></Button>
					</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>Sales Manager</Table.Cell>
					<Table.Cell>XYZ Consulting</Table.Cell>
					<Table.Cell>2007</Table.Cell>
					<Table.Cell>2009</Table.Cell>
					<Table.Cell>
						<Badge class="mb-1" variant="invert">Enterprise Solutions</Badge>
						<Badge class="mb-1" variant="invert">Accounting</Badge>
						<Badge class="mb-1" variant="secondary">Excel</Badge>
						<Badge class="mb-1" variant="secondary">Finance</Badge>
						<Badge class="mb-1" variant="secondary">Powerpoint</Badge>
					</Table.Cell>
					<Table.Cell class="text-right">
						<Button variant="ghost" size="sm"><Edit class="w-4" /></Button>
						<Button variant="ghost" size="sm"><Delete class="w-4" /></Button>
					</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table.Root>
	</Card.Content>
</Card.Root>
