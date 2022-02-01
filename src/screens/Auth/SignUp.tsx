import { Box, Button, Container, TextInput } from '@components/index';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from '@routes/AuthNavigator';
import { Footer, Header } from '@screens/Auth/components';
import { passwordRegex } from '@utils/regex';
import { useFormik } from 'formik';
import { useRef } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required!'),
  password: Yup.string()
    .min(6, 'Password must at least 6 characters!')
    .max(20, 'Password is only 20 characters maximum!')
    .matches(passwordRegex, 'Your password is not strong enough!')
    .required('Password is required!'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match!')
    .required('Password confirmation is required!'),
});

type SignUpProps = StackScreenProps<AuthStackParamList, 'SignUp'>;

const SignUp = ({ navigation }: SignUpProps) => {
  const password = useRef<RNTextInput>(null);
  const passwordConfirmation = useRef<RNTextInput>(null);

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: { email: '', password: '', passwordConfirmation: '' },
    validationSchema,
    onSubmit: () => {
      // TODO: implement submit handle
    },
  });

  return (
    <Container>
      <Header title="Create New Account" subtitle="Register new Lith account" />
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
          onSubmitEditing={() => passwordConfirmation.current?.focus()}
        />
        <TextInput
          ref={passwordConfirmation}
          icon="lock"
          value={values.passwordConfirmation}
          placeholder="Confirm password"
          secureTextEntry
          touched={touched.passwordConfirmation}
          error={errors.passwordConfirmation}
          returnKeyType="go"
          onChangeText={handleChange('passwordConfirmation')}
          onBlur={handleBlur('passwordConfirmation')}
          onSubmitEditing={() => handleSubmit()}
        />
        <Box mt="m">
          <Button label="Sign up" variant="primary" onPress={() => handleSubmit()} />
        </Box>
      </Box>
      <Footer
        content="Already have account?"
        action="Sign in"
        onPress={() => navigation.replace('Login')}
      />
    </Container>
  );
};

export default SignUp;
