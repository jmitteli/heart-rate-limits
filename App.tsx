import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

//Easy to modify values when they are declared before the code
const maxHeartRateBase = 220
const lowerLimitFactor = 0.65//65% of 220 - age
const higherLimitFactor = 0.85//85% of 220 - age

//Function to calculate the lower limit
function calculateLowerLimit(age: number): number {
  return (maxHeartRateBase - age) * lowerLimitFactor
}

//Function to calculate the higher limit
function calculateUpperLimit(age: number): number {
  return (maxHeartRateBase - age) * higherLimitFactor
}


export default function App() {

  const [ageText, setAgeText] = useState<string>('')
  //If user inputs comma it will be replaced by a dot
  const ageNumber: number = parseFloat(ageText.replace(',', '.'))

  const isValidAge : boolean = !isNaN(ageNumber)

  //These do the validation and calculation of the lower and upper limits, if input is not a number then 0 will be displayed
  const lowerLimit: number = isValidAge ? calculateLowerLimit(ageNumber) : 0
  const upperLimit: number = isValidAge ? calculateUpperLimit(ageNumber) : 0

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heart Rate Limits Calculator</Text>

      <Text>Enter your age:</Text>
      <TextInput
        style= {styles.input}
        value= {ageText}
        onChangeText= {setAgeText}
        keyboardType= "decimal-pad"
        maxLength= {5}
      />
      <Text>Lower limit: {lowerLimit.toFixed(2)} bpm</Text>
      <Text>Upper limit: {upperLimit.toFixed(2)} bpm</Text>


      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    marginTop: 30,
    paddingLeft: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius:5,
    padding: 10,
    width: 120,
    marginVertical: 10,
  },

})
