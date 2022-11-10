import styled from 'styled-components';
import { space, color } from '../../styles/helper';

const StyledProjectList = styled.div`
    
    .projects--preview{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 100vh;
        background: white;
        

        
    }
    .project--preview{
        max-width: 300px;
        img{
            width: 100%;
        }

    }
`;


export default StyledProjectList;