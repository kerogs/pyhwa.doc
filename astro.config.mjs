// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { Icon } from '@astrojs/starlight/components';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'PyHwa',
			social: {
				github: 'https://github.com/kerogs/pyhwa',
			},
            sidebar: [
                {
                    label: "Quick start",
                    autogenerate: {
                        directory: "start",
                    },
                },
            ],
		}),
	],
});
