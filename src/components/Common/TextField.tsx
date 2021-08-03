import classes from './TextField.module.css'
import {FC} from "react";

type MetaType = {
    touched: string;
    error: string;
}

type TextField = {
    input: any;
    meta: MetaType;
    isInput: boolean;
}

export const TextField: FC<TextField> = ({input, meta, isInput, ...props}): JSX.Element => {
    return (
        <div className={meta.touched && meta.error && [classes.formControl, classes.error].join(' ')}>

            {isInput ? <input {...input} {...props}/> : <textarea {...input} {...props}/>}
            {meta.touched && meta.error &&  <div className={classes.textError}>
                {meta.error}
            </div>}
        </div>
    )
}