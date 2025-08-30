import styled from 'styled-components';

export const Card = styled.div`
    background-color: #a38e61ff;
    color: white;
    border-radius: 8px;
    padding: 24px;
    /*max-width: 500px;*/
    min-width: 96%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    /*margin-bottom: 30px;/*

    @media (max-width: 768px) {
    padding: 1rem;
  }

`;

export const ProfileHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
    flex-direction: column;

`;

export const ProfilePicture = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 0;
    margin-bottom: 15px;
    flex-shrink: 0; 

`;

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const ProfileName = styled.h2`
    margin: 0;
    font-size: 1.8rem;
    align-content: center;

    @media (max-width: 768px) {
    font-size: 1.5rem;
  }

`;

export const ProfileUsername = styled.p`
    margin: 0;
    color: black;
    font-size: 1.1rem;
    align-content: center;

    @media (max-width: 768px) {
    font-size: 1rem;
  }

`;

export const InfoList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

`;

export const InfoItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    font-size: 1rem;
    color: black;

  svg {
    margin-right: 12px;
    color: black;
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  span {
    word-break: break-all;
  }

`;