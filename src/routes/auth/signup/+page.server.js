// @ts-nocheck
import { z } from 'zod';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';

// Name has a default value just to display something in the form.
const schema = z.object({
    name: z.string().min(1, "Name is required"),
	email: z.string().email(),
	password: z.string().refine(value => value.length >= 6 && value.length <= 25, "Password should contain atleast 6 and maximum of 25 character's"),
    mobile: z.string().refine(value => value.length == 10, "Enter 10 digit mobile number"),
});

export const load = async () => {
	// Server API:
	const form = await superValidate(schema);

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
  
      // TODO: Do something with the validated data
  
      // Yep, return { form } here too
      return { form };
    }
  };