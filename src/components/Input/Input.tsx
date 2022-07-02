
export interface InputProps extends Partial<JSX.IntrinsicElements['input']>{
     containerClasses?: string;
     label?: string;
}

export default function Input({containerClasses, label, className, ...other}: InputProps){
    return (
        <div className={`w-full ${containerClasses}`}>
            {label && (
                <label htmlFor={other.id}>
                    {label}{other.required ? <span className="text-red-700">*</span> : ''}
                </label>
            )}
            <input className={`w-full p-2 border outline-none hover:border-orange-200 focus:border-orange-500 transition duration-150 ${className}`} {...other}/>
        </div>
    );
}
