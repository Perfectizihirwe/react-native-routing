import { useEffect } from "react";
import { View, Text, ImageBackground } from "react-native";
import axios from "axios";

export const MovieCard = ({ image, title, date }) => {
  return (
    <ImageBackground
      source={{
        uri: `https://image.tmdb.org/t/p/w500${image}`,
      }}
      imageStyle={{
        borderRadius: 20,
      }}
      style={{
        height: 200,
        width: 340,
        justifyContent: "flex-end",
        paddingLeft: 20,
        paddingBottom: 15,
        marginRight: 15,
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 20,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          color: "#fff",
        }}
      >
        {date}
      </Text>
    </ImageBackground>
  );
};
