import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/Auth';
import { useToast } from '../../hooks/Toast';
import getValidationErrors from '../../util/getValidadtionErrosr';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/input';
import Button from '../../components/button';

import { Container, Content, AnimationContainer, Background } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, { abortEarly: false });

        await signIn({
          email: data.email,
          password: data.password,
        });
        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
        });
      }
    },
    [signIn, addToast, history],
  );
  return (
    <Container className="vh-100 d-flex align-items-stretch">
      <Content className="d-flex flex-column justify-content-center align-items-center container">
        <AnimationContainer className="d-flex flex-column justify-content-center align-items-center w-100">
          <img src={logoImg} alt="GoBarber" />
          <Form
            ref={formRef}
            onSubmit={handleSubmit}
            className="d-flex flex-fill flex-column text-center w-100 mt-4 mb-3"
          >
            <h1 className="mb-4 fs-md">Faça seu Logon</h1>
            <Input
              name="email"
              icon={FiMail}
              type="email"
              placeholder="E-mail"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Button type="submit">Entrar</Button>

            <Link
              to="/forgot-password"
              className="d-block mt-3 text-decoration-none"
            >
              Esqueci minha senha
            </Link>
          </Form>

          <Link
            to="/signup"
            className="d-flex align-items-center mt-3 text-decoration-none"
          >
            <FiLogIn className="me-2" />
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>
      <Background className="flex-lg-fill" />
    </Container>
  );
};

export default SignIn;
