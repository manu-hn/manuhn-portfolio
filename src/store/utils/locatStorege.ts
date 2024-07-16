// utils/localStorage.ts
export const saveToLocalStorage = (state: any) => {
    try {
        localStorage.setItem('themeColor', JSON.stringify(state));
    } catch (error) {
        console.error('Could not save state to local storage', error);
    }
};

// utils/localStorage.ts
export const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('themeState');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (error) {
        console.error('Could not load state from local storage', error);
        return undefined;
    }
};
