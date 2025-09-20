<script lang="ts">
	interface Props {
		class?: string;
	}

	let { class: className = '', children } = $props<
		Props & { children?: import('svelte').Snippet }
	>();
</script>

<div
	class="rounded-lg border border-stone-200/10 bg-stone-900/50 backdrop-blur-sm shadow-lg {className}"
>
	{@render children?.()}
</div>
