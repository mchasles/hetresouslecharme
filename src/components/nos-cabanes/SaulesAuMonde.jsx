import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Cabin from '../Cabin';
import { getCabinImages } from '../../utils/data';

const SaulesAuMonde = ({ htmlContent }) => {
  const data = useStaticQuery(query);
  const { img, logo, photos } = getCabinImages(data);

  return (
    <Cabin
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
