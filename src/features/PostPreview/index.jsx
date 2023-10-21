import { memo } from "react";
import { Flex, Title, Button, Card } from "@mantine/core";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

const PostItem = memo(({ index, post }) => {
  const navigate = useNavigate();

  return (
    <li className={styles.post}>
      <Card
        w="100%"
        shadow="sm"
        radius="md"
        p="xs"
        withBorder
        className={styles.card}
      >
        <Flex align="flex-start" gap="xs" p="unset">
          <span>{index + 1}.</span>
          <Flex direction="column" align="start" gap="sm" className="hidden">
            <Title className="text-ellipsis" order={4} fw={700}>
              {post.title}
            </Title>
            <p className="text-ellipsis">{post.body}</p>
          </Flex>

          <Button
            onClick={() => navigate(`/post/${index + 1}`)}
            variant="gradient"
            gradient={{ from: "cyan", to: "violet", deg: 90 }}
            h={65}
            className={styles.btn}
          >
            Просмотр
          </Button>
        </Flex>
      </Card>
    </li>
  );
});

export default PostItem;
