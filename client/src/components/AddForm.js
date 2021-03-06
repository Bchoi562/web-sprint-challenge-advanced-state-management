import React from 'react';
import { connect } from "react-redux";
import { addSmurf, setError } from "../actions/";

class AddForm extends React.Component {
    state = {
            name: "",
            position: "",
            nickname: "",
            description: ""
        };

    handleChange = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const checkName = this.props.smurfs.filter(smurf => smurf.name === this.state.name);
            if (checkName.length > 0){
                this.setState({
                    ...this.state
                })
                this.props.setError( 'Must include a name');
                return
            }

            if (this.state.name === '' ){
                this.setState({
                    ...this.state
                })
                this.props.setError( 'Smurf name is already assigned');
            }

            else if(this.state.position === '' ){
                this.setState({
                    ...this.state
                })
                this.props.setError( 'A position must be included');
            }

            else if (this.state.nickname === ''){
                this.setState({
                    ...this.state
                })
                this.props.setError( 'A nickname must be included');
            }
            else {
                const newSmurf = {
                    id: Date.now(),
                    name: this.state.name,
                    position: this.state.position,
                    nickname: this.state.nickname,
                    description: this.state.description
                }

                this.props.addSmurf(newSmurf);
                this.setState({
                    name: "",
                    position: "",
                    nickname: "",
                    description: "",
                    error: ""
                });
            }
    };

    render() {
        return (<section>
            <h2>Add Smurf</h2>
            <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                    <label htmlFor="name">Name:</label><br />
                    <input onChange={this.handleChange} name="name" id="name" value={this.state.name} />

                    <label htmlFor="position">Position:</label><br />
                    <input onChange={this.handleChange} name="position" id="position" value={this.state.position} />

                    <label htmlFor="nickname">Nickname:</label><br />
                    <input onChange={this.handleChange} name="nickname" id="nickname" value={this.state.nickname} />

                    <label htmlFor="description">Description:</label><br />
                    <input onChange={this.handleChange} name="description" id="description" value={this.state.description} />
                </div>

                <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {this.props.error} </div>

                <button onClick={(e) => this.handleSubmit(e)}>Submit Smurf</button>
            </form>
        </section>);
    }
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error
    }
}

const mapDispatchToProps = { addSmurf, setError };

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.