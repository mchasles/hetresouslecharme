import React from 'react';
import styled from 'styled-components';

import Section from '../Section';

const SectionExtras = styled(Section)`
  .gatsby-resp-image-wrapper {
    float: left;
    width: 34%;
    margin: 0 24px 24px 0 !important;
  }

  p {
    clear: both;
  }

  table {
    margin-top: 16px;
  }
`;

const Extras = ({ id, htmlContent }) => (
  <SectionExtras id={id} dangerouslySetInnerHTML={{ __html: htmlContent }} />
);

export default Extras;
