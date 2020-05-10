import React from 'react';
import styled from 'styled-components';

import { device } from '../../utils/media';
import Section from '../Section';

const Wrapper = styled(Section)`
  table {
    margin-right: 0 0 16px 0;

    & + table {
      margin-top: 16px;
    }
    th,
    td {
      text-align: center;
    }

    @media ${device.tablet} {
      float: left;

      width: 47%;
      margin: 0 0 32px auto;

      & + table {
        margin: 0 auto 24px 6%;
        & + p + h3 + table {
          width: 56%;
          & + table {
            width: 38%;
          }
        }
      }
    }
  }

  h3 {
    clear: both;
    text-align: center;
    margin: 12px 0;
  }

  p {
    @media ${device.tablet} {
      clear: both;
    }
  }
`;

const Meal = ({ id, htmlContent }) => (
  <Wrapper id={id} dangerouslySetInnerHTML={{ __html: htmlContent }} />
);

export default Meal;
