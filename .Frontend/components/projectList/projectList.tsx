import apolloClient from "../../lib/apollo";
import articlesQuery from '../../graphql/projects.gql';
import { ArticlesQuery, ProjectsQuery } from '../../graphql/types';
import StyledProjectList from './projectList.style';
import { useQuery } from "@apollo/client/react/hooks/useQuery";

type ProjectListProps = [{}];

const ProjectList = ({ projects }: any) => {
    return (
        <StyledProjectList>
            <div className="projects--preview">
                {projects?.map((p, i) => (
                    <div key={i} className="project--preview text-gray-500 font-normal mt-1">
                        <h3><a href={`/projects/${p.id}`}>{p.title}</a></h3>
                        <p>{p.id}</p>
                        {p.gallery.map((img, i) =>
                            <img key={i} src={process.env.NEXT_PUBLIC_CLIENT_APOLLO_CMS_URL + img.url} alt={img.alt} className="img--fluid" />
                        )}
                    </div>
                ))}
            </div>
        </StyledProjectList>
    )
}

export default ProjectList