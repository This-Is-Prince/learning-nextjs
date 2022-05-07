import React, { useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

// Step 1: Collect all the files from blogdata directory.
// Step 2: Iterate through them and Display them.

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.blogs);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blog, index) => {
          return (
            <div key={index}>
              <Link href={`/blogpost/${blog.slug}`} passHref>
                <h2 className={styles.blogItemh3}>{blog.title}</h2>
              </Link>
              <p className={styles.blogItemp}>{blog.content.substr(0, 140)}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch(`http://localhost:3000/api/blogs`);
  let blogs = await data.json();

  return {
    props: { blogs }, // will be passed to the page component as props
  };
}

export default Blog;
