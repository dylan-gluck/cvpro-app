<script>
	import Page from '$lib/components/layout/Page.svelte';
	import CardPreview from '$lib/components/profile/CardPreview.svelte';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Pencil } from 'lucide-svelte';
	import Experience from '$lib/components/profile/Experience.svelte';
	import ContactInfo from '$lib/components/profile/ContactInfo.svelte';
	import Education from '$lib/components/profile/Education.svelte';
	import ResumePreview from '$lib/components/profile/ResumePreview.svelte';
	import Certifications from '$lib/components/profile/Certifications.svelte';
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
	<div class="grid w-full grid-cols-1 gap-5 lg:grid-cols-5">
		<div class="flex flex-col gap-5 lg:col-span-3">
			<ContactInfo />
			<Experience />
			<Education />
			<Certifications />
		</div>
		<div class="flex flex-col gap-5 lg:col-span-2">
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
		</div>
	</div>
</Page>
