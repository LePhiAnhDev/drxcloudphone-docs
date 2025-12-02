import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
    integrations: [
        starlight({
            title: 'DrXCloudPhone',
            description: 'Hướng dẫn cài đặt DrXCloudPhone',

            social: [
                {
                    icon: 'github',
                    label: 'GitHub',
                    href: 'https://github.com/',
                },
            ],

            defaultLocale: 'root',
            locales: {
                root: {
                    label: 'Tiếng Việt',
                    lang: 'vi',
                },
            },
        }),
    ],
});