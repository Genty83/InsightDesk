export {};

declare global {
  interface Window {
    electron: {
      // Window control methods
      minimize: () => void;
      maximize: () => void;
      close: () => void;
      toggleFullscreen: () => void;
      createNewWindow: () => void;

      // Navigation controls
      goBack: () => void;
      goForward: () => void;
      refresh: () => void;
      getNavState: () => Promise<WindowNavState>;

      // Window state listener
      onWindowStateChange: (callback: (state: WindowState) => void) => void;
    };
  }
  
  // Define more specific types for window state and navigation state
  type WindowState = {
    isMaximized: boolean;
    isMinimized: boolean;
    isFullScreen: boolean;
  };
  
  type WindowNavState = {
    canGoBack: boolean;
    canGoForward: boolean;
  };
}