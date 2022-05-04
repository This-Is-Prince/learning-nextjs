import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quas,
          architecto eum dolore minus tempora debitis, aperiam explicabo
          dignissimos quasi minima. Accusantium iure quasi quas dolore rem
          perferendis alias, autem porro deserunt animi veritatis omnis debitis
          fugit assumenda asperiores voluptatum eos quod excepturi nostrum!
          Ipsam!
        </div>
      </main>
    </div>
  );
};

export default Slug;
