import { useContext,createContext} from "react";
export const ThemeContext=createContext({ 
    themeMode:"light",
    lightTheme:()=>{},
    darkTheme:()=>{}
})
export const ThemeProvider=ThemeContext.Provider;
export function useTheme(){
    return useContext(ThemeContext);
}