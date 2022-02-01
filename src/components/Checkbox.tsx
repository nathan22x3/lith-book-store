import { Feather as Icon } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import theme, { Box, Text } from './Theme';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <TouchableOpacity activeOpacity={0.75} onPress={onChange}>
      <Box flexDirection="row" alignItems="center">
        <Box
          justifyContent="center"
          alignItems="center"
          width={20}
          height={20}
          borderRadius="m"
          borderWidth={1.5}
          borderColor="primary1"
          bg={checked ? 'primary1' : 'transparent'}
          mr="s"
        >
          <Icon name="check" color={theme.colors.white} />
        </Box>
        <Text variant="body4" color="neutral4">
          {label}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

Checkbox.defaultProps = {};

export default Checkbox;
