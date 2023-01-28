import { createContext, useContext, useState } from 'react'

const SidebarName = createContext<any>(null);

export function SelectedSidebarProvider({children}:any) {
    const [sidebarName, setSidebarName] = useState(null)

    return (
        <SidebarName.Provider value={ {sidebarName , setSidebarName} }>
                {children}
        </SidebarName.Provider>
    )
}

export function SelectedSidebarContext(){
    return useContext(SidebarName)
}