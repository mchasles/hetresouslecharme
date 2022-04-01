import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Page from '../components/Page';
import Button from '../components/Button';
import Section from '../components/Section';
import { getHtmlData } from '../utils/data';

const BookButton = styled(Button)`
  margin: -16px auto 24px auto;
`;

const SectionChequesCadeaux = styled(Section)`
  .gatsby-resp-image-wrapper {
    border: 8px solid white;
    transform: scale(0.8) rotate(-4deg) translateX(-4%);
    box-shadow: 1px 1px 4px #BBB;
  }
`;

export default function chequesCadeauxPage({ data }) {
  const html = getHtmlData(data);

  return (
    <Page>
      <SectionChequesCadeaux
        id="contact"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <BookButton
        href="https://reservation.v2.ke-booking.com/gc/property?pid=P9892150&krc=98defd6ee70dfb1dea416cecdf391f58&tok=Pbb531d60f3d422680253fea8&lang=fr"
        target="_blank"
        rel="noopener noreferrer"
      >
        Commander
      </BookButton>
    </Page>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/cheques-cadeaux/" } } }
    ) {
      ...HtmlContent
    }
  }
`;
