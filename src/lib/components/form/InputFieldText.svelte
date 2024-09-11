<script>
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	export let id,
		value,
		label,
		placeholder = '';
</script>

<div class="flex flex-col gap-1.5">
	<Label for={id}>{label}</Label>
	<Input type="text" {id} bind:value {placeholder} />
</div>
