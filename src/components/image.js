import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes
                }
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}

    render={(data) => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) { return null; }

      // const imageSizes = image.node.childImageSharp.sizes;
      const fluid = image.node.childImageSharp.fluid;
      return (
        <Img
          alt={props.alt}
          fluid={fluid}
          // sizes={imageSizes}
          style={props.style}
        />
      );
    }}
  />
)

