import React from 'react';
import styled from 'styled-components';

import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LaunchIcon from '@material-ui/icons/Launch';
const Icon = styled.div`
  /* height: 32px; */
  /* width: 32px; */
  color: inherit;

  height: ${({ height }) => height || '32px'};
  width: auto;
  margin: ${({ margin }) => margin || '8px 16px'};

  > * {
    height: ${({ height }) => height || '32px'};
    width: auto;
  }
`;

const FormattedIcon = ({ icon, ...props }) => {
  return (
    <Icon {...props}>
      {icon === 'github' && <GitHubIcon />}
      {icon === 'instagram' && <InstagramIcon />}
      {icon === 'linkedin' && <LinkedInIcon />}
      {icon === 'twitter' && <TwitterIcon />}
      {icon === 'external-link' && <LaunchIcon />}
      {icon === 'mailto' && <MailIcon />}
    </Icon>
  );
};

export default FormattedIcon;
