import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, Button } from "react-native";
import { MovieCard } from "./src/components/card";
import { styles } from "./style";
import axios from "axios";

export default function App() {
  const [popularMoies, setPopularMovies] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  console.log(popularMoies);

  const getData = () => {
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US&page=1",
    })
      .then((response) => {
        setPopularMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Trending this week</Text>
      <ScrollView horizontal>
        {popularMoies.map((item) => {
          return (
            <MovieCard
              image={item.backdrop_path}
              title={item.title}
              date={item.release_date}
            />
          );
        })}
      </ScrollView>
      <Button title="Run again" onPress={() => setTest("testing")} />
    </ScrollView>
  );
}
