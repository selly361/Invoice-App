import { useColorScheme, useLocalStorage } from '@mantine/hooks';

import React from 'react'

export const useTheme = () => {

    const preferedTheme = useColorScheme()
    const [theme, setTheme] = useLocalStorage({ key: 'theme', defaultValue: preferedTheme });


    return { theme, setTheme, preferedTheme  }
}
