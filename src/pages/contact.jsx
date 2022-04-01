import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Page from '../components/Page';
import Section from '../components/Section';
import { getHtmlData } from '../utils/data';
import { device } from '../utils/media';

const SectionContact = styled(Section)`
  display: flex;
  flex-wrap: wrap;

  h1 {
    width: 100%;
  }

  h1 + p {
    margin-right: 4%;
    @media ${device.mobileL} {
      width: 40%;
    }
    .gatsby-resp-image-image {
      border: 8px solid white;
      transform: rotate(-4deg) translateY(-10%);
    }
  }

  ul {
    @media ${device.mobileL} {
      width: 56%;
    }
  }

  p {
    width: 100%;
  }
`;

export default function contactPage({ data }) {
  const html = getHtmlData(data);

  return (
    <Page>
      <SectionContact id="contact" dangerouslySetInnerHTML={{ __html: html }} />
    </Page>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fields: { slug: { eq: "/data/contact/" } } }) {
      ...HtmlContent
    }
  }
`;
