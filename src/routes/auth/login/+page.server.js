// @ts-nocheck
import { z } from 'zod';
import { fail } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms/server';
// import { Auth } from 'aws-amplify';

// import { Auth } from 'aws-amplify';
// Name has a default value just to display something in the form.
const schema = z.object({
	email: z.string().email(),
	password: z
		.string()
		.refine(
			(value) => value.length >= 6 && value.length <= 25,
			"Password should contain atleast 6 and maximum of 25 character's"
		)
});

export const load = async ({request, params}) => {
	// Server API:
	const form = await superValidate(schema);

	console.log("request : ", request);
	console.log("params : ", params);
	// Always return { form } in load and form actions.
	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, schema);
		console.log('POST', form);

		// Convenient validation check:
		if (!form.valid) {
			// Again, always return { form } and things will just work.
			return fail(400, { form });
		}

		

		return message(form, {
			status: 'success'
		});

		// try{

		// }catch{

		// }

		// TODO: Do something with the validated data

		// Yep, return { form } here too
		// return { form };
	}
};
