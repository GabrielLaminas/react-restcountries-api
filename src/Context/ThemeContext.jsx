import React from "react";

export const ThemeContext = React.createContext();

const light = {
  backgroundColor: 'hsl(0, 0%, 98%)',
  backgroundElements: 'hsl(0, 0%, 100%)',
  color: 'hsl(200, 15%, 8%)',
  inputColor: 'hsl(0, 0%, 52%)'
}

const dark = {
  backgroundColor: 'hsl(207, 26%, 17%)',
  backgroundElements: 'hsl(209, 23%, 22%)',
  color: 'hsl(0, 0%, 100%)',
  inputColor: 'hsl(0, 0%, 100%)'
}

export const Theme = ({children}) => {
  const [isModeActive, setIsModeActive] = React.useState(false);
  
  const theme = isModeActive ? dark : light

  React.useEffect(() => {
    document.body.style.backgroundColor 
      = theme.backgroundColor;
  }, [theme]);

  return (
    <ThemeContext.Provider 
      value={{
        theme,    
        isModeActive, 
        setIsModeActive
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}