import Calender from "../components/Calender";
import TaskBox from "../components/TaskBox";
import DailyTasks from "../components/DailyTasks";
function Home() {
  return (
    <div className="min-h-screen bg-[#f7efe1]  sm:p-8">
      <div className="flex w-full max-w-7xl flex-col gap-6 lg:flex-row lg:items-start">
        <div className="w-full lg:flex-1">
          <TaskBox />
        </div>

        <div className="w-full rounded-[28px] border border-[#d9cdbb] bg-[#fffaf1]  shadow-sm lg:w-[350px] lg:shrink-0 flex  flex-col justify-evenly h-screen items-center">
          <Calender />
          <DailyTasks/>
        </div>

      </div>
    </div>
  );
}

export default Home;
