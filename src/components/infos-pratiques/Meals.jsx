import React from 'react';
import styled from 'styled-components';

import { device } from '../../utils/media';
import Section from '../Section';

const SectionMeals = styled(Section)`
  table {
    width: 100%;

    margin-bottom: 48px;
    text-align: center;
    th {
      text-align: center;
    }
    strong {
      font-weight: 100;
      font-style: italic;
      color: rgba(60, 50, 40, 0.6);
    }
  }

  p {
    text-align: center;
  }

  ul {
    width: 100%;
    li {
      display: flex;
      strong:first-child {
        position: relative;
        flex-grow: 2;
        &::after {
          position: absolute;
          content: ' ';
          height: 0%;
          border-top: 1px dotted #aaa;
          left: 8px;
          right: 0;
          top: 50%;
        }
      }
      strong:nth-child(2) {
        width: 64px;
        text-align: center;
      }
    }
    li:nth-child(8) {
      font-weight: bold;
    }
  }
`;

const Meals = ({ id, htmlContent }) => (
  <SectionMeals id={id} dangerouslySetInnerHTML={{ __html: htmlContent }} />
);

export default Meals;
