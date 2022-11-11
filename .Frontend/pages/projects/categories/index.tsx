import apolloClient from "../../../lib/apollo";

import Categories from '../../../graphql/projects/categories.gql';

import Default from '../../../templates/default';
import ProjectList from "../../../components/projectList/projectList";

const Projects = (data) => {

  return (
    <>
      {JSON.stringify(data)}
    </>
  )
}


Projects.getInitialProps = async () => {

  const { data } = await apolloClient.query({
    query: Categories,
  });
  return data;

};

export default Projects;
