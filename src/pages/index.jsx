import React from 'react';
import { graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

import { getHtml } from '../utils/data';

import Page from '../components/Page';
import BookButton from '../components/BookButton';
import EpiceaSouhait from '../components/nos-cabanes/EpiceaSouhait';
import PinEnVert from '../components/nos-cabanes/PinEnVert';
import HouxBlond from '../components/nos-cabanes/HouxBlond';
import DesChesnaies from '../components/nos-cabanes/DesChesnaies';
import SaulesAuMonde from '../components/nos-cabanes/SaulesAuMonde';
import { ModalProvider } from '../components/Modal';

const Section = styled.section`
  position: relative;
  height: 100vh;
`;

const BgImg = styled(GatsbyImage)`
  height: 100%;
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 300px;
  overflow: hidden;
`;

const BookButtonStyled = styled(BookButton)`
  margin-top: 24px;
`;

const SectionPanoramic = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;

  ${BookButtonStyled} {
    margin: 32px auto 32px;
  }
`;

const headingStyles = css`
  display: flex;
  align-items: center;
  max-width: 60%;
  margin: 0 auto;
  color: rgb(42, 38, 27);
  font-weight: 100;
  font-style: italic;
  text-align: center;
`;

const Heading1 = styled.h1`
  ${headingStyles}
  margin: 36px auto;
  font-size: 18px;
`;

const Heading2 = styled.h2`
  ${headingStyles}
  font-size: 14px;
  line-height: 24px;
  flex-grow: 1;
`;

export default function homePage({ data }) {
  const bgImg = data.bgImg.childImageSharp.gatsbyImageData;
  const logoImg = data.logoImg.childImageSharp.gatsbyImageData;
  const panoramicImg = data.panoramicImg.childImageSharp.gatsbyImageData;
  const { epiceaSouhait, pinEnVert, houxBlond, desChesnaies, saulesAuMonde } =
    data;

  const headings = data.allMarkdownRemark.edges[0]?.node.headings.reduce(
    (acc, { depth, value }) => {
      return {
        ...acc,
        [depth]: value,
      };
    },
    {}
  );
  return (
    <ModalProvider>
      <Page bgImgs={false} marginBottom>
        <Section id="nos-cabanes">
          <LogoWrapper>
            <GatsbyImage
              image={logoImg}
              objectFit="contain"
              style={{ width: '50vw' }}
              alt="Logo Hêtre Sous le Charme"
            />
            <BookButtonStyled />
          </LogoWrapper>
          <BgImg
            alt="Hêtre Sous le Charme"
            image={bgImg}
            objectPosition="50% 100%"
          />
        </Section>
        <SectionPanoramic>
          <Heading1 dangerouslySetInnerHTML={{ __html: headings[1] }} />
          <GatsbyImage
            image={panoramicImg}
            alt="Vue panoramique sur la Dordogne"
          />
          <BookButtonStyled />
          <Heading2 dangerouslySetInnerHTML={{ __html: headings[2] }} />
        </SectionPanoramic>
        <SaulesAuMonde htmlContent={getHtml(saulesAuMonde)} />
        <EpiceaSouhait htmlContent={getHtml(epiceaSouhait)} />
        <PinEnVert htmlContent={getHtml(pinEnVert)} />
        <HouxBlond htmlContent={getHtml(houxBlond)} />
        <DesChesnaies htmlContent={getHtml(desChesnaies)} />
      </Page>
    </ModalProvider>
  );
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/panoramic/" } } }
    ) {
      edges {
        node {
          headings {
            value
            depth
          }
        }
      }
    }
    bgImg: file(relativePath: { eq: "images/home.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    logoImg: file(relativePath: { eq: "images/logo_white.png" }) {
      childImageSharp {
        gatsbyImageData(width: 300, layout: FIXED)
      }
    }
    panoramicImg: file(relativePath: { eq: "images/panoramic.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    saulesAuMonde: allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/nos-cabanes/saules-au-monde/" } } }
    ) {
      ...CabinContent
    }
    desChesnaies: allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/nos-cabanes/des-chesnaies/" } } }
    ) {
      ...CabinContent
    }
    pinEnVert: allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/nos-cabanes/pin-en-vert/" } } }
    ) {
      ...CabinContent
    }
    epiceaSouhait: allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/nos-cabanes/epicea-souhait/" } } }
    ) {
      ...CabinContent
    }
    houxBlond: allMarkdownRemark(
      filter: { fields: { slug: { eq: "/data/nos-cabanes/houx-blond/" } } }
    ) {
      ...CabinContent
    }
  }
`;
