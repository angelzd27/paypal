import { createContext, useState } from "react";

export const TotalAmountContext = createContext()
export const UsersListContext = createContext()

export function TotalAmountProvider(props) {
    const [totalAmount, setTotalAmount] = useState(178000000)

    return (
        <TotalAmountContext.Provider value={{ totalAmount, setTotalAmount }}>
            {props.children}
        </TotalAmountContext.Provider>
    )
}

export function ListUsersProvider(props) {
    const [users, setUsers] = useState([])

    return (
        <UsersListContext.Provider value={{ users, setUsers }}>
            {props.children}
        </UsersListContext.Provider>
    )
}