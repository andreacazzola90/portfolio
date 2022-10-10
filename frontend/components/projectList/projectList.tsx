import apolloClient from "../../lib/apollo";
import articlesQuery from '../../graphql/projects.gql';
import { ArticlesQuery, ProjectsQuery } from '../../graphql/types';
import StyledProjectList from './projectList.style';
import { useQuery } from "@apollo/client/react/hooks/useQuery";

type ProjectListProps = [{}];

const ProjectList = (items: any) => {



    return (
        <StyledProjectList>
            <div className="projects--preview">
                {items.items.data.projects.map((i) => (
                    <div key={i.id} className="project--preview text-gray-500 font-normal mt-1">

                        <p>{i.title}</p>
                        <p>{i.id}</p>
                        <p>{JSON.stringify(i.gallery)}</p>
                        {i.gallery.map((img) =>
                            <img src={process.env.NEXT_PUBLIC_CLIENT_APOLLO_CMS_URL + img.url} alt={img.alt} className="img--fluid" />
                        )}
                    </div>
                ))}
            </div>
        </StyledProjectList>
    )
}

export default ProjectList