<script>
	import Card from '$lib/components/Card.svelte';
	import Search from '$lib/components/Search.svelte';

	export let data;
	$: ({ result } = data);
</script>

<svelte:head>
	<title>Cari Mahasiswa</title>
	<meta
		name="description"
		content="Sebuah Website untuk mencari data Mahasiswa dari berbagai perguruan tinggi di Indonesia."
	/>
</svelte:head>

<Search />

{#each result.mahasiswa as item}
	<Card link={item.detail}>
		<p><span class="font-semibold">NAMA</span> : {item.name}</p>
		<p><span class="font-semibold">NIM</span> : {item.nim}</p>
		<p><span class="font-semibold">PRODI</span> : {item.prodi}</p>
		<p class="mb-0"><span class="font-semibold">PERGURUAN TINGGI</span> : {item.pt}</p>
	</Card>
{:else}
	<Card isLink={false}>
		<p class="text-center font-semibold text-xl">Data tidak ada</p>
	</Card>
{/each}
