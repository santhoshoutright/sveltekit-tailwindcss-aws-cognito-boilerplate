import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

// Name has a default value just to display something in the form.
const schema = z.object({
	email: z.string().email(),
	password: z.string().email()
});

export const load = async () => {
	// Server API:
	const form = await superValidate(schema);

	// Always return { form } in load and form actions.
	return { form };
};
