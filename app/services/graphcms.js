import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.GRAPH_CMS_ENDPOINT;

export const graphcms = new GraphQLClient(endpoint, {

  headers: {
    Authorization: `Bearer ${process.env.GRAPH_CMS_API_KEY}`,
  },
});
export const fetchNewsItem = async (slug) => {
  const {newsItems} = await graphcms.request(GET_NEWS_ITEM, { slug });
  return newsItems[0]; // Return the first matching news item
};

export const fetchNewsItems = async () => {
  const {newsItems} = await graphcms.request(GET_NEWS_ITEMS);
  return newsItems; // Return the news items
}
export const fetchProjects = async () => {
  const data = await graphcms.request(GET_PROJECTS);
  return data.projects; // Return the projects
}

export const GET_NEWS_ITEMS = `
    query NewsItem {
    newsItems(orderBy: createdAt_DESC) {
        author
        createdAt
        date
        headline
        place
        profile {
        url(transformation: {image: {resize: {height: 380, width: 700}}})
        }
        slug
        title
        }
    }`
export const GET_PROJECTS = `
    query Projects 
        { projects 
    { city date description domain headline gallery { url } profile { url } slug title } }
`
export const GET_NEWS_ITEM = `
  query NewsItem($slug: String!){
    newsItems(where: { slug: $slug }) {
      author
      description {
        raw
        }
      createdAt
      date
      headline
      place
      profile {
        url(transformation: {image: {resize: {height: 380, width: 700}}})
      }
      slug
      title
    }
  }`