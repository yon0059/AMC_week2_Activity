import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInANest = () => {
  const [titleText, setTitleText] = useState("Betorico, Robert");
  const bodyText = 'I am a UI/UX Designer on our Sysarch Project, where I am responsible on designing our Project. This upcoming capstone, I will still be our UI/UX Designer for our Project because I will punch our Leader face, Louijie Gonzales if he forbids';

  const onPressTitle = () => {
    setTitleText("NGANI!");    
  };

   return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.baseText}>
          <Text style={styles.titleText} onPress={onPressTitle}>
            {titleText}
            {'\n'}
            {'\n'}
          </Text>
          <Text numberOfLines={5}>{bodyText}</Text>
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  baseText: {
    fontFamily: 'Cochin',
    textAlign: 'center'
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',

  },
});

export default TextInANest;