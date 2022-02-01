import { Feather as Icon } from '@expo/vector-icons';
import { forwardRef } from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import theme, { Box } from './Theme';

interface TextInputProps extends RNTextInputProps {
  icon: keyof typeof Icon.glyphMap;
  error?: string;
  touched?: boolean;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({ icon, error = '', touched = false, ...rest }, ref) => {
    const reColor: keyof typeof theme.colors = !touched
      ? 'neutral4'
      : !error
      ? 'sematic2'
      : 'sematic3';
    const color = theme.colors[reColor];

    return (
      <Box
        position="relative"
        flexDirection="row"
        alignItems="center"
        height={48}
        px="m"
        borderRadius="l"
        mb="m"
        backgroundColor="neutral6"
      >
        <Icon name={icon} size={20} {...{ color }} />
        <RNTextInput
          style={styles.input}
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          selectionColor={theme.colors.primary1}
          {...{ ref }}
          {...rest}
        />
        {touched && (
          <Box
            justifyContent="center"
            alignItems="center"
            width={20}
            height={20}
            borderRadius="m"
            backgroundColor={reColor}
          >
            <Icon name={!error ? 'check' : 'x'} color={theme.colors.white} />
          </Box>
        )}
      </Box>
    );
  }
);

export default TextInput;

const styles = StyleSheet.create({
  input: {
    ...theme.textVariants.body4,
    flex: 1,
    marginHorizontal: 12,
    color: theme.colors.neutral1,
  },
  inputError: {
    position: 'absolute',
    top: -20,
    right: 0,
  },
});
