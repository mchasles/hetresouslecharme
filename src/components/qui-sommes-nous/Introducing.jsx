import React from 'react';
import styled from 'styled-components';

import { device } from '../../utils/media';
import Section from '../Section';

const SectionIntroducing = styled(Section)`
  @media ${device.laptop} {
    & > h1 + p {
      position: absolute;
      left: 0;
      width: 38%;
      margin: 0;
    }

    p {
      margin-left: 42%;
    }
  }
`;

const Introducing = ({ id, htmlContent }) => (
  <SectionIntroducing
    id={id}
    dangerouslySetInnerHTML={{ __html: htmlContent }}
  />
);

export default Introducing;
