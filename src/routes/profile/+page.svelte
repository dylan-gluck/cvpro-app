<script>
	import { Button } from '$lib/components/ui/button';
	import { Download, RefreshCcw } from 'lucide-svelte';
	import { ArrowRight, LinkedinLogo } from 'svelte-radix';
	import Hero from '$lib/components/layout/Hero.svelte';
	import Cta from '$lib/components/layout/Cta.svelte';
	import Experience from '$lib/components/profile/Experience.svelte';
	import ContactInfo from '$lib/components/profile/ContactInfo.svelte';
	import Education from '$lib/components/profile/Education.svelte';
	import Certifications from '$lib/components/profile/Certifications.svelte';
	import LivePreview from '$lib/components/profile/LivePreview.svelte';
	import ResizableDesktop from '$lib/components/layout/ResizableDesktop.svelte';

	let heroCopy = {
		title: 'Update your profile',
		description:
			'Enter your work history, education and professional certifications. This information will be used to create your custom business card, resumes & cover letters.'
	};

	let ctaCopy = {
		title: 'Next: Customize Layout & Design',
		description:
			'Choose one of our pre-built designs & make it your own. Premium themes include advanced options and variations.'
	};
</script>

<svelte:head>
	<title>Profile - CV Pro</title>
</svelte:head>

<Hero title={heroCopy.title} description={heroCopy.description}></Hero>

<ResizableDesktop>
	<svelte:fragment slot="left">
		<ContactInfo />
		<Experience />
		<Education />
		<Certifications />
	</svelte:fragment>
	<svelte:fragment slot="right">
		<LivePreview />
		<Cta title={ctaCopy.title} description={ctaCopy.description}>
			<svelte:fragment slot="buttons">
				<Button size="sm" variant="outline" class="gap-2 px-4"
					><Download class="h-4 w-auto" /> Download PDF</Button
				>
				<Button size="sm" class="gap-2 px-4"
					>Layout & Design <ArrowRight class="h-4 w-auto" /></Button
				>
			</svelte:fragment>
		</Cta>
	</svelte:fragment>
</ResizableDesktop>
