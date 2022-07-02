import {
    createContext,
    Dispatch,
    PropsWithChildren,
    SetStateAction, useCallback,
    useContext, useEffect, useRef,
    useState
} from "react";
import {getCurrentDir} from "../utils/File.service";

const FileContext = createContext<FileContextValue>(undefined!);

export const useFileContext = () => useContext<FileContextValue>(FileContext);

interface FileContextValue{
    path: string
    setPath: Dispatch<SetStateAction<string>>,
    previousPath: string | null
}

export default function FileContextProvider({children}: PropsWithChildren<{}>){
    const [path, setPath] = useState(getCurrentDir('.'));
    const previousPath = useRef<string|null>(null);

    useEffect(() => {
        previousPath.current = path;
    },[path]);

    return (
        <FileContext.Provider value={{
            path, setPath, previousPath: previousPath.current
        }}>
            {children}
        </FileContext.Provider>
    );
}
