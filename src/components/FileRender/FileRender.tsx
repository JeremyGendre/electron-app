import {useClickAway} from "@jeremygendre/react-custom-hooks";
import {useRef} from "react";

interface FileRenderProps{
    filePath: string;
    onClose: () => void;
}

export default function FileRender({filePath, onClose}: FileRenderProps) {
    const ref = useRef(null);
    useClickAway(ref, onClose);
    return (
        <div className={`h-screen w-screen fixed top-0 left-0 bg-black/60 z-20`}>
            <div ref={ref} className={`h-full absolute bg-white right-0 w-1/2`}>
                <object data={filePath} className="h-full w-full"/>
            </div>
        </div>
    );
}
