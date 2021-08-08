import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {goLogin, goOutLogin} from "../../Redux/auth-reducer";
import {TextField} from "../Common/TextField";
import {maxLengthValue, requiredField} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import {selectCaptcha, selectIsAuth} from "../../Redux/auth-selectors";

const maxLength = maxLengthValue(40);

const LoginForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'}
                       placeholder={'Login'}
                       component={TextField}
                       isInput={true}
                       validate={[requiredField, maxLength]}
                />
            </div>
            <div>
                <Field name={'pass'}
                       placeholder={'Password'}
                       component={TextField}
                       type={'password'}
                       isInput={true}
                       validate={[requiredField, maxLength]}
                />
            </div>
            <div>
                <Field name={'rememberMe'}
                       type={'checkbox'}
                       component={'input'}
                /> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
            {props.captcha && <div>
                <img src={props.captcha} alt={'Captcha'}/>
                <Field name={'captcha'}
                       placeholder={'Captcha'}
                       component={TextField}
                       isInput={true}
                       validate={[requiredField]}
                />
            </div> }

        </form>
    );
}

const Login = (props) => {
    const submit = (formData) => {
       props.goLogin({
           email: formData.login,
           password: formData.pass,
           rememberMe: formData.rememberMe,
           captcha: formData.captcha
       });
    }

    const logout = () => {
        props.goOutLogin();
    }

    const renderLogin = () => {
        if (props.isAuth) {
            return (<div>
                <div>You are logined</div>
                <button onClick={logout}>Logout</button>
            </div>)
        } else {
            return (<div>
                <h1>Login</h1>
                <LoginReduxForm captcha={props.captcha} onSubmit={submit}/>
            </div>)
        }
    }

    return (
        <div>
            { renderLogin() }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: selectIsAuth(state),
        captcha: selectCaptcha(state)
    }
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default connect(mapStateToProps, {
    goLogin, goOutLogin
})(Login);