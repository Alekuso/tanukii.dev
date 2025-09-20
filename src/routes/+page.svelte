<script lang="ts">
	import Card from '$lib/components/ui/Card.svelte';
	import SocialButton from '$lib/components/ui/SocialButton.svelte';

	// Brands are deprecated, to be fixed soon(tm)
	import { Github, Mail, Twitter, ExternalLink, Server } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { getRandomText } from '$lib/assets/texts';

	let randomText = '';

	onMount(() => {
		// Select random text at each load
		randomText = getRandomText();
	});
</script>

<main class="h-screen flex items-center justify-center">
	<div class="w-full max-w-4xl px-4">
		<section class="text-center mb-8">
			<div class="glass-strong rounded-3xl p-8">
				<div class="mb-4 flex justify-center">
					<div class="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
						<img
							src="/Tanukii.svg"
							alt="Tanukii"
							width="90"
							height="90"
							class="object-contain rounded-full"
						/>
					</div>
				</div>
				<h1 class="text-4xl md:text-5xl font-bold mb-4 text-glow text-balance">Tanukii</h1>
				<p
					class="text-lg md:text-xl text-amber-300/80 mb-6 leading-relaxed text-pretty max-w-2xl mx-auto animate-fade-in"
				>
					{randomText}
				</p>
			</div>
		</section>

		<footer class="mt-8">
			<Card class="glass p-6 max-w-md mx-auto">
				<div class="text-center">
					<h3 class="text-lg font-semibold mb-3 text-glow">Socials</h3>
					<div class="flex items-center justify-center gap-2 flex-wrap">
						<SocialButton icon={Server} text="Discord" url="https://discord.gg/HWQXZJGCAM" />
						<SocialButton icon={Mail} text="Email" url="mailto:alex@tanukii.dev" />
						<SocialButton icon={Twitter} text="Twitter" url="https://twitter.com/Alekuso_" />
						<SocialButton icon={Github} text="GitHub" url="https://github.com/Alekuso" />
						<SocialButton icon={ExternalLink} text="Linktree" url="https://linktr.ee/AlexTanukii" />
					</div>
				</div>
			</Card>
		</footer>
	</div>
</main>
