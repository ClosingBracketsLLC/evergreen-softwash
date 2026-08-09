import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '@config';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: `${site.name} Journal`,
    description:
      'Practical guides on soft washing, pressure washing, and detailing from the Evergreen Softwash crew.',
    site: context.site,
    items: posts
      .sort((a, b) => b.data.publishDate - a.data.publishDate)
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.publishDate,
        link: `/blog/${post.id}/`,
      })),
  });
}
