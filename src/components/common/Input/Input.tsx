import React from 'react';
import classes from './Input.module.scss';
import { IInputProps } from '../../../models/common/IInputProps';

export const Input = ({ containerClassName, labelClassName, errorClassName, inputClassName, label, error, type, ...props }: IInputProps) => {
    let labelClass = classes.label;
    let inputClass = classes.input;
    let errorClass = classes.error;
    let containerClass = classes.container;

    if (labelClassName) {
        labelClass = `${labelClass} ${labelClassName}`
    }

    if (errorClassName) {
        errorClass = `${errorClass} ${labelClassName}`
    }

    if (inputClassName) {
        inputClass = `${inputClass} ${labelClassName}`
    }
    if (containerClassName) {
        containerClass = `${containerClass} ${containerClassName}`
    }

    return (
        <div className={containerClass}>
            {label && <p className={labelClass}>
                {label}
            </p>}
            <input className={inputClass} type={type} {...props} />
            {error && <p className={errorClass}>{error}</p>}
        </div>
    )
}
