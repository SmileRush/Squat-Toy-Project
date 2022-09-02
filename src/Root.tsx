import { createTheme, CssBaseline, Theme, ThemeProvider } from '@mui/material';
import React, { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './App';

const muiThemePaletteKeys = [ "background", "common", "error", "grey", "info", "primary", "secondary", "success", "text", "warning" ]

type ITheme = Theme & {
  palette: any
}

const Root = () => {
  const theme: ITheme = createTheme({
    typography: {
      fontFamily: ["GmarketSansMedium"] as any
    },
    // 앱 테마
    palette: {
      primary: {
        main: "#7FCA93",
        contrastText: "#FFFFFF",
      }
    }
  })

  useEffect(() => {
    const r = document.querySelector(":root") as HTMLElement

    muiThemePaletteKeys.forEach((paletteKey) => {
      const themeColorObj = theme.palette[paletteKey]

      for (const key in themeColorObj) {
        if (Object.hasOwnProperty.call(themeColorObj, key)) {
          const colorVal = themeColorObj[key]
          r.style.setProperty(`--mui-color-${paletteKey}-${key}`, colorVal)
        }
      }
    })
  }, [])
  
  return (
    <RecoilRoot>
      <HashRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline  />
          <App  />
        </ThemeProvider>
      </HashRouter>
    </RecoilRoot>
  );
};

export default Root