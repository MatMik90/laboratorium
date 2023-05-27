'use client'
import React, { useState } from 'react'

export function Body({
    children,
  }: {
    children: React.ReactNode
  }) {
    const [theme, setTheme] = useState('dark');

    return (
        <body className={`theme-${theme}`}>
            <header>
                <button onClick={() => {
                    if(theme === 'dark') setTheme('light')
                    else setTheme('dark')
                }}>Zmień motyw</button>
            </header>
            <main>{children}</main>
            <aside>Bok</aside>
            <footer>Stopka</footer>
        </body>
    );
}