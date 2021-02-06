import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

const GlobalStyle = createGlobalStyle`

*{
  outline: none !important;
}

body{
  background:${colors.backgroundPrimary};
  color:${colors.textWhite};
}

body,
input,
button {
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
}

h1,
h2,
h3,
h4,
h5,
h6,
strong,
.fw-500 {
  font-weight: 500 !important;
}

.fw-400 {
  font-weight: 400 !important;
}

button {
  cursor: pointer;
}

.fs-sm {
  font-size: 20px;
}

.fs-md {
  font-size: 24px;
}

.fs-lg {
  font-size: 36px;
}

.pos-top {
  top: 0 !important;
}

.show {
  top: 98px;
}

.menu-height {
  height: 98px;
}

.ease {
  transition: all 300ms cubic-bezier(0.420, 0.000, 0.580, 1.000);
  transition-timing-function: cubic-bezier(0.420, 0.000, 0.580, 1.000);
}

.z-index-1{
  z-index:1!important;
}

.z-index-2{
  z-index:2!important;
}

.z-index-3{
  z-index:1001!important;
}

.icon-bar {
  display: flex;
  align-items: center;
  width: 20px;
  height: 2px;
  background: ${colors.textRegular};
  border-radius: 4px;

  margin: 6px 0;

  transition: transform 0.5s, margin 0.5s, opacity 0.5s;
}

.line1 {
  transform: translateY(8px) rotateZ(45deg);
  margin: -2;
}

.line2 {
  opacity: 0;
  margin: -2;
}

.line3 {
  transform: translateY(-8px) rotateZ(-45deg);
  margin: -2;
}


`;

export default GlobalStyle;
