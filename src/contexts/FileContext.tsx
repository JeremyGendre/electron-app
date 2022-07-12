import {
    createContext,
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    useContext, useEffect, useRef,
    useState
} from "react";
import {getCurrentDir} from "../utils/File.service";

const FileContext = createContext<FileContextValue>(undefined!);

export const useFileContext = () => useContext<FileContextValue>(FileContext);

interface FileContextValue{
    openedFilePath: string | null
    setOpenedFilePath: Dispatch<SetStateAction<string|null>>,
    path: string
    setPath: Dispatch<SetStateAction<string>>,
    previousPath: string | null
}

export default function FileContextProvider({children}: PropsWithChildren<{}>){
    const [path, setPath] = useState(getCurrentDir('.'));
    const [openedFilePath, setOpenedFilePath] = useState<string|null>(null);
    const previousPath = useRef<string|null>(null);

    useEffect(() => {
        previousPath.current = path;
    },[path]);

    return (
        <FileContext.Provider value={{
            path, setPath, previousPath: previousPath.current, openedFilePath, setOpenedFilePath
        }}>
            {children}
        </FileContext.Provider>
    );
}
