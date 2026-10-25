function Calender() {
  const today = new Date();
  const daysName = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayInMonth = new Date(year, month, 1).getDay();

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }
  const emptyDays = [];
  for (let i = 0; i < firstDayInMonth; i++){
    emptyDays.push(i);
  }

  return (
    <section className="flex justify-center p-2 w-full ">
      <div className="w-full max-w-md rounded-2xl border border-[#d4b27f] bg-[#feefd3] p-5 shadow-sm">
        <h1 className="p-2.5 text-2xl font-bold text-[#241b17]">
          {today.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </h1>

        <div className="grid grid-cols-7 gap-2 text-center">
          {daysName.map((dayname) => (
            <div
              key={dayname}
              className="py-2 text-sm font-semibold text-[#857568]"
            >
              {dayname}
            </div>
          ))}

          {emptyDays.map((day) => (
            <div key={day}></div>
          ))}

          {days.map((day) => (
            <div
              key={day}
              className={`flex aspect-square items-center justify-center rounded-lg text-sm transition ${
                day === today.getDate()
                  ? "bg-amber-950 font-bold text-white"
                  : "text-[#49352a] hover:bg-[#c6ad7d]"
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Calender;