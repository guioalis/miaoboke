// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import deno from '@astrojs/deno'; // 添加这一行

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [mdx(), sitemap(), react()],
    output: 'server', // 修改为server输出模式
    adapter: deno(), // 添加Deno适配器
});