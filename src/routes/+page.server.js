import { dev } from '$app/environment';
import { URL_DEV, URL_PROD } from '$env/static/private';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	const search = url.searchParams.get('search') || 'Muhammad Surya Jayadiprana';
	const api = dev ? URL_DEV : URL_PROD;


	/**
	 * @param {string} params
	 */
	async function getMahasiswa(params) {
		try {
			if (params) {
				const res = await fetch(`${api}/api/mahasiswa/${params}`, {
					method: 'GET'
				});

				if (res.status === 200) {
					const data = await res.json();
					return data;
				}
			}
			return {
				mahasiswa: []
			};
		} catch (e) {
			// @ts-ignore
			throw error(500, e.message);
		}
	}

	return { result: await getMahasiswa(search) };
}