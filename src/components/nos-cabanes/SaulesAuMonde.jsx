import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Cabin from '../Cabin';
import { getCabinImages } from '../../utils/data';
import { device } from '../../utils/media';
import new2022 from '../../images/new_2022.png';

const CustomCabin = styled(Cabin)`
  h1 {
    .gatsby-resp-image-wrapper {
      right: -14vw;
      @media ${device.mobileL} {
        right: -5vw;
      }
    }
    &::after {
      position: absolute;
      left: 0;
      top: 60px;
      content: url(${new2022});
      width: 100px;
      height: 100px;
      @media ${device.mobileL} {
        left: -110px;
        top: -10px;
      }
    }
  }
`;

const SaulesAuMonde = ({ htmlContent }) => {
  const data = useStaticQuery(query);
  const { img, logo, photos } = getCabinImages(data);

  return (
    <CustomCabin
      id="saules-au-monde"
      title="Saules au monde"
      reverse
      html={htmlContent}
      img={img}
      logo={logo}
      photos={photos}
    />
  );
};

export default SaulesAuMonde;

const query = graphql`
  query {
    img: file(relativePath: { eq: "images/nos-cabanes/saules_au_monde.jpg" }) {
      ...CabinImage
    }
    logo: file(
      relativePath: { eq: "images/nos-cabanes/logo-saules_au_monde.jpg" }
    ) {
      ...CabinLogo
    }
    photos: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)/" }
        absolutePath: { regex: "/images/nos-cabanes/photos/saules-au-monde/" }
      }
    ) {
      ...CabinPhotos
    }
  }
`;
