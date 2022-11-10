import styled from 'styled-components';
import { space, color } from '../../styles/helper';

const StyledProjects = styled.div`
    
    .pdp__header{
        .header__image{
            object-fit: cover;
            position: absolute;
            width: 100%;
            aspect-ratio:3/1; 
            z-index:-1;
        }
        .header__content{
            display:flex;
            position:relative;


        }
        .header__title{
        font-size:2.5rem;
        font-weight:bold;
        
    }
    }
    
`;


export default StyledProjects;