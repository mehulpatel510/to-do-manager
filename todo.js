const todoList = () => {
  const all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    // Write the date check condition here and return the array of overdue items accordingly.
    // FILL YOUR CODE HERE
    return all.filter((todoItem) => {
      return todoItem.dueDate < new Date().toLocaleDateString("en-CA");
    });
  };

  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    // FILL YOUR CODE HERE
    return all.filter((todoItem) => {
      return todoItem.dueDate === new Date().toLocaleDateString("en-CA");
    });
  };

  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // FILL YOUR CODE HERE
    return all.filter((todoItem) => {
      return todoItem.dueDate > new Date().toLocaleDateString("en-CA");
    });
  };

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    // FILL YOUR CODE HERE
    return list
      .map((todoItem) => {
        const statusString = todoItem.completed ? "[x]" : "[ ]";
        const dateString =
          todoItem.dueDate == new Date().toLocaleDateString("en-CA")
            ? ""
            : todoItem.dueDate;
        return `${statusString} ${todoItem.title} ${dateString}`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};


module.exports = todoList;