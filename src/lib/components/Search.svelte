<script>
	import { goto } from '$app/navigation';

	let search = '';
	/**
	 * @type {number}
	 */
	let timer;

	function handleSearch() {
		clearTimeout(timer);
		timer = setTimeout(() => {
			if (search === '') {
				goto('/');
			} else {
				goto(`?search=${search}`);
			}
		}, 1000);
	}
</script>

<div class="w-full">
	<input
		class="bg-white border-4 border-black w-full p-2 placeholder:text-black placeholder:text-opacity-60 focus:outline-none costume-shadow"
		type="search"
		name="search"
		id="search"
		placeholder="Cari berdasarkan nama, NIM, jurusan atau perguruan tinggi"
		bind:value={search}
		on:input={handleSearch}
	/>
</div>
