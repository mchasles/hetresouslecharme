import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Cabin from '../Cabin';
import { getCabinImages } from '../../utils/data';
import { device } from '../../utils/media';

const CustomCabin = styled(Cabin)`
  h1 {
    .gatsby-resp-image-wrapper {
      right: -16vw;
      @media ${device.mobileL} {
        right: -5vw;
      }
    }
  }
`;

const DesChesnaies = ({ htmlContent }) => {
  const data = useStaticQuery(query);
  const { img, logo, photos } = getCabinImages(data);

  return (
    <CustomCabin
      id="des-chesnaies"
      title="Des Chesnaies"
      reverse
      html={htmlContent}
      img={img}
      logo={logo}
      photos={photos}
    />
  );
};

export default DesChesnaies;

const query = graphql`
  query {
    img: file(relativePath: { eq: "images/nos-cabanes/des_chesnaies.jpg" }) {
      ...CabinImage
    }
    logo: file(
      relativePath: { eq: "images/nos-cabanes/logo-des_chesnaies.jpg" }
    ) {
      ...CabinLogo
    }
    photos: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)/" }
        absolutePath: { regex: "/images/nos-cabanes/photos/des-chesnaies/" }
      }
    ) {
      ...CabinPhotos
    }
  }
`;
