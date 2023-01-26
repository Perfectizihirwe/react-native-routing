import { View, Text, TextInput, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export const SalaryCalculator = () => {
  const [salary, setSalary] = useState(0);
  const [result, setResult] = useState();
  const [amounts] = useState({
    minimum: 30000,
    minimumPercentage: 20,
    maximum: 100000,
    maximumPercentage: 30,
  });

  const { minimum, maximum, maximumPercentage, minimumPercentage } = amounts;

  const calculate = () => {
    setSalary(0);
    setResult(0);
    if (salary == 0) {
      return alert("Please input your salary");
    }
    if (salary <= minimum) {
      return alert("You are not paying any PAYE tax");
    }
    if (salary > minimum && salary <= maximum) {
      return setResult(salary - (salary * minimumPercentage) / 100);
    }
    return setResult(salary - (salary * maximumPercentage) / 100);
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Salary Calculator</Text>
        <Text>Calculate your net salary after Pay As You Earn Tax</Text>
        <View
          style={{
            borderWidth: 1,
            padding: 5,
          }}
        >
          <TextInput
            placeholder="Enter your salary"
            keyboardType="numeric"
            value={salary}
            onChangeText={(number) => {
              setSalary(number);
            }}
          />
        </View>
        <Button title="Calculate" onPress={calculate} />
        <Text>Your net salary is {result}</Text>
      </View>
    </SafeAreaView>
  );
};
