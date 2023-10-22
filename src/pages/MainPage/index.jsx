import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { useGetAllPostsQuery } from "../../shared/api/rtkApi";
import PostPreview from "../../features/PostPreview";
import SkeletonPostItem from "../../shared/ui/SkeletonPostItem";
import Page from "../../widgets/Page";
import { useInfiniteScroll } from "../../shared/lib/hooks/useInfiniteScroll";
import { postDisplayLimit as limit } from "../../shared/const/postDisplayLimit";

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);

  const { data, isLoading, error } = useGetAllPostsQuery({
    limit,
    page: currentPage,
  });

  useEffect(() => {
    if (data) {
      if (!posts.length) {
        setPosts(data.posts);
      } else {
        setPosts([...posts, ...data.posts]);
      }
    }
  }, [data]);

  useInfiniteScroll({ totalCount: data?.totalCount, posts, setCurrentPage });

  return (
    <Page>
      <ul className={styles.list}>
        {posts?.map((post, index) => {
          return <PostPreview key={post.title} post={post} index={index} />;
        })}
        {isLoading &&
          Array.from({ length: limit }).map((skeleton, index) => (
            <SkeletonPostItem height={73} key={index} />
          ))}
      </ul>
    </Page>
  );
};

export default MainPage;
