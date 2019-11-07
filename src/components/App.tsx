import * as React from "react";
import {createGlobalStyle} from "styled-components";
import {ReactNode} from "react";
import * as uuid from 'uuid'
import {Hello} from "./Hello";
import ClassCount from "./ClassCount";

const GlobalStyle = createGlobalStyle`
  body {
    background: rgb(200, 200, 200);
  }
`;

interface IProps {
    name: string
}

interface IState {
    currentTask: string
    tasks: Array<ITask>
}

interface ITask {
    id: string
    label: string
    completed: boolean
}

export class App extends React.Component<IProps, IState> {
    constructor(props: Readonly<IProps>) {
        super(props);

        this.state = {
            currentTask: "",
            tasks: []
        }
    }

    handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        this.setState({
            currentTask: "",
            tasks: [
                ...this.state.tasks,
                {id: uuid.v4(), label: this.state.currentTask, completed: false}
            ]
        })
    }

    private deleteTask(id: string): void {
        this.setState({
            currentTask: this.state.currentTask,
            tasks: this.state.tasks.filter((t) => t.id !== id)
        })
    }

    private completeTask(id: string) {
        let task = this.state.tasks.find((t) => t.id === id);
        const idx = this.state.tasks.indexOf(task);

        task = this.state.tasks.splice(idx, 1)[0];
        task.completed = true;

        this.setState({
            tasks: [...this.state.tasks, task]
        })
    }

    renderTasks(): ReactNode {


        return this.state.tasks.map((task: ITask, idx: number) => {
            return <div key={idx}>
                {task.label}
                <button onClick={() => this.deleteTask(task.id)}>Delete</button>
                {<button onClick={() => this.completeTask(task.id)}>{task.completed ? 'Undo' : 'Done'}</button>}
            </div>
        })
    }

    render(): JSX.Element {
        return (
            <div>
                <GlobalStyle/>
                <ClassCount/>
                <Hello compiler="lol" framework="kokol"/>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input type="text" value={this.state.currentTask}
                           onChange={e => this.setState({currentTask: e.target.value})}/>
                    <button type="submit">Davai za zhizn</button>
                </form>
                <section>
                    {this.renderTasks()}
                </section>
            </div>
        );
    }
}
