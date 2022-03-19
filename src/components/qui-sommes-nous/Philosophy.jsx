import React from 'react';
import styled from 'styled-components';

import { device } from '../../utils/media';

import Section from '../Section';

const Wrapper = styled(Section)`
  display: flex;
  flex-wrap: wrap;

  h1,
  p {
    flex-basis: 100%;
  }
  ul {
    flex-basis: 100%;
    box-sizing: border-box;
    padding-left: 16px;
    @media ${device.mobileL} {
      flex-basis: 56%;
      margin-right: 4%;
    }
    & + p {
    flex-basis: 100%;
    @media ${device.mobileL} {
      flex-basis: 40%;
    }
  }
  }

  li {
    list-style-type: disc;
    list-style-position: outside;
  }
`;

const Philosophy = ({ id, htmlContent }) => (
  <Wrapper id={id} dangerouslySetInnerHTML={{ __html: htmlContent }} />
);

export default Philosophy;
