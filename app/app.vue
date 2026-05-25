<template>
	<div class="min-h-screen bg-paper-bg text-dark-ink bg-grid-pattern bg-[length:20px_20px] font-sans selection:bg-pink-ink selection:text-white">

		<header class="text-center py-16 px-4 bg-header-texture bg-cover border-b-[3px] border-dashed border-pink-ink">
			<h1 class="font-handwriting text-5xl mb-2 relative inline-block">
				Hi, I'm Mahdis, an Illustrator!
				<span class="absolute w-full h-3 bg-pink-ink/30 -bottom-1 left-0 -z-10 -rotate-2"></span>
			</h1>
			<p class="text-lg mb-8">I create expressive, story-driven illustrations through both digital and traditional art.</p>

			<nav class="space-x-6">
				<NuxtLink to="/" class="font-bold text-lg pb-1 border-b-2 border-transparent transition-colors hover:border-pink-ink hover:text-pink-ink" active-class="border-pink-ink !text-pink-ink">Gallery</NuxtLink>
				<NuxtLink to="/resume" class="font-bold text-lg pb-1 border-b-2 border-transparent transition-colors hover:border-pink-ink hover:text-pink-ink" active-class="border-pink-ink !text-pink-ink">Resume</NuxtLink>
				<NuxtLink to="/contact" class="font-bold text-lg pb-1 border-b-2 border-transparent transition-colors hover:border-pink-ink hover:text-pink-ink" active-class="border-pink-ink !text-pink-ink">Contact</NuxtLink>
			</nav>
		</header>

		<main class="max-w-5xl mx-auto py-8 px-4">
			<NuxtPage />
		</main>

	</div>
</template>

<script setup>
useHead({
	link: [
		{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
		{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
		{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Nunito:wght@400;600&display=swap' }
	]
})
</script>
