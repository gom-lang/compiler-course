// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import gomLang from './gom.textmate.json';
import partytown from '@astrojs/partytown';

import sitemap from '@astrojs/sitemap';
import starlightGiscus from "starlight-giscus";

// https://astro.build/config
export default defineConfig({
	site: "https://compiler-in-typescript.mohitkarekar.com",
	redirects: {
		'/': '/welcome/start',
	},
	markdown: {
		shikiConfig: {
			langs: [
				// @ts-ignore
				gomLang
			]
		}
	},
	integrations: [starlight({
		title: 'Writing a Compiler in TypeScript',
		logo: {
			light: './src/assets/logo.avif',
			dark: './src/assets/logo-dark.avif',
			replacesTitle: true,
		},
		lastUpdated: true,
		social: [
			{
				icon: "github",
				href: "https://github.com/gom-lang/compiler-course",
				label: "GitHub",
			},
			{
				icon: "linkedin",
				href: "https://www.linkedin.com/in/mohit-karekar/",
				label: "LinkedIn",
			},
			{
				icon: "x.com",
				href: "https://x.com/mohitkarekar",
				label: "X.com"
			},
			{
				icon: "email",
				href: "mailto:karekar.mohit@gmail.com",
				label: "Email",
			}
		],
		head: [
			{
				tag: 'script',
				attrs: {
					src: 'https://www.googletagmanager.com/gtag/js?id=G-QMC0BNP18V',
					type: 'text/partytown',
					async: true
				}
			},
			{
				tag: 'script',
				content: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-QMC0BNP18V');`,
				attrs: {
					type: 'text/partytown'
				}
			},
		],
		sidebar: [
			{
				label: 'Hello, World!',
				items: [
					{ label: 'Welcome', slug: 'welcome/start' },
					{ label: 'The Magic of Language Synthesis', slug: 'welcome/language-synthesis' },
				],
			},
			{
				label: 'The Gom Programming Language & Setup',
				items: [
					{ label: 'Introduction to Gom', slug: 'gom-language/introduction' },
					{ label: 'Project Setup', slug: 'gom-language/setup' },
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
					{ label: 'Parsing & ASTs', slug: 'parsing-semantics/parsing-1' },
					{ label: 'Parsing Continued - Gom Programs', slug: 'parsing-semantics/parsing-2' },
					{ label: '⏳ Parsing Continued - Expressions', slug: 'parsing-semantics/parsing-3' },
					{ label: 'Walking the AST with Visitors', slug: 'parsing-semantics/walking-the-ast' },
					{ label: 'Adding a Type System', slug: 'parsing-semantics/type-system' },
					{ label: '⏳ Semantic Analysis', slug: 'parsing-semantics/semantic-analysis' },
				]
			},
			{
				label: 'Code Generation',
				items: [
					{ label: '⏳ Introduction to LLVM', slug: 'codegen/intro-to-llvm' },
					{ label: '⏳ Generating LLVM IR', slug: 'codegen/generating-llvm-ir' },
				]
			},
			{
				label: 'Advanced Topics',
				items: [
					{ label: '⏳ Introduction', slug: 'advanced/introduction' },
					{ label: '⏳ Complex Data Structures', slug: 'advanced/complex-data-structures' },
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
		plugins: [
			starlightGiscus({
				repo: "gom-lang/compiler-course",
				repoId: "R_kgDONoUTrg",
				category: "Web Comments",
				categoryId: "DIC_kwDONoUTrs4C2Nex"
			})
		],
	}), partytown({
		config: {
			forward: ["dataLayer.push"]
		}
	}), sitemap()],
});