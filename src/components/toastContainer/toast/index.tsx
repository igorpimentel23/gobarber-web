import React, { useEffect } from 'react';

import { ToastMessage, useToast } from '../../../hooks/Toast';

import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';
import { Container, TimerBar } from './styles';
import { useSpring } from 'react-spring';

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  const { life } = useSpring({
    from: { life: 0 },
    life: 100,
    config: { duration: 3000 },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  const check = !!message.description;

  return (
    <Container
      type={message.type}
      hasdescription={check.toString()}
      style={style}
      className='pb-3'
    >
      {icons[message.type || 'info']}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <TimerBar
        type={message.type}
        style={{
          width: life
            .interpolate({ range: [0, 1], output: [0, 1] })
            .interpolate(life => `${life}%`),
        }}
      />

      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
