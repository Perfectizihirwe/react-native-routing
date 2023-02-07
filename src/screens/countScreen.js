import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, customCount } from "../features/countSlice";

export default function CountScreen() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.countAccess);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
        }}
      >
        Count is {count}
      </Text>
      <Button
        onPress={() => {
          dispatch(increment());
        }}
        title="Increment"
      />
      <Button onPress={() => dispatch(decrement())} title="Decrement" />
      <Button
        title="Set count to 67"
        onPress={() => {
          dispatch(customCount(67));
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
