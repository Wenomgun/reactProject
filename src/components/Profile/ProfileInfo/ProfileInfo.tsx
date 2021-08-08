import React, {ChangeEvent, Component, FC, SyntheticEvent} from 'react';
import classes from './ProfileInfo.module.css'
import Information from "./Information/Information";
import Reloader from "../../Common/Reloader";
import Avatar from "../../Common/Avatar";
import Status from "../Status/Status";
import {Field, reduxForm, WrappedReduxFormContext} from "redux-form";
import {TextField} from "../../Common/TextField";
import {requiredField} from "../../../utils/validators/validators";
import {Simulate} from "react-dom/test-utils";

type ProfileInfoPropsType = {
    profileData: any;
    status: string;
    setProfileStatusThunk: Function;
    savePhoto: Function;
    submit: Function;
    isOwner: boolean;

}

class ProfileInfo extends React.PureComponent<ProfileInfoPropsType> {
    state = {
        editMode: false
    }

    changeAvatar = (e: ChangeEvent<HTMLInputElement>): void  => {
        const files = e.target.files;
        if (files && files.length) {
            this.props.savePhoto(files[0]);
        }
    }

    editProfileDetails = () => {
        this.setState({
            editMode: true
        })
    }

    submitFormDetails = (formData: any) => {
        this.props.submit(formData).then(() => {
            this.setState({
                editMode: false
            })
        });
    }

    render() {
        if (!this.props.profileData) {
            return <Reloader/>
        }

        return (
            <div className={classes.profileInfo}>
                <div>
                    <Status status={this.props.status}
                            setProfileStatusThunk={this.props.setProfileStatusThunk}
                    />
                </div>
                <div className={classes.profileAvaBlock}>
                    <Avatar data={this.props.profileData}>
                    </Avatar>
                    <div>
                        <Information data={this.props.profileData}/>
                        {this.props.isOwner && <input type={'file'} onChange={this.changeAvatar}/>}
                        {this.props.isOwner && !this.state.editMode && <button onClick={this.editProfileDetails}>Редактировать</button>}
                        {this.state.editMode ?
                            <ProfileDataDetailsFormReduxForm initialValues={this.props.profileData}
                                                             profileData={this.props.profileData}
                                                             onSubmit={this.submitFormDetails as any}/> :
                            <ProfileDataDetails profileData={this.props.profileData}/>}

                    </div>
                </div>
            </div>
        );
    }
}

type ProfileDataDetailsPropsType = {
    profileData: any;
}

class ProfileDataDetails extends Component<ProfileDataDetailsPropsType, any> {
    render() {
        return <div>
            <div>
                <b>О себе:</b>{this.props.profileData.aboutMe}
            </div>
            <div>
                <b>ФИО:</b>{this.props.profileData.fullName}
            </div>
            <div>
                <b>В поиске работы:</b>{this.props.profileData.lookingForAJob ? 'Да' : 'Нет'}
            </div>
            <div>
                <b>Описание:</b>{this.props.profileData.lookingForAJobDescription}
            </div>
            <Contacts contacts={this.props.profileData.contacts} formMode={false}/>

        </div>;
    }
}

class ProfileDataDetailsForm extends Component<any, any> {
    render() {
        return <form onSubmit={this.props.handleSubmit as any}>
                <button>Сохранить</button>
                <div>
                    <b>О себе:</b><Field name={'aboutMe'} component={TextField} placeholder={'Введите текст'}/>
                </div>
                <div>
                    <b>ФИО:</b><Field name={'fullName'} component={TextField} placeholder={'Введите текст'}/>
                </div>
                <div>
                    <b>В поиске работы:</b><Field name={'lookingForAJob'} type={'checkbox'} component={'input'} placeholder={'Введите текст'}/>
                </div>
                <div>
                    <b>Описание:</b><Field name={'lookingForAJobDescription'} component={TextField} placeholder={'Введите текст'}/>
                </div>
                <Contacts contacts={this.props.profileData.contacts} formMode={true}/>
            </form>
    }
}

const ProfileDataDetailsFormReduxForm = reduxForm<{}, ProfileDataDetailsPropsType>({
    form: 'profileForm'
})(ProfileDataDetailsForm as any);

type Contacts = {
    facebook: string;
    github: string;
    instagram: string;
    mainLink: string;
    twitter: string;
    vk: string;
    website: string;
    youtube: string;
}

type ContactsPropsType = {
    contacts: typeof Contacts;
    formMode: boolean;
}

const Contacts: FC<ContactsPropsType> = ({contacts, formMode}): JSX.Element => {

    return (
        <>
            {
                Object.keys(contacts).map((contact) => {
                    if (formMode) {
                        return <div><b>{contact}</b><Field name={'contacts.' + contact} component={TextField} placeholder={'Введите текст'}/></div>
                    } else {
                        // @ts-ignore
                        return <div><b>{contact}</b>{contacts[contact]}</div>
                    }
                })
            }
        </>
    )
}

export default ProfileInfo;