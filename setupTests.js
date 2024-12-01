import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder; //eslint-disable-line
global.TextDecoder = TextDecoder; //eslint-disable-line
