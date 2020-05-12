import React from 'react';
import styled from 'styled-components';

import { device } from '../../utils/media';
import Section from '../Section';

const SectionExtras = styled(Section)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  h1,
  p {
    width: 100%;
  }

  p:nth-child(2) {
    order: 1;
    padding: 0 48px;
    margin: 0 0 8px 0;
  }

  p:nth-child(3) {
    box-sizing: border-box;
    order: 2;
    margin: 0 0 56px 0;
  }

  p:nth-child(4) {
    order: 4;
    margin: 0;
  }

  p:nth-child(5) {
    order: 3;
    margin: 0 0 8px 0;
  }

  @media ${device.mobileL} {
    p:nth-child(2) {
      width: 34%;
      padding: 0;
    }

    p:nth-child(3) {
      width: 66%;
      padding: 0 24px;
      box-sizing: border-box;
    }

    p:nth-child(4) {
      order: 3;
      width: 58%;
    }

    p:nth-child(5) {
      order: 4;
      width: 42%;
    }
  }
`;

const Extras = ({ id, htmlContent }) => (
  <SectionExtras id={id} dangerouslySetInnerHTML={{ __html: htmlContent }} />
);

export default Extras;
