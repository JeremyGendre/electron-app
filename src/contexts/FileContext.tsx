import {
    createContext,
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    useContext,
    useState
} from "react";

const FileContext = createContext<FileContextValue>(undefined!);

export const useFileContext = () => useContext<FileContextValue>(FileContext);

interface FileContextValue{
    path: string
    setPath: Dispatch<SetStateAction<string>>
}

export default function FileContextProvider({children}: PropsWithChildren<{}>){
    const [path, setPath] = useState('.');

    return (
        <FileContext.Provider value={{
            path, setPath
        }}>
            {children}
        </FileContext.Provider>
    );
}
