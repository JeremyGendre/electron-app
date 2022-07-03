import FileViewer from "./components/FileViewer/FileViewer";
import {FormEvent, useEffect, useMemo, useState} from "react";
import {getCurrentDir, getFilesFromPath} from "./utils/File.service";
import {useFileContext} from "./contexts/FileContext";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import {useScroll} from "@jeremygendre/react-custom-hooks";

function App() {
    const [searchedValue, setSearchedValue] = useState(getCurrentDir('.'));
    const {path, setPath} = useFileContext();
    const files = useMemo(() => getFilesFromPath(path),[path]);

    const {scrollY} = useScroll();

    useEffect(() => {
        if(searchedValue !== path) setSearchedValue(path);
    },[path]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setPath(searchedValue);
    };

    return (
        <div>
            <div className="sticky top-0">
                <form onSubmit={handleSubmit} className={`px-10 py-2 flex bg-white space-x-2 ${scrollY > 0 ? 'shadow-md' : ''}`}>
                    <Input label={scrollY > 0 ? undefined : 'Browse :'} value={searchedValue} autoFocus
                           onChange={e => setSearchedValue(e.currentTarget.value)}
                    />
                    <Button className="mt-auto" disabled={searchedValue === path} type="submit">Search</Button>
                </form>
                <hr className="mb-4"/>
            </div>
            <FileViewer files={files}/>
        </div>
    )
}

export default App
