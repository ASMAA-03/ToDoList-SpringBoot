import Calender from "../components/Calender";
import TaskBox from "../components/TaskBox";
import DailyTasks from "../components/DailyTasks";
function Home() {
  return (
    <div className="min-h-screen flex  bg-[#f7efe1]  sm:p-8 lg:p-8">
      <div className="flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-start mx-auto">
        <div className="w-full lg:flex-1">
          <TaskBox />
        </div>

        <div className="w-full rounded-[28px] border border-[#d9cdbb] bg-[#fffaf1]  shadow-sm lg:w-[350px] lg:shrink-0 flex  flex-col justify-evenly h-screen items-center mt-5">
          <Calender />
          <DailyTasks/>
        </div>

         <div className="block lg:hidden m-auto h-fit w-full rounded-2xl bg-amber-100 p-4 text-center shadow-sm">
      <p className="text-lg font-bold text-amber-950">
        ✨ لا تقل لن استطيع لا تقل هذا محال وانطلق قبل الجميع لون الدنيا تعال ✨
      </p>
      <p className="mt-1 text-sm text-amber-800">
        Spacetoon memories 🎶
      </p>
</div>


      </div>
      <div className="hidden lg:sticky lg:top-8 lg:block m-auto h-fit w-full rounded-2xl bg-amber-100 p-4 text-center shadow-sm lg:max-w-[220px]">
      <p className="text-lg font-bold text-amber-950">
        ✨ لا تقل لن استطيع لا تقل هذا محال وانطلق قبل الجميع لون الدنيا تعال   ✨
      </p>
      <p className="mt-1 text-sm text-amber-800">
        Spacetoon memories 🎶
      </p>
</div>
    </div>
  );
}

export default Home;
