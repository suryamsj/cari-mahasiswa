import { API_DETAIL_MAHASISWA } from '$env/static/private';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({params}) {
    const { id } = params;
    const apiUrl = `${API_DETAIL_MAHASISWA}/${id}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return json(data,{status:200});
    } catch (e) {
      return json(
        {
          success: false,
          // @ts-ignore
          message: e.message
        },
        {
          status: 500
        }
      );
    }
}