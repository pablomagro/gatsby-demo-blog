import React from "react";
import Link from "gatsby-link";

const Tags = ({ pathContext }) => {
  const { posts, tagName } = pathContext

  if (posts) {
      return(
        <div>
          <span>
            Post about {tagName}
          </span>
        </div>

        <ul>
          {posts.map(post => {
            return(
              <li>
                <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                </Link>
              </li>
            )
          })}
        </ul>
      )
  }
}

export default AllTags