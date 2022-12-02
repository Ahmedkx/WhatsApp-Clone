import { createContext, useContext, useState } from 'react'

interface UserInterface {
        uid: null | number,
        name: string,
        status: string,
        image: string,
}

export const users:UserInterface[] = [
    {uid:1,
    name:"User1",
    status: "online",
    image:"none",
    },
    {uid:2,
    name:"User2",
    status: "online",
    image:"none",
    },
    {uid:3,
    name:"User3",
    status: "online",
    image:"none",
    },
    {uid:4,
    name:"User4",
    status: "online",
    image:"none",
    },
    {uid:5,
    name:"User5",
    status: "online",
    image:"none",
    },
]

const SelectedUser = createContext<any>(null);
const ChangeSelectedUser = createContext<any>(null);

export function SelectedUserProvider({children}:any) {
    const [user, setUser] = useState<UserInterface>({
        uid: null,
        name: "",
        status: "",
        image: "",
    })

    function changeSelectedUser(id:number){
        const user = users.filter(e=>e.uid == id)[0]
        console.log(user)
        setUser(user)
    }

    return (
        <SelectedUser.Provider value={ user }>
            <ChangeSelectedUser.Provider value={ changeSelectedUser }>
                {children}
            </ChangeSelectedUser.Provider>
        </SelectedUser.Provider>
    )
}

export function SelectedUserContext(){
    return useContext(SelectedUser)
}

export function ChangeSelectedUserContext(){
    return useContext(ChangeSelectedUser)
}