<div class="resume-preview">
	<div class="flex flex-col">
		<span class="resume-name">John Doe</span>
		<span class="resume-title">VP, Head of Sales</span>
	</div>
	<div class="flex flex-col justify-between">
		<span class="resume-company">ABC Contracting & Consulting</span>
		<div class="flex flex-col gap-1">
			<span class="resume-location">2294 E 155th St, New York, NY</span>
			<span class="resume-email">jdoe@abconsulting.com</span>
			<span class="resume-phone">+1 (123) 555-4561</span>
		</div>
	</div>
</div>

<style>
	.resume-preview {
		container: preview / inline-size;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		background: #fff;
		color: #1e1e1e;
		border: 1px solid hsl(var(--border));
		border-radius: 4px;
		padding: 5%;
		aspect-ratio: 8.5/11;
	}

	.resume-title {
		color: hsl(var(--muted-foreground));
	}

	@container preview (min-width: 0px) {
		.resume-name,
		.resume-title {
			font-size: 3cqw;
		}

		.resume-company,
		.resume-location,
		.resume-email,
		.resume-phone {
			font-size: 2.3cqw;
		}
	}
</style>
