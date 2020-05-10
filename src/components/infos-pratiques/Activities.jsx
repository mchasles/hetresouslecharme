import React from 'react';
import styled from 'styled-components';

import Section from '../Section';

const SectionActivities = styled(Section)`
  padding-bottom: 64px;

  ul {
    padding-left: 16px;
  }

  li {
    list-style-type: disc;
    list-style-position: outside;
  }
`;

const Activities = ({ id, htmlContent }) => (
  <SectionActivities
    id={id}
    dangerouslySetInnerHTML={{ __html: htmlContent }}
  />
);

export default Activities;
