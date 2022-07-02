import FolderIcon from "../icons/FolderIcon";
import FileIcon from "../icons/FileIcon";
import {FileType} from "../../types/FileType";

interface FileRowType extends Partial<JSX.IntrinsicElements['div']> {
    file: FileType
}

export default function FileRow({file, className, onClick = () => {}, ...other}: FileRowType){
    return (
        <div
             className={`flex space-x-2 hover:bg-slate-100 transition duration-50 ${file.isDirectory ? 'cursor-pointer' : ''} ${className}`}
             onClick={(e) => file.isDirectory && onClick(e)}
             {...other}
        >
            <div className="my-auto">
                {file.isDirectory ? <FolderIcon filled/> : <FileIcon/>}
            </div>
            <div>{file.name}</div>
            <div>
                <span className="float-end">{file.size}</span>
            </div>
        </div>
    )
}
