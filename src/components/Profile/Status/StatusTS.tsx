import {ChangeEvent} from "react";
import * as React from "react";

type StatusProps = {
    status: string;
    setProfileStatusThunk: Function;
}

type StatusState = {
    editMode: boolean;
    statusText: string;
}

class StatusTS extends React.Component<StatusProps, StatusState> {
    public state: StatusState = {
        editMode: false,
        statusText: this.props.status
    }

    protected activateChangeStatus = (): void => {
        this.setState({
            editMode: true
        })
    }

    protected diactivateChangeStatus = () => {
        this.setState({
            editMode: false
        })
        this.props.setProfileStatusThunk(this.state.statusText);
    }

    protected changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            statusText: e.target.value
        });
    }

    render() {
        return (
            <div>
                {!this.state.editMode && <div>
                    <span onDoubleClick={this.activateChangeStatus}>{this.props.status}</span>
                </div> }
                {this.state.editMode && <div>
                    <input onChange={this.changeStatus}
                        autoFocus={true}
                        onBlur={this.diactivateChangeStatus}
                        value={this.state.statusText}/>
                </div>}
            </div>
        );
    }
}

export default StatusTS;