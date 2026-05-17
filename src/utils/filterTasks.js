function filterTasks(tasks, filter) {
  if (filter === 'completed') {
    return tasks.filter((task) => task.completed);
  }

  if (filter === 'incomplete') {
    return tasks.filter((task) => !task.completed);
  }

  return tasks;
}

export default filterTasks;
