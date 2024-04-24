import { forwardRef, PropsWithChildren } from "react";

interface LabelProps {
    label: string;
    htmlFor: string;
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(({ label, htmlFor, ...rest }, ref): JSX.Element => {
    console.log(label);
    console.log(ref);
    return <label ref={ref} htmlFor={htmlFor} className="block text-gray-700 text-sm font-bold mb-2" {...rest}>{label}</label>;
});
