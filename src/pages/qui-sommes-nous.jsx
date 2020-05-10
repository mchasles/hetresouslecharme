import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { getHtml } from '../utils/data';

import Page from '../components/Page';
import PageHeader from '../components/PageHeader';
import Introducing from '../components/qui-sommes-nous/Introducing';
import Philosophy from '../components/qui-sommes-nous/Philosophy';
import Medias from '../components/qui-sommes-nous/Medias';

const Text = styled.span`
  margin-left: 30%;
  margin-bottom: -8%;
`;

export default ({ data }) => {
  const { introducing, philosophy } = data;

  return (
    <Page bgImgs={false}>
      <PageHeader page="intro">
        <Text>Qui</Text> Sommes Nous ?
      </PageHeader>
      <Introducing id="qui-sommes-nous" htmlContent={getHtml(introducing)} />
      <Philosophy
        id="philosophie-des-cabanes"
        htmlContent={getHtml(philosophy)}
      />
      <Medias id="on-parle-de-nous" />
    </Page>
  );
};

export const query = graphql`
  query {
    introducing: allMarkdownRemark(
      filter: {
        fields: { slug: { eq: "/data/qui-sommes-nous/presentation/" } }
      }
    ) {
      ...HtmlContent
    }
    philosophy: allMarkdownRemark(
      filter: {
        fields: {
          slug: { eq: "/data/qui-sommes-nous/philosophie-des-cabanes/" }
        }
      }
    ) {
      ...HtmlContent
    }
  }
`;
