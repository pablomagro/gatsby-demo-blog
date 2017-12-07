import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
// import '../css/blog-post.css'; // make it pretty!

// export default function Template({
//   data, // this prop will be injected by the GraphQL query we'll write in a bit
// }) {
const Template = ({data, location, pathContext}) => {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = post
  const { title, date }  = frontmatter
  const { next, prev } = pathContext

  return (
    <div className="blog-post-container">
      <Helmet title={`${title} - My Blog`} />

      <div className="blog-post">
        <h1>{title}</h1>
        <h1>{date}</h1>

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <p>
          {prev && (
            <Link to={prev.frontmatter.path}>
              Previous: {prev.frontmatter.title}
            </Link>
          )}
        </p>
        <p>
          {next && (
            <Link to={next.frontmatter.path}>
              Next: {next.frontmatter.title}
            </Link>
          )}
        </p>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
              tags
            }
        }
    }
    `;

export default Template