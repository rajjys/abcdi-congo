import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.GRAPH_CMS_ENDPOINT;

export const graphcms = new GraphQLClient(endpoint, {

  headers: {
    Authorization: `Bearer ${process.env.GRAPH_CMS_API_KEY}`,
  },
});

// Fetch all news items
// This function fetches all news items from the GraphQL API
export const fetchNewsItems = async () => {
  const {newsItems} = await graphcms.request(GET_NEWS_ITEMS);
  return newsItems; // Return the news items
}
// Fetch a single news item by slug
// This function fetches a single news item based on the provided slug
// It uses the GraphQL query defined in GET_NEWS_ITEM
export const fetchNewsItem = async (slug) => {
  const {newsItems} = await graphcms.request(GET_NEWS_ITEM, { slug });
  return newsItems[0]; // Return the first matching news item
};
// Fetch all projects
// This function fetches all projects from the GraphQL API
// It uses the GraphQL query defined in GET_PROJECTS
export const fetchProjectItems = async () => {
  const {projectItems} = await graphcms.request(GET_PROJECTS);
  return projectItems; // Return the projects
}
// Fetch a single project item by slug
// This function fetches a single project item based on the provided slug
// It uses the GraphQL query defined in GET_PROJECT_ITEM
export const fetchProjectItem = async (slug) => {
  const {projects} = await graphcms.request(GET_PROJECT_ITEM, { slug });
  return projects[0]; // Return the first matching project item
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
export const GET_PROJECTS = `
    query ProjectQuery {
  projectItems(orderBy: createdAt_DESC) {
    city
    date
    description {
      raw
    }
    domain
    headline
    profile {
      url(transformation: {image: {resize: {height: 380, width: 700}}})
    }
    slug
    title
  }
}
`
export const GET_PROJECT_ITEM = `
    query ProjectItem($slug: String!) {
  projects: projectItems(where: { slug: $slug }) {
    city
    date
    description {
      raw
    }
    domain
    headline
    profile {
      url(transformation: {image: {resize: {height: 380, width: 700}}})
    }
    slug
    title
  }
}
`