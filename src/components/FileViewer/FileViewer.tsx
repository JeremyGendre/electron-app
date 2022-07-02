import {FileType} from "../../types/FileType";
import FolderIcon from "../icons/FolderIcon";
import FileIcon from "../icons/FileIcon";

export default function FileViewer({files} :{files: FileType[]}){

    const onOpen = (name: string) => {};

    return (
        <div>
            {files.map(({ name, isDirectory, size }: FileType, index: number) => {
                return (
                    <div key={index} className="flex space-x-2 hover:bg-slate-100 transition duration-50" onClick={() => isDirectory && onOpen(name)}>
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
