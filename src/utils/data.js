export const getCabinImages = data => ({
  img: data.img.childImageSharp.gatsbyImageData,
  logo: data.logo.childImageSharp.gatsbyImageData,
  photos: data.photos.edges,
});

export const getHtmlData = data => data.allMarkdownRemark.edges[0]?.node.html;

export const getHtml = data => data.edges[0].node.html;
