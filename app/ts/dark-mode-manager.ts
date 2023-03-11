class DarkModeManager {
  constructor() {
    const toggleDarkModeButton = document.getElementById(
      "toggle-theme"
    ) as HTMLButtonElement | null;

    if (toggleDarkModeButton) {
      toggleDarkModeButton.addEventListener("click", this.handleToggleDarkMode);
    }

    if (this.getDarkModeState()) {
      this.setDarkMode(true);
    }
  }

  private getDarkModeState(): boolean {
    const darkMode = localStorage.getItem("darkMode");
    return darkMode === "true";
  }

  private setDarkMode(darkMode: boolean): void {
    localStorage.setItem("darkMode", String(darkMode));
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }

  private handleToggleDarkMode = (): void => {
    const isDarkMode = this.getDarkModeState();
    this.setDarkMode(!isDarkMode);
  };
}

const darkModeManager = new DarkModeManager();
