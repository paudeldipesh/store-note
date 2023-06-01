export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        if (task.id) {
            const date = new Date();
            const updatedTasklist = tasklist.map((todo) =>
                todo.id === task.id
                    ? {
                          id: task.id,
                          name: task.name,
                          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
                      }
                    : todo
            );
            setTasklist(updatedTasklist);
            setTask({});
        } else {
            const date = new Date();
            const newTask = {
                id: date.getTime(),
                name: e.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            };
            setTasklist([...tasklist, newTask]);
            setTask({});
        }
    };
    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <div className="form-div">
                    <input
                        type="text"
                        value={task.name || ""}
                        placeholder="add task"
                        name="task"
                        autoComplete="off"
                        maxLength="25"
                        onChange={(e) => setTask({ ...task, name: e.target.value })}
                    />
                </div>
                <button type="submit">{task.id ? "Update" : "Add"}</button>
            </form>
        </section>
    );
};
