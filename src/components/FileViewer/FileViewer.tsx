import {FileType} from "../../types/FileType";
import FolderIcon from "../icons/FolderIcon";
import FileIcon from "../icons/FileIcon";
import {useFileContext} from "../../contexts/FileContext";
const pathModule = require('path');

export default function FileViewer({files} :{files: FileType[]}){
    const {setPath} = useFileContext();

    const onOpen = (name: string) => {
        setPath(prev => pathModule.join(prev, name));
    };

    const onBack = () => setPath(prev => pathModule.dirname(prev));

    return (
        <div>
            <div onClick={onBack} className="hover:underline text-blue-700 hover:text-blue-600 cursor-pointer">retour</div>
            {files.map(({ name, isDirectory, size }: FileType, index: number) => {
                return (
                    <div key={index}
                         className={`flex space-x-2 hover:bg-slate-100 transition duration-50 ${isDirectory ? 'cursor-pointer' : ''}`}
                         onClick={() => isDirectory && onOpen(name)}
                    >
                        <div className="my-auto">
                            {isDirectory ? <FolderIcon filled/> : <FileIcon/>}
                        </div>
                        <div>{name}</div>
                        <div>
                            <span className="float-end">{size}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}
