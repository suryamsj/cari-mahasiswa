<script>
	import { yearChange } from '$lib/utils.js';

	export let data;
	$: ({ detail } = data);
</script>

<svelte:head>
	<title>Cari Mahasiswa - Detail</title>
	<meta
		name="description"
		content="Sebuah Website untuk mencari data Mahasiswa dari berbagai perguruan tinggi di Indonesia."
	/>
</svelte:head>

<!-- Data Umum -->
<section class="w-full flex flex-col gap-4">
	<h1 class="font-bold text-2xl">Data Umum</h1>

	<ul class="list-disc pl-5">
		<li class="mb-2"><span class="font-semibold">Nama Lengkap:</span> {detail.dataumum.nm_pd}</li>
            <li class="mb-2"><span class="font-semibold">Jenis Kelamin:</span> {detail.dataumum.jk === 'L' ? 'Laki-laki' : 'Perempuan'}</li>
            <li class="mb-2"><span class="font-semibold">NIM:</span> {detail.dataumum.nipd}</li>
		<li class="mb-2"><span class="font-semibold">Nama Perguruan Tinggi:</span> {detail.dataumum.namapt}</li>
		<li class="mb-2"><span class="font-semibold">Jenjang:</span> {detail.dataumum.namajenjang}</li>
		<li class="mb-2"><span class="font-semibold">Program Studi:</span> {detail.dataumum.namaprodi}</li>
		<li class="mb-2"><span class="font-semibold">Mulai Semester:</span> {yearChange(detail.dataumum.mulai_smt)}</li>
		<li class="mb-2"><span class="font-semibold">Jenis Daftar:</span> {detail.dataumum.nm_jns_daftar}</li>
		{#if detail.dataumum.nm_pt_asal}
				<li class="mb-2"><span class="font-semibold">Perguruan Tinggi Asal:</span> {detail.dataumum.nm_pt_asal}</li>
		{/if}
		{#if detail.dataumum.nm_prodi_asal}
				<li class="mb-2"><span class="font-semibold">Program Studi Asal:</span> {detail.dataumum.nm_prodi_asal}</li>
		{/if}
		<li class="mb-2"><span class="font-semibold">Keterangan Keluar:</span> {detail.dataumum.ket_keluar}</li>
</ul>
</section>

<!-- Status Kuliah -->
<section class="w-full flex flex-col gap-4">
	<h1 class="font-bold text-2xl mb-4">Status Kuliah</h1>
	<div class="overflow-x-auto">
			<table class="min-w-full text-center border-collapse border-4 border-black">
					<thead class="bg-white text-black">
							<tr>
									<th class="border-2 border-black p-3">#</th>
									<th class="border-2 border-black p-3">Semester</th>
									<th class="border-2 border-black p-3">SKS</th>
									<th class="border-2 border-black p-3">Status</th>
							</tr>
					</thead>
					<tbody>
							{#each detail.datastatuskuliah as item, i}
									<tr class="odd:bg-white even:bg-gray-100 hover:bg-blue-200">
											<td class="border-2 border-black p-3">{(i += 1)}</td>
											<td class="border-2 border-black p-3">{yearChange(item.id_smt)}</td>
											<td class="border-2 border-black p-3">{item.sks_smt}</td>
											<td class="border-2 border-black p-3">{item.nm_stat_mhs}</td>
									</tr>
							{/each}
					</tbody>
			</table>
	</div>
</section>

<!-- Data Studi -->
<section class="w-full flex flex-col gap-4">
	<h1 class="font-bold text-2xl mb-4">Data Studi</h1>
	<div class="overflow-x-auto">
			<table class="min-w-full text-center border-collapse border-4 border-black">
					<thead class="bg-white text-black">
							<tr>
									<th class="border-2 border-black p-3">#</th>
									<th class="border-2 border-black p-3">Kode MK</th>
									<th class="border-2 border-black p-3">Nama MK</th>
									<th class="border-2 border-black p-3">Semester</th>
									<th class="border-2 border-black p-3">SKS</th>
							</tr>
					</thead>
					<tbody>
							{#each detail.datastudi as item, i}
									<tr class="odd:bg-white even:bg-gray-100 hover:bg-blue-200">
											<td class="border-2 border-black p-3">{(i += 1)}</td>
											<td class="border-2 border-black p-3">{item.kode_mk}</td>
											<td class="border-2 border-black p-3">{item.nm_mk}</td>
											<td class="border-2 border-black p-3">{yearChange(item.id_smt)}</td>
											<td class="border-2 border-black p-3">{item.sks_mk}</td>
									</tr>
							{/each}
					</tbody>
			</table>
	</div>
</section>
