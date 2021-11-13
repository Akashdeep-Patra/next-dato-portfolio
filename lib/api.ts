import { datoCmsRequest } from './datocms';
import { RESPONSIVE_IMAGE_FRAGMENT, META_TAGS_FRAGMENT } from './fragment';
export async function getAllPagesSlugs() {
  const query = `
      {
        allPages(first: "100") {
          id
          slug
          title
        }
      }
    `;
  const result = await datoCmsRequest(query);
  return result.allPages as { id: string; slug: string; title: string }[];
}

export async function getSiteMetaTags() {
  const query = `
      query AppQuery {
        site: _site {
          favicon: faviconMetaTags {
            ${META_TAGS_FRAGMENT}
          }
        }
      }
    `;
  const result: { site: { favicon: any } } = await datoCmsRequest(query);
  return result.site;
}

export async function getDynamicPageBySlug(slug: string) {
  const query = `
      query PagesBySlug($slug: String) {
        allPages(filter: {slug: {eq: $slug}}) {
          id
          slug
          seo: _seoMetaTags {
            ${META_TAGS_FRAGMENT}
          }
          debugModules
          title
        }
      }
    `;
  const result: {
    allPages: {
      id: string;
      slug: string;
      seo: any;
      debugModules: boolean;
      title: string;
    }[];
  } = await datoCmsRequest(query, { slug });

  const pageData = result.allPages[0];

  //   // eslint-disable-next-line no-restricted-syntax
  //   for (const modularComponent of pageData.modules) {
  //     // Format page Text module
  //     if (modularComponent.type === 'module_collapsable_list') {
  //       const tagsList = [];
  //       let addOthers;
  //       // Create a list of all the tags
  //       // eslint-disable-next-line no-restricted-syntax
  //       for (const item of modularComponent.collapsableItems) {
  //         // eslint-disable-next-line no-restricted-syntax
  //         for (const tag of item.tags) {
  //           if (
  //             tag.name === 'Other' ||
  //             tag.name === 'Others' ||
  //             tag.name === 'other' ||
  //             tag.name === 'others'
  //           ) {
  //             addOthers = tag.name;
  //           } else if (tag.name !== 'hidden' && tag.name !== 'Hidden')
  //             tagsList.push(tag.name);
  //         }
  //       }
  //       if (tagsList.length > 0) {
  //         modularComponent.tagsList = [...new Set(tagsList)].sort();
  //         if (addOthers) {
  //           modularComponent.tagsList.push(addOthers);
  //         }
  //         modularComponent.tagsList.unshift('All');
  //       }
  //     }
  //   }

  return pageData;
}
