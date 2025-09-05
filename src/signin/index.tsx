import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Signin () {
  return (
    <View style={styles.container}>
      <Text>deixa eu chamar ele thais </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6193d4ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});