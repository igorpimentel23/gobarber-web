import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { isToday, format, parseISO, isAfter } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import MobileMenu from '../../components/mobileMenu';
import Menu from '../../components/menu';

import {
  Container,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { FiClock } from 'react-icons/fi';
import { useAuth } from '../../hooks/Auth';
import api from '../../services/api';

interface MonthAvailabilityItem {
  day: number;
  available: boolean;
}

interface AppointmentsInDay {
  id: string;
  date: string;
  hourFormatted: string;
  user: {
    name: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [appointments, setAppointments] = useState<AppointmentsInDay[]>([]);
  const [monthAvailability, setMonthAvailability] = useState<
    MonthAvailabilityItem[]
  >([]);

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available && !modifiers.disabled) {
      setSelectedDate(day);
    }
  }, []);

  const handleMonthChange = useCallback((month: Date) => {
    setCurrentMonth(month);
  }, []);

  useEffect(() => {
    api
      .get(`/providers/${user.id}/month-availability`, {
        params: {
          year: currentMonth.getFullYear(),
          month: currentMonth.getMonth() + 1,
        },
      })
      .then(response => {
        setMonthAvailability(response.data);
      });
  }, [currentMonth, user.id]);

  useEffect(() => {
    api
      .get<AppointmentsInDay[]>('/appointments/me', {
        params: {
          year: selectedDate.getFullYear(),
          month: selectedDate.getMonth() + 1,
          day: selectedDate.getDate(),
        },
      })
      .then(response => {
        const appointmentsFormatted = response.data.map(appointment => {
          return {
            ...appointment,
            hourFormatted: format(parseISO(appointment.date), 'HH:mm'),
          };
        });

        setAppointments(appointmentsFormatted);
      });
  }, [selectedDate]);

  const disabledDays = useMemo(() => {
    const dates = monthAvailability
      .filter(monthDay => monthDay.available === false)
      .map(monthDay => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();

        return new Date(year, month, monthDay.day);
      });

    return dates;
  }, [currentMonth, monthAvailability]);

  const selectedWeekday = useMemo(() => {
    return format(selectedDate, 'cccc', { locale: ptBR });
  }, [selectedDate]);

  const selectedDateAsText = useMemo(() => {
    return format(selectedDate, "'Dia' dd 'de' MMMM", {
      locale: ptBR,
    });
  }, [selectedDate]);

  const morningAppointments = useMemo(() => {
    return appointments.filter(appointment => {
      return parseISO(appointment.date).getHours() < 12;
    });
  }, [appointments]);

  const afternoonAppointments = useMemo(() => {
    return appointments.filter(appointment => {
      return parseISO(appointment.date).getHours() >= 12;
    });
  }, [appointments]);

  const nextAppointment = useMemo(() => {
    return appointments.find(appointment => {
      return isAfter(parseISO(appointment.date), new Date());
    });
  }, [appointments]);
  return (
    <Container>
      <Menu logoImg={logoImg} />
      <MobileMenu logoImg={logoImg} />

      <Content className="row d-flex my-5 container px-0 mx-auto justify-content-center">
        <Schedule className="col-12 col-lg-6 order-2 order-lg-1 flex-fill me-0 me-lg-auto">
          <h1 className="fs-lg">Horários Agendados</h1>
          <p className="d-flex align-items-center fw-500 mt-2">
            {isToday(selectedDate) && (
              <span className="d-flex align-items-center">Hoje</span>
            )}
            <span className="d-flex align-items-center">
              {selectedDateAsText}
            </span>
            <span className="d-flex align-items-center">{selectedWeekday}</span>
          </p>

          {isToday(selectedDate) && nextAppointment && (
            <NextAppointment className="mt-5">
              <strong className="fs-sm fw-400">Agendamento a seguir</strong>
              <div className="d-flex align-items-center flex-fill py-3 px-4 rounded position-relative mt-3">
                <img
                  src={nextAppointment?.user.avatar_url}
                  alt={user.name}
                  className="rounded-circle"
                />
                <strong className="ms-4 fs-sm">
                  {nextAppointment?.user.name}
                </strong>
                <span className="d-flex ms-auto align-items-center justify-content-center">
                  <FiClock className="me-1" />
                  {nextAppointment?.hourFormatted}
                </span>
              </div>
            </NextAppointment>
          )}
          <Section>
            <strong>Manhã</strong>
            {morningAppointments.length === 0 && (
              <p>Nenhum agendamento neste periodo</p>
            )}
            {morningAppointments.map(appointment => (
              <Appointment
                key={appointment.id}
                className="d-flex align-items-center"
              >
                <span className="d-flex ms-auto align-items-center justify-content-center">
                  <FiClock className="me-1" />
                  {appointment.hourFormatted}
                </span>

                <div className="d-flex align-items-center flex-fill py-3 px-4 ms-4 rounded">
                  <img
                    src={appointment.user.avatar_url}
                    alt={appointment.user.name}
                    className="rounded-circle"
                  />
                  <strong className="ms-4 fs-sm">
                    {appointment.user.name}
                  </strong>
                </div>
              </Appointment>
            ))}
          </Section>

          <Section>
            <strong>Tarde</strong>
            {afternoonAppointments.length === 0 && (
              <p>Nenhum agendamento neste periodo</p>
            )}
            {afternoonAppointments.map(appointment => (
              <Appointment
                key={appointment.id}
                className="d-flex align-items-center"
              >
                <span className="d-flex ms-auto align-items-center justify-content-center">
                  <FiClock className="me-1" />
                  {appointment.hourFormatted}
                </span>

                <div className="d-flex align-items-center flex-fill py-3 px-4 ms-4 rounded">
                  <img
                    src={appointment.user.avatar_url}
                    alt={appointment.user.name}
                    className="rounded-circle"
                  />
                  <strong className="ms-4 fs-sm">
                    {appointment.user.name}
                  </strong>
                </div>
              </Appointment>
            ))}
          </Section>
        </Schedule>
        <Calendar className="col-12 col-lg-6 order-1 order-lg-2 mb-5 mt-5 mt-sm-0 z-index-1">
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }, ...disabledDays]}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
            onMonthChange={handleMonthChange}
            selectedDays={selectedDate}
            onDayClick={handleDateChange}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
