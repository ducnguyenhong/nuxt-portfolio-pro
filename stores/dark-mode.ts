import { defineStore } from 'pinia';

export const useDarkModeStore = defineStore('darkModeStore', () => {
  const isDarkMode = ref<boolean>(false);

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    localStorage.setItem('isDarkMode', `${isDarkMode.value}`);
  };

  const initDarkMode = () => {
    const storedValue = localStorage.getItem('isDarkMode');
    if (storedValue) {
      isDarkMode.value = storedValue === 'true';
    }
  };

  return { isDarkMode, toggleDarkMode, initDarkMode };
});
