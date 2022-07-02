import {FileType} from "./types/FileType";
import FileViewer from "./components/FileViewer/FileViewer";
const fs = require('fs');
const pathModule = require('path');

const formatSize = (size: number) => {
    const i :number = Math.floor(Math.log(size) / Math.log(1024));
    return (
        (size / Math.pow(1024, i)).toFixed(2) +
        ' ' +
        ['B', 'kB', 'MB', 'GB', 'TB'][i]
    )
};


const files: FileType[] = fs
    .readdirSync('.')
    .map((file: string) => {
        const stats = fs.statSync(pathModule.join('.', file));
        return {
            name: file,
            size: stats.isFile() ? formatSize(stats.size ?? 0) : null,
            isDirectory: stats.isDirectory()
        }
    })
    .sort((a: FileType, b: FileType) => {
        if (a.isDirectory === b.isDirectory) {
            return a.name.localeCompare(b.name)
        }
        return a.isDirectory ? -1 : 1
    });

function App() {

    return (
        <div>
            <FileViewer files={files}/>
        </div>
    )
}

export default App
