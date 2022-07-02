import {FileType} from "../types/FileType";
const fs = require('fs');
const pathModule = require('path');

export const formatSize = (size: number) => {
    const i :number = Math.floor(Math.log(size) / Math.log(1024));
    return (
        (size / Math.pow(1024, i)).toFixed(2) +
        ' ' +
        ['B', 'kB', 'MB', 'GB', 'TB'][i]
    )
};

export const isAvailableToRead = (file: string) => {
    try {
        fs.accessSync(file, fs.constants.R_OK | fs.constants.W_OK);
        console.log(file);
        return true;
    } catch (err) {
        console.log('e : ' + err);
        return false;
    }
};

export const getFilesFromPath = (path: string) => {
    try{
        console.log("===================");
        return fs
            .readdirSync(path)
            .filter((file: string) => isAvailableToRead(pathModule.join(path, file)))
            .map((file: string) => {
                const stats = fs.statSync(pathModule.join(path, file));
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
    }catch(error: any){
        console.error(error);
        return [];
    }

};
