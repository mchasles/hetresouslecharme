import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Cabin from '../Cabin';
import { getCabinImages } from '../../utils/data';

const EpiceaSouhait = ({ htmlContent }) => {
  const data = useStaticQuery(query);
  const { img, logo, photos } = getCabinImages(data);

  return (
    <Cabin
      id="epicea-souhait"
      title="Epicéa Souhait"
      html={htmlContent}
      img={img}
      logo={logo}
      photos={photos}
    />
  );
};

export default EpiceaSouhait;

const query = graphql`
  query {
    img: file(relativePath: { eq: "images/nos-cabanes/epicea_souhait.jpg" }) {
      ...CabinImage
    }
    logo: file(
      relativePath: { eq: "images/nos-cabanes/logo-epicea_souhait.jpg" }
    ) {
      ...CabinLogo
    }
    photos: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)/" }
        absolutePath: { regex: "/images/nos-cabanes/photos/epicea-souhait/" }
      }
    ) {
      ...CabinPhotos
    }
  }
`;
