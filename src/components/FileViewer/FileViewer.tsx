import {FileType} from "../../types/FileType";
import {useFileContext} from "../../contexts/FileContext";
import {getParentDir} from "../../utils/File.service";
import FileRow from "./FileRow";
const pathModule = require('path');

export default function FileViewer({files} :{files: FileType[]}){
    const {setPath, previousPath} = useFileContext();

    const onOpen = (name: string) => {
        setPath(prev => pathModule.join(prev, name));
    };

    const onBack = () => setPath(prev => getParentDir(prev));

    return (
        <div className="px-1">
            {(previousPath && files.length === 0) && (
                <div onClick={() => setPath(previousPath)} className="flex space-x-1 hover:underline text-blue-700 hover:text-blue-600 cursor-pointer">
                    <span>cancel</span>
                </div>
            )}
            <table className="w-full">
                <thead>
                <tr className="text-left border-b">
                    <th>Name</th>
                    <th>Size</th>
                </tr>
                </thead>
                <tbody>
                <FileRow file={{isDirectory:true, name: '..'}} onClick={onBack}/>
                {files.map((file: FileType, index: number) => {
                    return (
                        <FileRow key={index} file={file} onClick={() => onOpen(file.name)}/>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}
