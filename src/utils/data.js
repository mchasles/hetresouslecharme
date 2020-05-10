export const getCabinImages = data => ({
  img: data.img.childImageSharp.fluid,
  logo: data.logo.childImageSharp.fluid,
  photos: data.photos.edges,
});

export const getHtmlData = data => data.allMarkdownRemark.edges[0]?.node.html;

export const getHtml = data => data.edges[0].node.html;
