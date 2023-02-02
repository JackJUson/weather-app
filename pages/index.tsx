import { Inter } from "@next/font/google";
import { Paper, TextInput, Button, Text, Group } from "@mantine/core";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [city, setCity] = useState("");

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const [weatherData, setWeatherData] = useState<any>({});

  async function getWeatherData() {
    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    try {
      // Query data
      const serverResponse = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?" +
          "q=" +
          city +
          "&appid=" +
          API_KEY +
          "&units=imperial"
      );
      const data = await serverResponse.json();
      // if there is an error, throw error
      console.log(data);
      if (data?.cod === "400") throw data;
      // if not, save data
      setWeatherData(data);
    } catch (err) {
      console.log(err);
    }
  }

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
          <Group position="apart" mb="sm">
            <Text size="lg">Enter a city, and get the weather below!</Text>
          </Group>
          <Group position="apart" mb="sm">
            <TextInput
              label="City Name"
              placeholder="example: Sydney"
              onChange={(e) => setCity(e.target.value)}
            />
          </Group>
          <Group position="apart">
            <Button
              variant="gradient"
              size="md"
              onClick={() => getWeatherData()}
            >
              Get Weather
            </Button>
          </Group>
          {Object.keys(weatherData).length !== 0 ? (
            <>
              <Group position="left">
                <Text size="xl" weight={500} mt="lg">{weatherData.name} Weather</Text>
              </Group>
              <Group position="left">
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
                  width="100px"
                  height="100px"
                />
                <Text size="lg" weight={500}>
                  Currently {weatherData.main.temp}&deg;F
                </Text>
              </Group>
            </>
          ) : null}
        </Paper>
      </div>
    </div>
  );
}
