import apolloClient from "../lib/apollo";

import articlesQuery from '../graphql/articles.gql';
import projectsQuery from '../graphql/projects.gql';
import { GeneralQuery, ProjectsQuery } from '../graphql/types';

import Default from '../templates/default';

import StartScreen from '../components/startScreen/startScreen';
import ProjectCarousel from '../components/projectCarousel/projectCarousel';
import ProjectList from '../components/projectList/projectList';
import ContactFormTeaser from '../components/contactFormTeaser/contactFormTeaser';

const Index = ({ projects }: any) => {
  console.log(projects)
  return (
    <Default title="Jonasleonhard.de" description="Jonas Leonhard Index Page">
      <>

        <StartScreen />
        <ProjectCarousel />
        <ProjectList projects={projects} />
        <ContactFormTeaser />
      </>
    </Default>
  )
}


Index.getInitialProps = async () => {

  const { data } = await apolloClient.query({
    query: projectsQuery
  });
  return data;

};


export default Index;