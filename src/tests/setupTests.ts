import '@testing-library/jest-dom';
// import { render, type RenderOptions } from '@testing-library/react';
// import { TestProviders } from './providers/TestingProvider';
// import type { ReactElement } from 'react';

// declare global {
//   // Adiciona render ao escopo global
//   interface Global {
//     render: (ui: ReactElement, options?: RenderOptions) => ReturnType<typeof render>;
//   }

//   // OU: adiciona à interface do globalThis (mais moderno)
//   interface Window {
//     render: typeof render;
//   }
// }

// // Atribui com tipagem
// (globalThis as any).render = (ui: ReactElement, options?: RenderOptions) =>
//   render(ui, { wrapper: TestProviders, ...options });