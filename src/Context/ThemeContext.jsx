import React from "react";

export const ThemeContext = React.createContext();

const ligth = {
  backgroundColor: 'hsl(0, 0%, 98%)',
  color: 'hsl(200, 15%, 8%)'
}

const dark = {
  backgroundColor: 'hsl(207, 26%, 17%)',
  color: 'hsl(0, 0%, 100%)'
}

export const Theme = ({children}) => {
  const [isModeActive, setIsModeActive] = React.useState(false);
  
  const theme = isModeActive ? dark : ligth

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