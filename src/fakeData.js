import axios from 'axios';
import casual from 'casual';

const createTasks = async () => {
  try {
    for (let i = 0; i < 2000000; i++) {
      const taskData = {
        name: casual.word,
        startDate: casual.date(),
        deadline: casual.date(),
        responsible: casual.full_name,
        projectId: Math.floor(Math.random() * 100) + 1
      };

      await axios.post('http://localhost:3000/api/tasks', taskData);
      console.log(`Tarea ${i + 1} creada`);
    }

    console.log('Proceso completado');
  } catch (error) {
    console.error('Error al crear las tareas:', error.response.data);
  }
};

createTasks();