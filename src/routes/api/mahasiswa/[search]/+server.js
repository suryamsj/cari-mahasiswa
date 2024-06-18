import { API_MAHASISWA } from '$env/static/private';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
	try {
		const { search } = params;

		if (!search) {
			return json(
				{
					success: false,
					message: 'Parameter pencarian tidak boleh kosong.'
				},
				{ status: 400 }
			);
		}

		const response = await fetch(`${API_MAHASISWA}/${search}`);
		const data = await response.json();

		if (!data.mahasiswa || data.mahasiswa.length === 0) {
			return json(
				{
					success: true,
					mahasiswa: []
				},
				{ status: 200 }
			);
		}

		const mahasiswa = data.mahasiswa.map((/** @type {{ [x: string]: string; text: { split: (arg0: string, arg1: number) => [any, any]; }; }} */ item) => {
			const [namePart, rest] = item.text.split('(', 2);
			const [nimPart, ptProdiPart] = rest.split('),', 2);
			const [ptPart, prodiPart] = ptProdiPart.split(', Prodi:', 2);

			return {
				name: namePart.trim(),
				nim: nimPart.trim(),
				pt: ptPart.replace('PT :', '').trim(),
				prodi: prodiPart.trim(),
				detail: item['website-link'].split('/').pop()
			};
		});

		return json({ mahasiswa }, { status: 200 });
	} catch (e) {
		return json(
			{
				success: false,
				// @ts-ignore
				message: e.message,
				mahasiswa: []
			},
			{
				status: 500
			}
		);
	}
}