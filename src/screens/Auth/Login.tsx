import { Box, Button, Checkbox, Container, Text, TextInput } from '@components/index';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from '@routes/index';
import { Footer, Header, SocialLogin } from '@screens/Auth/components';
import { useFormik } from 'formik';
import { useRef } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required!'),
  password: Yup.string().required('Password is required!'),
});

type LoginProps = StackScreenProps<AuthStackParamList, 'Login'>;

const Login = ({ navigation }: LoginProps) => {
  const password = useRef<RNTextInput>(null);

  const { values, touched, errors, setFieldValue, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: { email: '', password: '', remember: true },
      validationSchema,
      onSubmit: () => {
        // TODO: implement submit handle
      },
    });

  return (
    <Container>
      <Header title="Welcome Back!" subtitle="Login to your existence account of Lith" />
      <Box px="l" mt="2xl">
        <TextInput
          icon="user"
          value={values.email}
          placeholder="Email or Phone number"
          touched={touched.email}
          error={errors.email}
          returnKeyType="next"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          onSubmitEditing={() => password.current?.focus()}
        />
        <TextInput
          ref={password}
          icon="lock"
          value={values.password}
          placeholder="Password"
          secureTextEntry
          touched={touched.password}
          error={errors.password}
          returnKeyType="next"
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          onSubmitEditing={() => handleSubmit()}
        />
        <Box
          alignSelf="stretch"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mt="s"
          mx="xs"
          mb="2xl"
        >
          <Checkbox
            label="Remember me"
            checked={values.remember}
            onChange={() => setFieldValue('remember', !values.remember)}
          />
          <TouchableOpacity activeOpacity={0.75} onPress={() => {}}>
            <Text variant="body3" color="neutral2">
              Forgot password
            </Text>
          </TouchableOpacity>
        </Box>
        <Button label="Sign in" variant="primary" onPress={() => handleSubmit()} />
        <SocialLogin />
      </Box>
      <Footer
        content="Don't have an account?"
        action="Sign up"
        onPress={() => navigation.replace('SignUp')}
      />
    </Container>
  );
};

export default Login;
