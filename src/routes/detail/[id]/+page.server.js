import { dev } from '$app/environment';
import { URL_DEV, URL_PROD } from '$env/static/private';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
  const id = params.id;

  const api = dev ? URL_DEV : URL_PROD;

  /**
   * @param {string} id
   */
  async function getDetailMahasiswa(id){
    try {
      const res = await fetch(`${api}/api/mahasiswa/detail/${id}`);
      const data = await res.json();
      return data;
    } catch (e) {
      // @ts-ignore
			throw error(500, e.message);
    }
  }

  return {detail:await getDetailMahasiswa(id)}
}