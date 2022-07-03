import FolderIcon from "../icons/FolderIcon";
import FileIcon from "../icons/FileIcon";
import {FileType} from "../../types/FileType";

interface FileRowType extends Partial<JSX.IntrinsicElements['tr']> {
    file: FileType
}

export default function FileRow({file, className, onClick = () => {}, ...other}: FileRowType){
    return (
        <tr
             className={`hover:bg-slate-100 transition duration-50 ${file.isDirectory ? 'cursor-pointer' : ''} ${className}`}
             onClick={(e) => file.isDirectory && onClick(e)}
             {...other}
        >
            <td className="flex space-x-2">
                <div className="my-auto">{file.isDirectory ? <FolderIcon filled/> : <FileIcon/>}</div>
                <div>{file.name}</div>
            </td>
            <td>
                <span className="float-end">{file.size}</span>
            </td>
        </tr>
    )
}
