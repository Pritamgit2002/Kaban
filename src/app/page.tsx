import Pro from "@/Home/Pro";
import localFont from "next/font/local";

const btn_title = localFont({ src:"../../public/Minal.ttf" });


function App() {
  return (
    <div className="flex flex-col bg-slate-700/95 min-h-[100vh] max-h-max w-full ">
      <span className="w-full flex items-center justify-center text-[60px] pb-6 underline text-neutral-100 " style={btn_title.style}>KanBan Board</span>
      <div className="p-16 bg--500 z-20">
        <Pro />
      </div>
    </div>
  );
}

export default App;
