import { Inter } from "@next/font/google";
import { Paper, TextInput, Button, Text, Group } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      style={{
        position: "static",
        height: "100vh",
        backgroundImage:
          "url('https://littlevisuals.co/images/atlantic_ridge.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Paper withBorder p="lg" style={{ maxWidth: "500px" }}>
          <Group position="apart">
            <Text size="xl" weight={500}>
              Get The Weather!
            </Text>
          </Group>
          <Group position="apart">
            <Text size="lg">
              Enter a city, and get the weather below!
            </Text>
          </Group>
        </Paper>
      </div>
    </div>
  );
}
