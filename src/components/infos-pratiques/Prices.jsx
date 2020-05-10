import React from 'react';
import styled from 'styled-components';

import Section from '../Section';

const Wrapper = styled(Section)`
  th + th,
  td + td {
    text-align: center;
  }
`;

const Prices = ({ id, htmlContent }) => (
  <Wrapper id={id} dangerouslySetInnerHTML={{ __html: htmlContent }} />
);

export default Prices;
