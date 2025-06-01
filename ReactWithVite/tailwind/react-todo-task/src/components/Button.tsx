export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;

}

export default function Button({children, onClick, className}:ButtonProps) {
    return (
        <button
            onClick={onClick}
             className={`${className} px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-300 hover:bg-stone-600 hover:text-stone-200`}>{children}</button>
    )
}