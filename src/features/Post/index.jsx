import { memo } from "react";
import { Card, Text, Button, Group, Title, Box, Badge } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { randomColors } from "../../shared/const/randomColors";

import Avatar, { genConfig } from "react-nice-avatar";

const Post = memo(({ data }) => {
  const navigate = useNavigate();

  const config = genConfig({ bgColor: "rgb(73, 73, 73)" });

  return (
    <Card w="100%" shadow="sm" padding="lg" radius="md" withBorder>
      <Avatar className={styles.avatar} {...config} />

      <Box
        style={{
          background: `linear-gradient(${
            randomColors[Math.floor(Math.random() * randomColors.length)]
          }, #0c8599)`,
        }}
        mb="xl"
        className={styles.colorBox}
      />
      <Group justify="space-between" mb="xs">
        <Title order={3} fw={500}>
          {data?.title}
        </Title>
        <Badge color="cyan">{data.id}</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {data?.body}
      </Text>

      <Button
        onClick={() => navigate("/")}
        w={100}
        variant="outline"
        color="cyan"
        mt="md"
      >
        Back
      </Button>
    </Card>
  );
});

export default Post;
