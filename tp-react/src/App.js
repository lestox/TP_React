import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from "./Todo";
import Form from "./Form";
import React, {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

function App() {

  const [todos, setTodos] = useState( [
    {
      title: "Sport",
      text: "Do running training",
      status: "In progress",
      key : generateUniqueID()
    },
    {
      title: "Call dad",
      text: "Wish him his birthday",
      status: "Done",
      key: generateUniqueID()
    },
    {
      title: "Cook meal",
      text: "Cook a pizza",
      status: "In progress",
      key: generateUniqueID()
    }
  ]);

  return (
      <section className="vh-100" style={{backgroundColor: '#eee'}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card rounded-3">
                <div className="card-body p-4">

                  <h4 className="text-center my-3 pb-3">To Do App</h4>

                  <Form setTodos={setTodos}/>

                  {todos.map((todo) => (
                          (<Todo title={todo.title} text={todo.text} key={todo.id}/>)
                    ))}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default App;
