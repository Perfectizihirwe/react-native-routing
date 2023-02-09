import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

export const MovieDetail = ({ route }) => {
  console.log(route.params);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    setMovie(route.params);
  }, []);

  return (
    <View
      style={{
        backgroundColor: "#1a1c1d",
      }}
    >
      <StatusBar backgroundColor="transparent" style="light" />
      <Image
        style={{
          width: 400,
          height: 350,
        }}
        resizeMode="contain"
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        }}
      />
      <Text>{movie.title}</Text>
    </View>
  );
};
