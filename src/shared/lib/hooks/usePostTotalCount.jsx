import { useState, useEffect } from "react";

export const usePostTotalCount = () => {
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setTotalCount(localStorage.getItem("jsonplaceholder_total_count_posts"));
  }, []);

  return { totalCount };
};
