import 'styled-components';
import { Theme } from './config/theme';

declare module 'styled-components' {
    export type DefaultTheme = Theme;
}
