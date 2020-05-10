import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { getHtml } from '../utils/data';

import Page from '../components/Page';
import PageHeader from '../components/PageHeader';
import ToKnow from '../components/infos-pratiques/ToKnow';
import Prices from '../components/infos-pratiques/Prices';
import Meals from '../components/infos-pratiques/Meals';
import Extras from '../components/infos-pratiques/Extras';
import Activities from '../components/infos-pratiques/Activities';

const Text = styled.span`
  margin-left: 22%;
  margin-bottom: -12%;
`;

export default ({ data }) => (
  <Page bgImgs={false}>
    <PageHeader page="infos">
      <Text>Infos</Text> Pratiques
    </PageHeader>
    <ToKnow
      id="a-savoir-avant-votre-sejour"
      htmlContent={getHtml(data.toKnowData)}
    />
    <Prices id="tarifs" htmlContent={getHtml(data.pricesData)} />
    <Meals id="repas" htmlContent={getHtml(data.mealData)} />
    <Extras id="supplements" htmlContent={getHtml(data.extrasData)} />
    <Activities id="activites" htmlContent={getHtml(data.activitiesData)} />
  </Page>
);

export const query = graphql`
  query {
    toKnowData: allMarkdownRemark(
      filter: {
        fields: {
          slug: { eq: "/data/infos-pratiques/a-savoir-avant-votre-sejour/" }
        }
      }
    ) {
      ...HtmlContent
    }
    pricesData: allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/infos-pratiques/tarifs/" } } }
    ) {
      ...HtmlContent
    }
    mealData: allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/infos-pratiques/repas/" } } }
    ) {
      ...HtmlContent
    }
    extrasData: allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/infos-pratiques/supplements/" } } }
    ) {
      ...HtmlContent
    }
    activitiesData: allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/infos-pratiques/activites/" } } }
    ) {
      ...HtmlContent
    }
  }
`;
