import {Component} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

export default class Form extends Component {

    setTodos = this.props.setTodos;

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            text: "",
            status: "In progress"
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getTitle = (e) => {
        this.setState({title: e.target.value})
    }

    getText = (e) => {
        this.setState({text: e.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        const newItem = {
            id: generateUniqueID(),
            title: this.state.title,
            text: this.state.text,
            status: this.state.status
        };

        this.setTodos(prev => [...prev, newItem]);
    }


    render() {
        return (
            <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2" onSubmit={this.handleSubmit}>
                <div className="col-12">
                    <div className="form-outline">
                        <input type="text" id="form1" className="form-control" onChange={this.getTitle}/>
                        <label className="form-label" htmlFor="form1">Title</label>
                    </div>
                    <div className="form-outline">
                        <input type="text" id="form1" className="form-control" onChange={this.getText}/>
                        <label className="form-label" htmlFor="form1">Text</label>
                    </div>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        )
    }
}