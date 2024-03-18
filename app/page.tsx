import * as React from "react";
import MainInterface from "@/components/mainInterface";



export default function Home() {

  return (
    <main className="mx-5 md:max-w-screen-xl md:mx-auto pt-8 ">
      <div className="grid md:grid-cols-2 gap-8">
          <MainInterface/>
      </div>
    </main>
  );
}
