import apolloClient from "../../lib/apollo";

import projectsQuery from '../../graphql/projects.gql';
import { ProjectsQuery } from '../../graphql/types';

import Default from '../../templates/default';
import ProjectList from "../../components/projectList/projectList";

const Projects = ({ projects }) => {

  return (
    <>
      <ProjectList projects={projects} />
      <Default title="Jonasleonhard.de" description="Jonas Leonhard Blog">
        <>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
            Blog currently under construction...
          </div>
        </>
      </Default>
    </>
  )
}


Projects.getInitialProps = async () => {

  const { data } = await apolloClient.query({
    query: projectsQuery,
  });
  return data;

};

export default Projects;
