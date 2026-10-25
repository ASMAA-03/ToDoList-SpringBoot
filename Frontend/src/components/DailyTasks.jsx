
import { useEffect, useState } from "react";
import { addTask as addDailyTask, getTasks } from "../services/dailytaskservice";

export default function DailyTasks() {
  
  const [title, setTitle] = useState('');
  const [task, setTask] = useState([]);

  async function addTask() {
    if (!title.trim()) {
      return
    } else {
      const add = await addDailyTask(title);
      setTask([...task, { id: add.id, title: add.title }])
      setTitle("");

    }
  }
  useEffect(() =>{
    async function loadTasks() {
      const data = await getTasks();
      setTask(
        data.map((task) => ({
          id: task.id,
          title: task.title,
        })));
    }
    loadTasks();
},[]);
 

  return (
    <>
      <div className="bg-[#f8e8ce] min-h-fit w-80 border border-amber-700/30 rounded-2xl py-4 px-2">
        <div className="flex gap-2 p-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Write Your Daily Habit"
            className="border border-amber-950/25 rounded-2xl p-2 outline-none hover:cursor-pointer hover:border-amber-950 delay-150"
          >
          </input>
          <button
            onClick={addTask}
            className="bg-black rounded-2xl px-4 text-red-50 font-bold hover:cursor-pointer hover:opacity-85">
            +Add
          </button>

        </div>
        {task.map((task) => (
          <div
            key={task.id}
            className="bg-amber-100  mb-1 text-black w-[280px] flex flex-col md:w-full md:flex-row   justify-between rounded-2xl border border-[#d9cdbb] bg-[#f8f2e7] py-3 px-2"
          >{task.title}
</div>
          
))}
      
      </div>


    </>
  );


}