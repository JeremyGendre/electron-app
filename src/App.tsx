import FileViewer from "./components/FileViewer/FileViewer";
import {FormEvent, useEffect, useMemo, useState} from "react";
import {getCurrentDir, getFilesFromPath, getParentDir} from "./utils/File.service";
import {useFileContext} from "./contexts/FileContext";
const pathModule = require('path');

function App() {
    const [searchedValue, setSearchedValue] = useState(getCurrentDir('.'));
    const {path, setPath} = useFileContext();
    const files = useMemo(() => getFilesFromPath(path),[path]);

    useEffect(() => {
        if(searchedValue !== path) setSearchedValue(path);
    },[path]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setPath(searchedValue);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={searchedValue} onChange={e => setSearchedValue(e.currentTarget.value)}/>
                <button type="submit">Search</button>
            </form>
            <hr className="my-4"/>
            <FileViewer files={files}/>
        </div>
    )
}

export default App
