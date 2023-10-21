import { Skeleton, Box, Flex } from "@mantine/core";

const SkeletonPost = () => {
  return (
    <Box w="100%">
      <Flex mb="20px" w="100%" align="center" gap="xs">
        <Skeleton h={25} w="20%" />
        <Skeleton h={25} w="50%" />
      </Flex>

      <Skeleton mb="10px" h={15} w="100%" />
      <Skeleton mb="25px" h={15} w="30%" />
      <Skeleton h={50} w="100%" />
    </Box>
  );
};

export default SkeletonPost;
