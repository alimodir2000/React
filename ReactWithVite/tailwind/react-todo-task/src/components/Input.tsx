
export interface InputProps extends React.FormHTMLAttributes<HTMLFormElement> {
    children?: React.ReactNode;
    title: string;
    value?: string;
    isTextarea?: boolean;
    onChangeValue?: (value: string) => void;
    className?: string;
    

}

export default function Input({ title, isTextarea, value, onChangeValue, className, ...props }: InputProps) {
    const defaultclassName = `w-full p-1 border-b-2 border-stone-300 rounded-b-lg bg-stone-200 focus:bg-stone-100  `;
    return (
        <p className={`flex flex-col gap-1 my-4 ${className}`}>
            <label className="text-sm font-bold uppercase tex-stone-500">{title}</label>
            {isTextarea ? <textarea className={defaultclassName} {...props} value={value} onChange={(e) => onChangeValue?.(e.target.value)}  /> : <input className={defaultclassName}  {...props}  value={value} onChange={(e) => onChangeValue?.(e.target.value)} />}
        </p>
    );
}