import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Theme from './src/theme';
import { widthPercentageToDP } from 'react-native-responsive-screen';
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.quicksandRegular}>
        This text uses a quick sand font
      </Text>
      <Text style={styles.quicksandLight}>
        This text uses a quick sand light font
      </Text>
      <Text style={styles.ralewayThin}>
        This text uses a thin italic raleway font
      </Text>
      <Text style={styles.ralewayItalic}>
        This text uses a thin italic raleway font
      </Text>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lavender',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quicksandLight: {
    fontFamily: Theme.fonts.FONT_NUNITO_REGULAR,
    fontSize: widthPercentageToDP(5),
  },
  quicksandRegular: {
    fontFamily: Theme.fonts.FONT_NUNITO_BOLD,
    fontSize: widthPercentageToDP(5),
  },
  ralewayItalic: {
    fontFamily: Theme.fonts.FONT_NUNITO_EXTRABOLD,
    fontSize: widthPercentageToDP(5),
  },
  ralewayThin: {
    fontFamily: Theme.fonts.FONT_NUNITO_EXTRABOLD_ITALIC,
    fontSize: widthPercentageToDP(5),
  },
});