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

export default function infosPratiquesPage({ data }) {
  const { toKnow, prices, meals, extras, activities } = data;

  return (
    <Page bgImgs={false}>
      <PageHeader page="infos">
        <Text>Infos</Text> Pratiques
      </PageHeader>
      <ToKnow id="a-savoir-avant-votre-sejour" htmlContent={getHtml(toKnow)} />
      <Prices id="tarifs" htmlContent={getHtml(prices)} />
      <Meals id="repas" htmlContent={getHtml(meals)} />
      <Extras id="supplements" htmlContent={getHtml(extras)} />
      <Activities id="activites" htmlContent={getHtml(activities)} />
    </Page>
  );
}

export const query = graphql`
  query {
    toKnow: allMarkdownRemark(
      filter: {
        fields: {
          slug: { eq: "/data/infos-pratiques/a-savoir-avant-votre-sejour/" }
        }
      }
    ) {
      ...HtmlContent
    }
    prices: allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/infos-pratiques/tarifs/" } } }
    ) {
      ...HtmlContent
    }
    meals: allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/infos-pratiques/repas/" } } }
    ) {
      ...HtmlContent
    }
    extras: allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/infos-pratiques/supplements/" } } }
    ) {
      ...HtmlContent
    }
    activities: allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/infos-pratiques/activites/" } } }
    ) {
      ...HtmlContent
    }
  }
`;
