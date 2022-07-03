import {PropsWithChildren, useMemo} from "react";
import ChevronRightIcon from "../icons/ChevronRightIcon";
import {useFileContext} from "../../contexts/FileContext";

export interface BreadcrumbProps extends Partial<JSX.IntrinsicElements['div']>{
    delimiter: string;
}

export default function Breadcrumb({delimiter, className, ...other}: PropsWithChildren<BreadcrumbProps>){
    const {path, setPath} = useFileContext();
    const values = useMemo(() => {
        return path.split(delimiter);
    }, [path, delimiter]);

    const handleClick = (index: number) => setPath(values.filter((v,i) => i <= index).join(delimiter));

    return (
        <div className={`flex flex-wrap space-x-1 text-sm select-none ${className}`} {...other}>
            {values.map((value, index) => (
                <>
                    {index !== 0 && <span className="my-auto"><ChevronRightIcon/></span>}
                    <div key={index} onClick={() => handleClick(index)}
                         className="opacity-75 hover:underline cursor-pointer"
                    >
                        {value}
                    </div>
                </>
            ))}
        </div>
    );
}
