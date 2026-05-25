<template>
	<section v-if="project" class="max-w-4xl mx-auto">
		<NuxtLink to="/" class="inline-block mb-8 font-bold hover:text-pink-ink transition-colors">
			&larr; Back to Gallery
		</NuxtLink>

		<div class="text-center mb-12">
			<h1 class="font-handwriting text-6xl mb-4 text-pink-ink">{{ project.title }}</h1>
			<p class="text-lg">{{ project.fullDesc }}</p>
		</div>

		<div class="space-y-12">
			<div
				v-for="(img, index) in project.gallery"
				:key="index"
				class="bg-white p-4 shadow-md rounded-sm"
			>
				<NuxtImg
					:src="img"
					format="webp"
					loading="lazy"
					class="w-full h-auto border border-dashed border-gray-200"
				/>
			</div>
		</div>
	</section>

	<section v-else class="text-center py-20">
		<h1 class="font-handwriting text-5xl text-pink-ink">Project Not Found!</h1>
		<NuxtLink to="/" class="underline mt-4 inline-block">Go back home</NuxtLink>
	</section>
</template>

<script setup>
const route = useRoute()
const projectId = route.params.id

const projects = useProjects()
const project = projects.find(p => p.id === projectId)
</script>
