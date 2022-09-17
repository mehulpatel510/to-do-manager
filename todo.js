const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
      // Write the date check condition here and return the array of overdue items accordingly.
      // FILL YOUR CODE HERE
      return all.filter((todoItem) => {
        return todoItem.dueDate < today;
      });
    }
  
    const dueToday = () => {
      // Write the date check condition here and return the array of todo items that are due today accordingly.
      // FILL YOUR CODE HERE
      return all.filter((todoItem) => {
        return todoItem.dueDate === today;
      });
    }
  
    const dueLater = () => {
      // Write the date check condition here and return the array of todo items that are due later accordingly.
      // FILL YOUR CODE HERE
      return all.filter((todoItem) => {
        return todoItem.dueDate > today;
      });
    }
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string as per the format given above.
      // FILL YOUR CODE HERE
      return list.map((todoItem) => {
        statusString = todoItem.completed ? "[x]" : "[ ]";
        dateString = todoItem.dueDate == today ? "" : todoItem.dueDate;
        return `${statusString} ${todoItem.title} ${dateString}`;
      })
      .join("\n");
      
    }
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }
  
  module.exports = todoList;

  todoList();
  