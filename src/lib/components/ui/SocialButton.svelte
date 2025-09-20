<script lang="ts">
	import type { ComponentType, SvelteComponent } from 'svelte';

	let {
		icon: Icon,
		text,
		url,
		class: className = ''
	} = $props<{
		icon: ComponentType<SvelteComponent>;
		text: string;
		url: string;
		class?: string;
	}>();
</script>

<a
	href={url}
	target="_blank"
	rel="noopener noreferrer"
	class="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-amber-200 hover:text-amber-100 bg-stone-800/50 hover:bg-stone-700/50 border border-stone-600/30 hover:border-stone-500/50 rounded-lg transition-all duration-200 backdrop-blur-sm {className}"
>
	<Icon size={16} />
	<span>{text}</span>
</a>
