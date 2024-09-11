<script>
	import * as Resizable from '$lib/components/ui/resizable/index.js';

	export let leftDefault = 60;
	export let rightDefault = 40;
</script>

<Resizable.PaneGroup direction="horizontal" class="mb-10 w-full gap-5">
	<Resizable.Pane defaultSize={leftDefault} class="flex flex-col gap-5">
		<slot name="left"></slot>
	</Resizable.Pane>

	<Resizable.Handle withHandle />

	<Resizable.Pane defaultSize={rightDefault} class="flex flex-col gap-5">
		<slot name="right"></slot>
	</Resizable.Pane>
</Resizable.PaneGroup>
