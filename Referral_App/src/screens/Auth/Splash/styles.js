import {StyleSheet} from 'react-native';
import {colors} from '../../../utilities/colors';
import {WP} from '../../../utilities/styling/responsive';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.bgColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    width: WP('60'),
    height: WP('60'),
  },
});

export default styles;
