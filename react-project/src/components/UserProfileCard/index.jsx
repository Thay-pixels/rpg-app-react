import React from 'react';
import { FaUserCircle, FaEnvelope, FaDiceD20, FaStar } from 'react-icons/fa';

import {
  Card,
  ProfileHeader,
  ProfilePicture,
  ProfileInfo,
  ProfileName,
  ProfileUsername,
  InfoList,
  InfoItem,
} from './style';

function UserProfileCard({ data }) {
  return (
    <Card>
      <ProfileHeader>

        <ProfilePicture src={data.imageUrl} alt={`Foto de ${data.name}`} />
        <ProfileInfo>
          <ProfileName>{data.name}</ProfileName>
          <ProfileUsername>@{data.username}</ProfileUsername>
        </ProfileInfo>
      </ProfileHeader>
      <InfoList>

        <InfoItem>
          <FaEnvelope />
          <span>{data.email}</span>
        </InfoItem>

        {data.sessoesCriadas !== undefined && (
          <InfoItem>
            <FaDiceD20 />
            <span>
              <strong>{data.sessoesCriadas}</strong> sessões criadas
            </span>
          </InfoItem>
        )}

        {data.exp !== undefined && (
          <InfoItem>
            <FaStar />
            <span>
              <strong>{data.exp}</strong> EXP (Pontos de Experiência)
            </span>
          </InfoItem>
        )}
      </InfoList>

    </Card>

  );
}

export default UserProfileCard;