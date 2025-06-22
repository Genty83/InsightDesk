import { create } from 'zustand';

interface TitlebarStore {
  isMaximized: boolean;
  setIsMaximized: (value: boolean) => void;

  minimize: () => void;
  maximize: () => void;
  close: () => void;
}

const useTitlebarStore = create<TitlebarStore>((set) => ({
  isMaximized: false,
  setIsMaximized: (value) => set({ isMaximized: value }),

  minimize: () => window.electron.minimize(),
  maximize: () => window.electron.maximize(),
  close: () => window.electron.close(),
}));

export default useTitlebarStore;