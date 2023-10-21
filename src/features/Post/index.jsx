import { memo } from "react";
import { Card, Text, Button, Group, Title, Box } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { randomColors } from "../../shared/const/randomColors";

const Post = memo(({ data }) => {
  const navigate = useNavigate();

  return (
    <Card w="100%" shadow="sm" padding="lg" radius="md" withBorder>
      <Box
        style={{
          background: `linear-gradient(${
            randomColors[Math.floor(Math.random() * randomColors.length)]
          }, rgb(86, 46, 180))`,
        }}
        mb="xl"
        className={styles.colorBox}
      />
      <Group justify="space-between" mb="xs">
        <Title order={3} fw={500}>
          {data?.title}
        </Title>
      </Group>

      <Text size="sm" c="dimmed">
        {data?.body}
      </Text>

      <Button
        onClick={() => navigate("/")}
        variant="outline"
        color="violet"
        mt="md"
      >
        Back
      </Button>
    </Card>
  );
});

export default Post;
