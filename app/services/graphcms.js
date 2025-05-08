import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.GRAPH_CMS_ENDPOINT;

export const graphcms = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.GRAPH_CMS_API_KEY}`,
  },
});

export const GET_NEWS_ITEMS = `
    query NewsItem {
    newsItems(orderBy: publishedAt_ASC) {
        author
        content
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