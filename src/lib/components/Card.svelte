<script>
	export let link = "";
	export let isLink = true;
</script>

<article class="p-4 relative w-full h-auto bg-white border-4 border-black costume-shadow">
	{#if isLink}
	<a class="absolute right-4 top-4 flex items-center justify-center w-10 h-10 bg-orange-400 border-2 border-black rounded-full text-white icon-shadow" href="/detail/{link}" title="Detail Mahasiswa">
		<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-box-arrow-in-up-right" viewBox="0 0 16 16">
			<path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5"/>
			<path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0z"/>
		</svg>
	</a>
	{/if}
	<slot />
</article>
