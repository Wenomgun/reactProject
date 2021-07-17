import classes from './TextField.module.css'

export const TextField = ({input, meta, ...props}) => {
    return (
        <div className={meta.touched && meta.error && [classes.formControl, classes.error].join(' ')}>

            {props.isInput ? <input {...input} {...props}></input> : <textarea {...input} {...props}></textarea>}
            {meta.touched && meta.error &&  <div className={classes.textError}>
                {meta.error}
            </div>}
        </div>
    )
}