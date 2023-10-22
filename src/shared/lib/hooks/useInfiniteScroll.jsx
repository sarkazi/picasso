import { useEffect } from "react";

export const useInfiniteScroll = ({ totalCount, posts, setCurrentPage }) => {
  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [totalCount, posts]);

  const scrollHandler = (event) => {
    if (
      event.target.documentElement.scrollHeight -
        (event.target.documentElement.scrollTop + window.innerHeight) <=
        0 &&
      posts.length < totalCount
    ) {
      setCurrentPage((prev) => prev + 1);
    }
  };
};
