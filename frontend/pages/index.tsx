import apolloClient from "../lib/apollo";

import articlesQuery from '../graphql/articles.gql';
import projectsQuery from '../graphql/projects.gql';
import { GeneralQuery, ProjectsQuery } from '../graphql/types';

import Default from '../templates/default';

import StartScreen from '../components/startScreen/startScreen';
import ProjectCarousel from '../components/projectCarousel/projectCarousel';
import ProjectList from '../components/projectList/projectList';
import ContactFormTeaser from '../components/contactFormTeaser/contactFormTeaser';

const Index = ({ data }: { data: GeneralQuery }) => {
  return (
    <Default title="Jonasleonhard.de" description="Jonas Leonhard Index Page">
      <>
        <StartScreen />
        {JSON.stringify(data)}
        <ProjectCarousel />
        {JSON.stringify(data.projects)}
        {console.log(data.projects)}
        <ProjectList items={data.projects} />
        <ContactFormTeaser />
      </>
    </Default>
  )
}


Index.getInitialProps = async () => {
  const articles = await apolloClient.query({
    query: articlesQuery
  })
  const projects = await apolloClient.query({
    query: projectsQuery
  })
  return {
    data: {
      articles: articles,
      projects: projects
    }
  };
};


export default Index;