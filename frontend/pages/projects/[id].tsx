import apolloClient from '../../lib/apollo';

import articlesQuery from '../../graphql/articles.gql';
import projectQuery from '../../graphql/project.gql';
import { GeneralQuery, ProjectsQuery } from '../../graphql/types';

import Default from '../../templates/default';

import StartScreen from '../../components/startScreen/startScreen';
import ProjectCarousel from '../../components/projectCarousel/projectCarousel';
import ProjectList from '../../components/projectList/projectList';
import ContactFormTeaser from '../../components/contactFormTeaser/contactFormTeaser';

import { useRouter } from 'next/router'

import StyledProjects from "./projects.style";

const Index = ({ project }: any) => {
  const router = useRouter();

  const { sections } = project;

  console.log(project)
  return (
    <StyledProjects>
      <Default title="Jonasleonhard.de" description="Jonas Leonhard Index Page">
        <div className="pdp">
          <div className="pdp__header">
            <div className="header__content">
              <h1 className="header__title"><a href={`/projects/${project.id}`}>{project.title}</a></h1>
              <p>{project.id}</p>
            </div>
            <img src={process.env.NEXT_PUBLIC_CLIENT_APOLLO_CMS_URL + project.gallery[0].url} alt={project.gallery[0].alt} className="header__image img--fluid" />
          </div>
          <div className="pdp__sections">
            {sections.map((s: any) =>
              <div>
                <div className="section__content">
                  <h1 className="section__title"><a href={`/projects/${s.id}`}>{s.title}</a></h1>
                  <p>{s.content}</p>
                </div>
                <img src={process.env.NEXT_PUBLIC_CLIENT_APOLLO_CMS_URL + s.gallery[0].url} alt={s.gallery[0].alt} className="section__image img--fluid" />
              </div>
            )}

          </div>
        </div>
      </Default>
    </StyledProjects>
  )
}


Index.getInitialProps = async (router: any) => {
  const { data } = await apolloClient.query({
    query: projectQuery,
    variables: { id: `${router.query.id}` }
  });
  return data;
};


export default Index;