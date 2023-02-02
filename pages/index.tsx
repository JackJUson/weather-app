import { Inter } from "@next/font/google";
import { Paper } from "@mantine/core";

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
      <Paper withBorder p="lg" style={{ maxWidth: "500px" }}>

      </Paper>

    </div>
  );
}
