// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	redirects: {
		'/': '/welcome/language-synthesis',
	},
	markdown: {
		shikiConfig: {
			langs: [

			]
		}
	},
	integrations: [
		starlight({
			title: 'Writing a Compiler in TypeScript',
			social: {
				github: 'https://github.com/gom-lang/compiler-course',
			},
			sidebar: [
				{
					label: 'Hello, World!',
					items: [
						{ label: 'Welcome', slug: 'welcome/start' },
						{ label: 'The Magic of Language Synthesis', slug: 'welcome/language-synthesis' },
					],
				},
				{
					label: 'The Gom Programming Language',
					items: [
						{ label: 'Introduction to Gom', slug: 'gom-language/introduction' },
						{ label: 'Syntax and Feel', slug: 'gom-language/syntax' },
					]
				},
				{
					label: 'Lexical Analysis',
					items: [
						{ label: 'Reading Tokens', slug: 'lexical-analysis/reading-tokens' },
						{ label: 'Multi-character Tokens', slug: 'lexical-analysis/multi-character-tokens' },
					]
				},
				{
					label: 'Parsing and Semantics',
					items: [
						{ label: 'Parsing & Abstract Syntax Trees', slug: 'parsing-semantics/parsing' },
						{ label: 'A Simple Type System', slug: 'parsing-semantics/type-system' },
						{ label: 'Semantic Analysis', slug: 'parsing-semantics/semantic-analysis' },
					]
				},
				{
					label: 'Code Generation',
					items: [
						{ label: 'Introduction to LLVM', slug: 'codegen/intro-to-llvm' },
						{ label: 'Generating LLVM IR', slug: 'codegen/generating-llvm-ir' },
					]
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Gom Language Grammar', slug: 'reference/gom-ebnf' },
					]
				},
			],
			customCss: [
				'./src/styles/custom.css',
				'@fontsource/ibm-plex-sans/400.css',
				'@fontsource/ibm-plex-sans/600.css',
				'@fontsource/ibm-plex-mono/400.css',
				'@fontsource/ibm-plex-mono/600.css',
			],
		}),
	],
});
