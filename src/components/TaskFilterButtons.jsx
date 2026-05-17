function TaskFilterButtons({ currentFilter, onSetFilter }) {
  return (
    <div>
      <button onClick={() => onSetFilter('all')}>All</button>

      <button onClick={() => onSetFilter('completed')}>Completed</button>

      <button onClick={() => onSetFilter('incomplete')}>Incomplete</button>
    </div>
  );
}

export default TaskFilterButtons;
