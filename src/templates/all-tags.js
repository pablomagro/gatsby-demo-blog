import React from "react";
import Link from "gatsby-link";

const AllTags = ({ pathContext }) => {
  const { tags } = pathContext

  if (tags) {
      return(
          <div>
              <url>
                  {tags.map(tag => {
                      return(
                          <li>
                              <Link to={`/tags/${tag}`}>
                                  {tag}
                              </Link>
                          </li>
                      )
                  })}
              </url>
          </div>
      )
  }
}

export default AllTags