import React from 'react';

class Status extends React.Component {
    state = {
        editMode: false,
        statusText: this.props.status
    }

    activateChangeStatus = () => {
        this.setState({
            editMode: true
        })
    }

    diactivateChangeStatus = (e) => {

        this.setState({
            editMode: false
        })
        this.props.setProfileStatusThunk(this.state.statusText);
    }

    changeStatus = (e) => {
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
                           value={this.state.statusText}></input>
                </div>}
            </div>
        );
    }
}


export default Status;