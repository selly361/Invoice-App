import React , { useState, useEffect } from 'react'

export const useTheme = () => {

    const preferedTheme = localStorage.getItem("theme") || (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light")
    const [theme, setTheme] = useState(preferedTheme);

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])
    

    return { theme, setTheme  }
}
