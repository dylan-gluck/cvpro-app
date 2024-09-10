<script>
	import * as Card from '$lib/components/ui/card';
	import * as Resizable from '$lib/components/ui/resizable/index.js';
	import { Button } from '$lib/components/ui/button';
	import { ArrowBigRight, Pencil } from 'lucide-svelte';
	import Page from '$lib/components/layout/Page.svelte';
	import CardPreview from '$lib/components/profile/CardPreview.svelte';
	import Experience from '$lib/components/profile/Experience.svelte';
	import ContactInfo from '$lib/components/profile/ContactInfo.svelte';
	import Education from '$lib/components/profile/Education.svelte';
	import ResumePreview from '$lib/components/profile/ResumePreview.svelte';
	import Certifications from '$lib/components/profile/Certifications.svelte';
	import { ArrowRight } from 'svelte-radix';
</script>

<svelte:head>
	<title>Profile - CV Pro</title>
</svelte:head>

<Page>
	<div class="mb-10 flex flex-col items-center gap-4 text-center">
		<h1 class="font-serif text-2xl lg:text-5xl">Edit your profile</h1>
		<p class="max-w-[60ch] font-sans lg:text-xl">
			Enter your work history, education and professional certifications. This information will be
			used to create your custom business card, resumes & cover letters.
		</p>
	</div>

	<Resizable.PaneGroup direction="horizontal" class="mb-10 w-full gap-5">
		<Resizable.Pane defaultSize={60} class="flex flex-col gap-5">
			<ContactInfo />
			<Experience />
			<Education />
			<Certifications />
		</Resizable.Pane>
		<Resizable.Handle withHandle />
		<Resizable.Pane defaultSize={40} class="flex flex-col gap-5">
			<Card.Root>
				<Card.Header>
					<Card.Title>Live Preview</Card.Title>
					<div class="flex items-center justify-between gap-2">
						<Card.Description>Digital business card</Card.Description>
						<Button variant="secondary" size="xs" class="gap-2">
							<Pencil class="h-3 w-auto" /> Layout
						</Button>
					</div>
				</Card.Header>
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
			<div
				class="mb-10 flex flex-col items-start justify-between gap-5 rounded-xl bg-background px-6 py-8 text-foreground"
			>
				<div class="flex flex-col gap-2">
					<h1 class="font-serif text-xl">Next: Customize Layout & Design</h1>
					<p class="max-w-[60ch] font-sans">
						Enter your work history, education and professional certifications. This information
						will be used to create your custom business card, resumes & cover letters.
					</p>
				</div>
				<div class="flex gap-2">
					<Button size="sm" variant="outline">Back to Dashboard</Button>
					<Button size="sm" class="gap-2">Layout & Design <ArrowRight class="h-4 w-auto" /></Button>
				</div>
			</div>
		</Resizable.Pane>
	</Resizable.PaneGroup>
</Page>
