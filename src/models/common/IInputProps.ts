export interface IInputProps extends React.ComponentProps<'input'> {
    containerClassName?: string,
    labelClassName?: string,
    errorClassName?: string,
    inputClassName?: string,
    label?: string,
    error?: string,
    src?: string,
    type: string,
    imageProps?: any,
    imageClassName?:string,  
}
