<div class="card-preview">
	<div class="flex flex-col">
		<span class="card-name">John Doe</span>
		<span class="card-title">VP, Head of Sales</span>
	</div>
	<div class="flex flex-col justify-between">
		<span class="card-company">ABC Contracting & Consulting</span>
		<div class="flex flex-col gap-1">
			<span class="card-location">2294 E 155th St, New York, NY</span>
			<span class="card-email">jdoe@abconsulting.com</span>
			<span class="card-phone">+1 (123) 555-4561</span>
		</div>
	</div>
</div>

<style>
	.card-preview {
		container: preview / inline-size;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		background: #fff;
		color: #1e1e1e;
		border: 1px solid hsl(var(--border));
		border-radius: 4px;
		padding: 5%;
		aspect-ratio: 4/2;
	}

	.card-title {
		color: hsl(var(--muted-foreground));
	}

	@container preview (min-width: 0px) {
		.card-name,
		.card-title {
			font-size: 3cqw;
		}

		.card-company,
		.card-location,
		.card-email,
		.card-phone {
			font-size: 2.3cqw;
		}
	}
</style>
