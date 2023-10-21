import { Card, Flex } from "@mantine/core";
import { useGetPostByIdQuery } from "../../shared/api/rtkApi";
import { useParams } from "react-router-dom";
import SkeletonPost from "../../shared/ui/SkeletonPost";
import PostMain from "../../features/Post";
import Page from "../../widgets/Page";

const PostPage = () => {
  const { postId } = useParams();

  const { data, isLoading, error } = useGetPostByIdQuery({ postId });

  return (
    <Page>
      <Flex mih="100vh" align="center" justify="center" w="100%">
        {isLoading ? (
          <Card w="100%">
            <SkeletonPost />
          </Card>
        ) : (
          <PostMain data={data} />
        )}
      </Flex>
    </Page>
  );
};

export default PostPage;
