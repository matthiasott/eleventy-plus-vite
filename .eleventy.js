import markdownIt from 'markdown-it'
import markdownItAnchor from 'markdown-it-anchor'

import EleventyPluginNavigation from '@11ty/eleventy-navigation';
import EleventyPluginRss from '@11ty/eleventy-plugin-rss'
import EleventyPluginSyntaxhighlight from '@11ty/eleventy-plugin-syntaxhighlight'
import EleventyVitePlugin from '@11ty/eleventy-plugin-vite'

import rollupPluginCritical from 'rollup-plugin-critical'


import filters from './utils/filters.js'
import transforms from './utils/transforms.js'
import shortcodes from './utils/shortcodes.js'

export default function (eleventyConfig) {
	eleventyConfig.setServerPassthroughCopyBehavior('copy');
	eleventyConfig.addPassthroughCopy("public");

	// Plugins
	eleventyConfig.addPlugin(EleventyPluginNavigation)
	eleventyConfig.addPlugin(EleventyPluginRss)
	eleventyConfig.addPlugin(EleventyPluginSyntaxhighlight)
	eleventyConfig.addPlugin(EleventyVitePlugin, {
		tempFolderName: '.11ty-vite', // Default name of the temp folder

		// Vite options (equal to vite.config.js inside project root)
		viteOptions: {
			publicDir: 'public',
			clearScreen: false,
			server: {
				mode: 'development',
				middlewareMode: true,
			},
			appType: 'custom',
			assetsInclude: ['**/*.xml', '**/*.txt'],
			build: {
				mode: 'production',
				sourcemap: true,
				manifest: true,
				// This puts CSS and JS in subfolders – remove if you want all of it to be in /assets instead
				rolldownOptions: {
					output: {
						assetFileNames: 'assets/css/main.[hash].css',
						chunkFileNames: 'assets/js/[name].[hash].js',
						entryFileNames: 'assets/js/[name].[hash].js'
					},
					plugins: [rollupPluginCritical({
							criticalUrl: './_site/',
							criticalBase: './_site/',
							criticalPages: [
								{ uri: 'index.html', template: 'index' },
								{ uri: 'posts/index.html', template: 'posts/index' },
								{ uri: '404.html', template: '404' },
							],
							criticalConfig: {
								inline: true,
								dimensions: [
									{
									  height: 900,
									  width: 375,
									},
									{
									  height: 720,
									  width: 1280,
									},
									{
										height: 1080,
										width: 1920,
									}
								],
								penthouse: {
									forceInclude: ['.fonts-loaded-1 body', '.fonts-loaded-2 body'],
								  }
							}
						})
					]
				}
			}
		}
	})

	// Filters
	Object.keys(filters).forEach((filterName) => {
		eleventyConfig.addFilter(filterName, filters[filterName])
	})

	// Transforms
	Object.keys(transforms).forEach((transformName) => {
		eleventyConfig.addTransform(transformName, transforms[transformName])
	})

	// Shortcodes
	Object.keys(shortcodes).forEach((shortcodeName) => {
		eleventyConfig.addShortcode(shortcodeName, shortcodes[shortcodeName])
	})

	eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`)

	// Customize Markdown library and settings:
	let markdownLibrary = markdownIt({
		html: true,
		breaks: true,
		linkify: true
	}).use(markdownItAnchor, {
		permalink: markdownItAnchor.permalink.ariaHidden({
			placement: 'after',
			class: 'direct-link',
			symbol: '#',
			level: [1, 2, 3, 4]
		}),
		slugify: eleventyConfig.getFilter('slug')
	})
	eleventyConfig.setLibrary('md', markdownLibrary)

	// Layouts
	eleventyConfig.addLayoutAlias('base', 'base.njk')
	eleventyConfig.addLayoutAlias('post', 'post.njk')

	// Copy/pass-through files
	eleventyConfig.addPassthroughCopy('src/assets/css')
	eleventyConfig.addPassthroughCopy('src/assets/js')

	return {
		templateFormats: ['md', 'njk', 'html', 'liquid'],
		htmlTemplateEngine: 'njk',
		passthroughFileCopy: true,
		dir: {
			input: 'src',
			// better not use "public" as the name of the output folder (see above...)
			output: '_site',
			includes: '_includes',
			layouts: 'layouts',
			data: '_data'
		}
	}
}
