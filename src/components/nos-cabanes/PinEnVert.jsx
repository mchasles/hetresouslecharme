import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Cabin from '../Cabin';
import { getCabinImages } from '../../utils/data';

const PinEnVert = ({ htmlContent }) => {
  const data = useStaticQuery(query);
  const { img, logo, photos } = getCabinImages(data);

  return (
    <Cabin
      id="pin-en-vert"
      title="Pin en vert"
      reverse
      html={htmlContent}
      img={img}
      logo={logo}
      photos={photos}
    />
  );
};

export default PinEnVert;

const query = graphql`
  query {
    img: file(relativePath: { eq: "images/nos-cabanes/pin_en_vert.jpg" }) {
      ...CabinImage
    }
    logo: file(
      relativePath: { eq: "images/nos-cabanes/logo-pin_en_vert.jpg" }
    ) {
      ...CabinLogo
    }
    photos: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)/" }
        absolutePath: { regex: "/images/nos-cabanes/photos/pin-en-vert/" }
      }
    ) {
      ...CabinPhotos
    }
  }
`;
