import {useClickAway} from "@jeremygendre/react-custom-hooks";
import {useRef, useState} from "react";

interface FileRenderProps{
    filePath: string;
    onClose: () => void;
}

export default function FileRender({filePath, onClose}: FileRenderProps) {
    const ref = useRef(null);
    const [animation, setAnimation] = useState('animate-slide-in-right');
    useClickAway(ref, () => {
        setAnimation('animate-slide-out-right');
        setTimeout(onClose,500);
    });
    return (
        <div className={`h-screen w-screen fixed top-0 left-0 bg-black/60 z-20`}>
            <div ref={ref} className={`h-full absolute bg-white right-0 w-2/3 ${animation}`}>
                <object data={filePath} className="h-full w-full"/>
            </div>
        </div>
    );
}
