import React from "react";

export default function Todo({title, text}) {

    let [status, setStatus] = React.useState("To do");
    let [StatusButton, setStatusButton] = React.useState("Finished");
    const [show, setShow] = React.useState(true);

    function OnClick() {
        if (status == "To do") {
            setStatus(status = "Finished")
        } else {
            setStatus(status = "To do")
        }
        if (StatusButton == "Finished") {
            setStatusButton(StatusButton = "To do")
        } else {
            setStatusButton(StatusButton = "Finished")
        }
    }

    return (
        <table className="table mb-4" style={{ display: show ? "block" : "none" }}>
            <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Text</th>
                <th scope="col">Status</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">{title}</th>
                <td>{text}</td>
                <td>{status}</td>
                <td>
                    <button type="submit" className="btn btn-danger" onClick={() => setShow((s) => !s)}>Delete</button>
                    <button type="submit" className="btn btn-success ms-1"
                        onClick={() => OnClick()}>
                        {StatusButton}
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
    )
}