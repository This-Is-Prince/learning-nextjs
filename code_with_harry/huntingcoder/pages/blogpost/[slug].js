import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

// Step 1: Find the file corresponding to the slug.
// Step 2: Populate them inside the page.
const Slug = (props) => {
  const [blog, setBlog] = useState(props.blog);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog.title}</h1>
        <hr />
        <div>{blog.content}</div>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  let { slug } = context.query;
  if (typeof slug === "string") {
    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
    let blog = await data.json();
    return {
      props: { blog },
    };
  } else {
    return {
      props: {},
    };
  }
}

export default Slug;
