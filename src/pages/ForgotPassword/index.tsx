import React, { useCallback, useRef, useState } from 'react';
import { FiArrowLeft, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { useToast } from '../../hooks/Toast';
import getValidationErrors from '../../util/getValidadtionErrosr';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/input';
import Button from '../../components/button';

import { Container, Content, AnimationContainer, Background } from './styles';
import api from '../../services/api';

interface ForgotPasswordFormData {
  email: string;
  password: string;
}

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  // const history = useHistory();

  const handleSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
        });

        await schema.validate(data, { abortEarly: false });

        // recuperação de senha

        await api.post('/password/forgot', {
          email: data.email,
        });

        addToast({
          type: 'success',
          title: 'Email de recuperação enviado',
          description:
            'Enviamos um email para confirmara a recuperação de senha, verifique sua caixa de entrada',
        });

        // history.push("/dashboard");
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na recuperação de senha',
          description:
            'Ocorreu um erro ao tentar recuperar a senha, cheque as credenciais',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast],
  );
  return (
    <Container className="vh-100 d-flex align-items-stretch">
      <Content className="d-flex flex-column justify-content-center align-items-center container">
        <AnimationContainer className="d-flex flex-column justify-content-center align-items-center w-100">
          <img src={logoImg} alt="GoBarber" />
          <Form
            ref={formRef}
            onSubmit={handleSubmit}
            className="my-5 text-center w-100"
          >
            <h1 className="mb-4 fs-md">Recuperar senha</h1>
            <Input
              name="email"
              icon={FiMail}
              type="email"
              placeholder="E-mail"
            />
            <Button loading={loading} type="submit">
              Recuperar
            </Button>
          </Form>

          <Link
            to="/"
            className="d-flex align-items-center mt-3 text-decoration-none"
          >
            <FiArrowLeft className="me-2" />
            Voltar ao login
          </Link>
        </AnimationContainer>
      </Content>
      <Background className="flex-lg-fill" />
    </Container>
  );
};

export default ForgotPassword;
