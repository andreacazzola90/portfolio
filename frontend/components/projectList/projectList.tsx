import apolloClient from "../../lib/apollo";
import articlesQuery from '../../graphql/projects.gql';
import { ArticlesQuery, ProjectsQuery } from '../../graphql/types';
import StyledProjectList from './projectList.style';
import { useQuery } from "@apollo/client/react/hooks/useQuery";

type ProjectListProps = [{}];

const ProjectList = (items: any) => {



    return (
        <StyledProjectList>
            <div>
                {items.items.data.projects.map(({ id, title }) => (
                    <div key={id}>Coffee type {id} in a {title} size.</div>
                ))}
            </div>
        </StyledProjectList>
    )
}

export default ProjectList