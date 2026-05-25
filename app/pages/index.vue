<template>
	<section>
		<h2 class="font-handwriting text-center text-5xl mb-8 text-pink-ink">Selected Artworks</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

			<div
				v-for="(project, index) in projects"
				:key="project.id"
				:class="[
          'bg-white p-4 rounded-sm shadow-[5px_5px_15px_rgba(0,0,0,0.05),-2px_-2px_0px_#3cc8a0] transition-transform hover:scale-105 hover:rotate-0 hover:z-10',
          index % 2 === 0 ? '-rotate-1' : 'rotate-2'
        ]"
			>
				<NuxtLink :to="`/project/${project.id}`" class="block">
					<NuxtImg :src="project.cover" :alt="project.title" format="webp" loading="lazy" class="w-full h-auto border-b-2 border-dashed border-gray-200 mb-3" />
					<div class="text-center text-sm">
						<strong class="font-handwriting text-2xl block mb-1 text-dark-ink">{{ project.title }}</strong>
						<p class="text-dark-ink">{{ project.shortDesc }}</p>
					</div>
				</NuxtLink>
			</div>

		</div>
	</section>
</template>

<script setup>
const projects = useProjects()
</script>
