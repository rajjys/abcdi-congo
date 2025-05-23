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

// Fetch about information
// This function fetches about information from the GraphQL API
// It uses the GraphQL query defined in GET_ABOUT
export const fetchAbout = async () => {
  const {aboutItems} = await graphcms.request(GET_ABOUT);
  return aboutItems[0]; // Return the about items
}

// Fetch all team members
// This function fetches all team members from the GraphQL API
// It uses the GraphQL query defined in GET_TEAM_MEMBERS
export const fetchTeamMembers = async () => {
  const {memberItems} = await graphcms.request(GET_TEAM_MEMBERS);
  return memberItems; // Return the team members
}
// Fetch a single team member by slug
// This function fetches a single team member based on the provided slug
// It uses the GraphQL query defined in GET_TEAM_MEMBER
export const fetchTeamMember = async (slug) => {
  const {teamMembers} = await graphcms.request(GET_TEAM_MEMBER, { slug });
  return teamMembers[0]; // Return the first matching team member
}

// GraphQL queries
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
export const GET_ABOUT = `
query ProjectQuery {
  aboutItems {
    about
    mission
    objectives
    profile {
      url(transformation: {image: {resize: {height: 500, width: 900}}})
    }
  }
}
`
export const GET_TEAM_MEMBERS = `
query TeamQuery {
  memberItems {
    name
    profile {
      url(transformation: {image: {resize: {height: 380, width: 700}}})
    }
    slug
    role
  }
}
`
export const GET_TEAM_MEMBER = `
query TeamMember($slug: String!) {
  teamMembers: memberItems(where: { slug: $slug }) {
    description {
      raw
    }
    email
    name
    phone
    profile {
      url(transformation: {image: {resize: {height: 380, width: 700}}})
    }
    slug
    social
    role
    id
  }
}
`