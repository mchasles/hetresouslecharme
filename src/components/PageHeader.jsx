import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import { GatsbyImage } from 'gatsby-plugin-image';

const Wrapper = styled.div`
  position: relative;
`;

const Title = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: rgb(255, 255, 255);
  font-family: 'Shopie';
  font-size: calc(3vw + 3vh + 0.8vmin);
  font-weight: 100;
  white-space: nowrap;
  letter-spacing: 2px;
  text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.6);

  span {
    display: block;
    font-family: Arial, Helvetica, sans-serif;
    font-size: calc(1.6vw + 1.2vh + 0.6vmin);
    font-weight: 100;
    letter-spacing: inherit;
  }
`;

const PageHeader = ({ children, page }) => {
  const data = useStaticQuery(query);
  const panoramicImg =
    data[page === 'infos' ? 'panoramicImgInfos' : 'panoramicImgIntro']
      .childImageSharp.gatsbyImageData;

  return (
    <Wrapper>
      <GatsbyImage image={panoramicImg} alt="Vue panoramique sur la Dordogne" />
      <Title>{children}</Title>
    </Wrapper>
  );
};

export const query = graphql`
  {
    panoramicImgInfos: file(
      relativePath: { eq: "images/panoramic-infos.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    panoramicImgIntro: file(
      relativePath: { eq: "images/panoramic-intro.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

export default PageHeader;
