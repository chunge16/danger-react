import 'styled-components';
// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      'color-bg-1': string,
      'color-bg-2': string,
      'color-bg-3': string,
      'color-bg-4': string,
      'color-bg-5': string,
      'color-text-1': string,
      'color-text-2': string,
      'color-text-3': string,
      'color-text-4': string,
    };
  }
}
