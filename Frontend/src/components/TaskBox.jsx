import { useState } from "react";
import { useEffect } from "react";
import {
  getTasks,
  addTask as saveTask,
  deleteTask as removeTask,
  updateTask as editTask,
} from "../services/todoservice";

const colors = [
  { name: 'green', value: '#A2E9A9' },
  { name: 'orange', value: '#F7D7C4' },
  { name: 'pink', value: '#FFA9B7' },
  { name: 'yellow', value: '#FFEB9C' },
  { name: 'blue', value: '#A3E2FF' },
  { name: 'purple', value: '#BA93FF' },
]

export default function TaskBox() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('2026-10-12')
  const [time, setTime] = useState('09:00')
  const [color, setColor] = useState(colors[0].value);
  const [tasks, setTask] = useState([]);
  const [editText, setEditText] = useState('');
  const [editId, setEditId] = useState(null);
  const [visible, isVisible] = useState(false);


  async function addTask() {
    if (!title.trim()) return
    const savedTask = await saveTask(title.trim(),color,date,time);
 setTask([
    ...tasks,
    {
      id: savedTask.id,
      title: savedTask.content,
      color: color,
      date: date,
      time: time,
    },
 ]);
    setTitle("");
  }

  async function deleteTask(id) {
    await removeTask(id);
    setTask(tasks.filter((task) => task.id !== id));
  }

async function updateTask(id,title) {
  const editedTask = await editTask(id, title);
  setTask(tasks.map(
    (task) => task.id === id
      ? { ...task, title: editedTask.content } : task
  ),
  );
  setTitle("");
}
  
  
  function handelEditClick(task) {
    setEditId(task.id);
    setEditText(task.title);
    isVisible(true);
  }

  function handleSaveClick(visible) {
    isVisible(visible);
    setEditId(null);
    console.log(visible)
}

  useEffect(() => {
    async function loadTasks() {
      const data = await getTasks();
      setTask(
        data.map((task) => ({
          id: task.id,
          title: task.content,
          color: task.color,
          time: task.time,
          date:task.date,
        }))
      );
    }

    loadTasks();
  }, []);

  return (
    <>
  
<div className="min-h-screen bg-[#f7efe1] p-3 sm:p-6">
  <section className="relative mx-auto min-h-[660px] max-w-4xl overflow-hidden rounded-[28px] border border-[#d9cdbb] bg-[#fffaf1] p-6 shadow-[0_3px_0_#d9cdbb] sm:p-8">

    <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#ffd8bf] opacity-80 blur-3xl" />

    <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-[#c0edb7] opacity-80 blur-3xl" />

    <div className="relative flex w-full items-center justify-between gap-4 text-center">

      <div className="flex flex-col gap-1.5 text-left">
        <h1 className="font-bold">New Task</h1>

        <span>
          What's the one thing that would make today great?
        </span>
      </div>

      <button className="rounded-3xl bg-blue-950 px-5 text-amber-50">
        Focus
      </button>

    </div>

    <div className="relative mt-8">
      <label className="mb-2 block font-mono text-[15px]">
        TASK
      </label>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
        placeholder="Write a tiny intention..."
        className="mb-6 h-[60px] w-full rounded-full border border-[#d9cdbb] bg-[#f8f2e7] px-5 text-base outline-none transition focus:border-[#b99a79] focus:ring-2 focus:ring-[#e8d8c5]"
            />
            
    </div>
          <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
            <label>
              Time
            </label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
                className="h-12 w-full rounded-full border border-[#d9cdbb] bg-[#f8f2e7] px-4 outline-none focus:border-[#b99a79]"
            >
              </input>
            </div>

             <div>
            <label>
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
                className="h-12 w-full rounded-full border border-[#d9cdbb] bg-[#f8f2e7] px-4 outline-none focus:border-[#b99a79]"
            >
              </input>
            </div>


            <div className="flex flex-col gap-5 mt-2 ">

                          <div>
              <button
            type="button"
            onClick={addTask}
            className="rounded-full bg-[#17100c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#49352a] active:scale-95 hover:cursor-pointer"
          >
            + &nbsp; Add task
            </button>
            </div>
            
              
            <div>
             <label className="mb-3 block font-mono text-[10px]">
                COLOR
              </label>
           <div className="mb-7 flex gap-2">
            {colors.map((item) => (
              <button
                key={item.name}
                type="button"
                aria-label={item.name}
                title={item.name}
                onClick={() => setColor(item.value)}
                className={`h-9 w-9 rounded-full border ${
                  color === item.value
                    ? 'scale-105 border-[#241b17] ring-1 ring-[#241b17]'
                    : 'border-[#d9cdbb] hover:scale-105'
                }`}
                style={{ backgroundColor: item.value }}
              />
            ))}
              </div></div></div>
            <div></div>
            
              <div className="flex flex-col gap-4 w-[700px]">
             
              <label className="font-semibold">
                  %Preview
              </label>
              <div
              className="w-[310px] flex flex-col md:w-full  md:flex-row min-w-0 rounded-2xl p-2 justify-between"
                style={{ backgroundColor: color }}
              >
                <input 
                className="flex-1 min-w-0 outline-none outline-1 rounded-2xl py-3 px-3"
                  value={title}
                  placeholder="Write Something and it'll appear here" 
                >  
              </input>
               <span className="font-bold text-[12px] p-4">
                {date.slice(0).replace('/', '/')} in {time.slice(0)}
               </span>
              </div>
               
              <div>
                <div className="relative mt-8">
  <h2 className="mb-4 text-xl font-bold text-[#241b17]">
    My TodoList
  </h2>

  <div className="flex flex-col gap-3">
   
{tasks.map((task) => (
  <div
    key={task.id}
    style={{ backgroundColor: task.color }}
    className="w-[280px] flex flex-col md:w-full md:flex-row   justify-between rounded-2xl border border-[#d9cdbb] bg-[#f8f2e7] p-3"
  >
    {editId === task.id ? (
      <input
        className="outline-none border border-amber-400 rounded-2xl p-3 "
        type="text"
        value={editText}
        onChange={(e)=>setEditText(e.target.value)}></input>
    ) : (
        <span className="px-2 py-3">{task.title}</span>
    )
  
  }
        <span className=" text-xs p-4">
          {task.date} | {task.time}
        </span>
    
    <div className="flex gap-4">
     
      <button
      onClick={() => deleteTask(task.id)}
      className="rounded-full bg-red-100 px-5 py-1 text-sm text-red-700 hover:bg-red-200 hover:cursor-pointer"
    >
      Delete
      </button>
      
      {(isVisible&&editId==task.id) ? (
        <button
          onClick={() => { updateTask(task.id, editText), handleSaveClick(false) }}
          className="rounded-full bg-blue-100 px-6 py-1 text-sm text-blue-700 hover:bg-blue-200 hover:cursor-pointer"
  >
        save
      </button>
      ) : (
           <button
        onClick={()=>handelEditClick(task)}
        className="rounded-full bg-pink-100 px-6 py-1 text-sm text-pink-700 hover:bg-pink-200 hover:cursor-pointer"

      >
        Edit
      </button>
      )
   
  }
      
    </div>
   
  </div>
))}
        
  </div>
              </div>
            </div>
            
           </div>
            
          </div>
  </section>
</div>

    </>
  );
}
