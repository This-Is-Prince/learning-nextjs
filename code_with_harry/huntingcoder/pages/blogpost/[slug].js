import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

// Step 1: Find the file corresponding to the slug.
// Step 2: Populate them inside the page.
const Slug = () => {
  const [blog, setBlog] = useState({});
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    const { slug } = router.query;
    if (typeof slug === "string") {
      fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((res) => {
        res.json().then((data) => {
          setBlog(data);
        });
      });
    }
  }, [router.isReady, router.query]);
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

export default Slug;
