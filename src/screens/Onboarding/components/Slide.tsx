import { Box, Button, Text } from '@components/index';
import { DEVICE_WIDTH } from '@utils/const';

interface SlideProps {
  title: string;
  subtitle: string;
  isLast: boolean;
  onNext: () => void;
}

const Slide = ({ title, subtitle, isLast, onNext }: SlideProps) => {
  return (
    <Box alignItems="center" width={DEVICE_WIDTH} px="xl">
      <Box mb="4xl">
        <Text variant="largeTitle" textAlign="center">
          {title}
        </Text>
        <Text variant="headline3" fontWeight="400" textAlign="center" color="neutral2">
          {subtitle}
        </Text>
      </Box>
      <Box alignSelf={isLast ? 'stretch' : 'flex-end'}>
        <Button label={isLast ? 'Get started' : 'Next'} shadow onPress={onNext} />
      </Box>
    </Box>
  );
};

export default Slide;
