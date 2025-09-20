<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Leaf } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	interface LeafData {
		id: number;
		x: number;
		y: number;
		size: number;
		rotation: number;
		opacity: number;
		animationDelay: number;
	}

	let { children } = $props();
	let leaves = $state<LeafData[]>([]);

	onMount(() => {
		// Generate random number of leaves (between 10-16 for better spacing)
		const leafCount = Math.floor(Math.random() * 7) + 10;
		const minDistance = 8; // Minimum distance between leaves (in percentage)
		const placedLeaves: { x: number; y: number }[] = [];

		function isValidPosition(newX: number, newY: number): boolean {
			return placedLeaves.every((leaf) => {
				const distance = Math.sqrt(Math.pow(newX - leaf.x, 2) + Math.pow(newY - leaf.y, 2));
				return distance >= minDistance;
			});
		}

		/**
		 * Generate a random position within a specified zone
		 * in order to avoid positions too close to the edges or the center of the screen.
		 */
		function generatePosition(zone: number): { x: number; y: number } {
			let x: number, y: number;
			let attempts = 0;
			const maxAttempts = 50;

			do {
				switch (zone) {
					case 0:
						x = Math.random() * 25;
						y = Math.random() * 100;
						break;
					case 1:
						x = Math.random() * 25 + 75;
						y = Math.random() * 100;
						break;
					case 2:
						x = Math.random() * 50 + 25;
						y = Math.random() * 30;
						break;
					case 3:
						x = Math.random() * 50 + 25;
						y = Math.random() * 30 + 70;
						break;
					default:
						x = Math.random() * 100;
						y = Math.random() * 100;
				}

				x = Math.max(2, Math.min(98, x));
				y = Math.max(5, Math.min(95, y));
				attempts++;
			} while (!isValidPosition(x, y) && attempts < maxAttempts);

			return { x, y };
		}

		leaves = Array.from({ length: leafCount }, (_, i) => {
			const zone = Math.floor(Math.random() * 4);
			const position = generatePosition(zone);

			placedLeaves.push(position);

			return {
				id: i,
				x: position.x,
				y: position.y,
				size: Math.random() * 25 + 25,
				rotation: Math.random() * 360 - 180,
				opacity: Math.random() * 0.35 + 0.15,
				animationDelay: Math.random() * 8
			};
		});
	});

	function handleLeafClick() {
		if ($page.route.id === '/michi') {
			goto('/');
		} else {
			goto('/michi');
		}
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="h-screen bg-stone-950 relative overflow-hidden">
	<!-- Background Image -->
	<div class="absolute inset-0 z-0">
		<img
			src="/autumn.png"
			alt="Anime forest background"
			class="w-full h-full object-cover opacity-20"
		/>
		<div
			class="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/60 to-stone-950/90"
		></div>
	</div>

	<!-- Floating Leaves -->
	<div class="absolute inset-0 overflow-hidden z-15 pointer-events-none">
		{#each leaves as leaf (leaf.id)}
			<div
				class="absolute cursor-default pointer-events-auto"
				style="
					left: {leaf.x}%; 
					top: {leaf.y}%; 
					width: {leaf.size}px; 
					height: {leaf.size}px;
					opacity: {leaf.opacity};
					transform: rotate({leaf.rotation}deg);
					color: {Math.random() > 0.5 ? 'rgb(251, 146, 60)' : 'rgb(217, 119, 6)'};
				"
				role="button"
				tabindex="0"
				onclick={handleLeafClick}
				onkeydown={handleLeafClick}
			>
				<div
					class="w-full h-full transition-all duration-1000 ease-out"
					style="animation: float 6s ease-in-out infinite {leaf.animationDelay}s;"
				>
					<Leaf class="w-full h-full" />
				</div>
			</div>
		{/each}

		<div class="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
		<div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl"></div>
	</div>

	<!-- Slug -->
	<div class="relative z-10 pointer-events-none">
		<div class="pointer-events-auto">
			{@render children?.()}
		</div>
	</div>
</div>
