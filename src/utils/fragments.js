import { graphql } from 'gatsby';

export const htmlMarkdownRemark = graphql`
  fragment HtmlContent on MarkdownRemarkConnection {
    edges {
      node {
        html
      }
    }
  }
`;

export const cabinContentFragment = graphql`
  fragment CabinContent on MarkdownRemarkConnection {
    edges {
      node {
        headings {
          value
          depth
        }
        html
      }
    }
  }
`;

export const cabinImageFragment = graphql`
  fragment CabinImage on File {
    childImageSharp {
      gatsbyImageData(quality: 70, layout: FULL_WIDTH)
    }
  }
`;

export const cabinLogoFragment = graphql`
  fragment CabinLogo on File {
    childImageSharp {
      gatsbyImageData(width: 360, layout: CONSTRAINED)
    }
  }
`;

export const cabinPhotosFragment = graphql`
  fragment CabinPhotos on FileConnection {
    edges {
      node {
        name
        photo: childImageSharp {
          gatsbyImageData(quality: 70, layout: FULL_WIDTH)
        }
        thumb: childImageSharp {
          gatsbyImageData(quality: 70, width: 160, layout: CONSTRAINED)
        }
      }
    }
  }
`;
