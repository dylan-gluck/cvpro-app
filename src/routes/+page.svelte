<script>
	import Hero from '$lib/components/layout/Hero.svelte';

	let heroCopy = {
		title: 'TODO',
		description:
			'Update the top navigation. Create the layout design page. Sidebar ui (dropdown on mobile), Preview area live update resume. Make slideable? Select template, options, fonts, colors. V2 -> Create custom layout ? Add sections ?'
	};
</script>

<svelte:head>
	<title>Profile - CV Pro</title>
</svelte:head>

<Hero title={heroCopy.title} description={heroCopy.description}></Hero>
