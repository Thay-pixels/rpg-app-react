import styled from 'styled-components';

const Subtitle = styled.p`
    font-size: 1.5rem;
    color: #d0d0d0;
    margin-bottom: 5px;
    text-align: center;
    padding-top: 5px;

    @media (max-width: 768px) {
        font-size: 14px;
        padding 0px;
        flex-direction: column;
    }
`;

export default Subtitle;