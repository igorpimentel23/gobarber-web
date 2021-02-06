import styled from 'styled-components';
import { shade } from 'polished';
import ArrowLeftIcon from '../../assets/ArrowLeftIcon.svg';
import ArrowRightIcon from '../../assets/ArrowRightIcon.svg';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  @media (max-width: 576px) {
    margin-top: 98px;
  }
`;

export const Content = styled.main``;

export const Schedule = styled.div`
  max-width: 540px;
  p {
    color: ${colors.primary};

    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      background: ${colors.primary};
      margin: 0 8px;
    }
  }
`;

export const NextAppointment = styled.div`
  > strong {
    color: ${colors.textRegular};
  }

  div {
    background: ${colors.backgroundAlternative};

    &::before {
      position: absolute;
      height: 80%;
      width: 1px;
      left: 0;
      top: 10%;
      content: '';
      background: ${colors.primary};
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    strong {
      color: ${colors.textLight};
    }

    span {
      color: ${colors.textRegular};

      svg {
        color: ${colors.primary};
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;

  > strong {
    color: ${colors.textRegular};
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid ${colors.backgroundAlternative};
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  > p {
    color: ${colors.textRegular};
  }
`;

export const Appointment = styled.div`
  & + div {
    margin-top: 16px;
  }

  span {
    color: ${colors.textLight};

    svg {
      color: ${colors.primary};
    }
  }

  div {
    background: ${colors.backgroundAlternative};

    img {
      width: 56px;
      height: 56px;
    }

    strong {
      color: ${colors.textWhite};
    }
  }
`;

export const Calendar = styled.aside`
  max-width: 380px;

  .DayPicker {
    border-radius: 10px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
    background: ${colors.backgroundAlternative};
    border-radius: 10px;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-NavButton {
    color: ${colors.textRegular} !important;
  }

  .DayPicker-NavButton--prev {
    right: auto;
    left: 1.5em;
    margin-right: 0;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px 0 0 0;
    padding: 16px;
    background-color: ${colors.backgroundSecondary};
    border-radius: 0 0 10px 10px;
  }

  .DayPicker-Caption {
    margin-bottom: 1em;
    padding: 0 1em;
    color: ${colors.textLight};

    > div {
      text-align: center;
    }
  }

  .DayPicker {
    border-radius: 0.6rem;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
    background: ${colors.backgroundAlternative};
    border-radius: 0.6rem;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-NavButton {
    color: ${colors.textRegular} !important;
  }

  .DayPicker-NavButton--prev {
    background: url(${ArrowLeftIcon}) no-repeat center;
    right: auto;
    left: 1.5em;
    margin-right: 0;
  }

  .DayPicker-NavButton--next {
    background: url(${ArrowRightIcon}) no-repeat center;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 1rem 0 0 0;
    padding: 16px;
    background-color: ${colors.backgroundSecondary};
    border-radius: 0 0 10px 10px;
  }

  .DayPicker-Caption {
    margin-bottom: 1rem;
    padding: 0 1rem;
    color: ${colors.textLight};

    > div {
      text-align: center;
    }
  }

  .DayPicker-Weekday {
    color: ${colors.textFade};
  }

  .DayPicker-Day {
    width: 2.5rem;
    height: 2.5rem;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: ${colors.backgroundAlternative};
    border-radius: 0.6rem;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, colors.backgroundAlternative)};
  }

  .DayPicker-Day--today {
    font-weight: normal;
    color: ${colors.textWhite};
  }

  .DayPicker-Day--disabled {
    color: ${colors.textFade};
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: ${colors.primary} !important;
    border-radius: 0.6rem;
    color: ${colors.backgroundSecondary} !important;
  }
`;
