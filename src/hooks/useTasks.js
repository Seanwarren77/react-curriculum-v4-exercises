import { useEffect, useState } from 'react';

function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTasks() {
      setLoading(true);

      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos?_limit=5'
      );

      const data = await response.json();

      setTasks(data);

      setLoading(false);
    }

    fetchTasks();
  }, []);

  return { tasks, loading };
}

export default useTasks;
