"use client";

import Navigation from "@/components/home/Navigation";
import Main from "@/components/home/Main";
import { useState } from "react";

export default function Home() {
  const [var_counter, set_var_counter] = useState(0);
  // let var_counter = 2;
  const list = [
    { id: 1, value: "content 1" },
    { id: 2, value: "content 2" },
    { id: 3, value: "content 3" },
    { id: 4, value: "content 4" },
  ];
  function myHandleClick() {
    // set_var_counter(var_counter + 1)
    set_var_counter((c) => c + 1);
    set_var_counter((c) => c + 1);
    set_var_counter((c) => c + 1);
    // var_counter += 1;
    alert("clicked" + var_counter);
  }
  return (
    <div className="bg-yellow-500 p-10">
      <button onClick={myHandleClick}>button 按钮</button>
      <Navigation />
      <Main myCounter={var_counter} />
      counter: {var_counter}
      {var_counter === 0 ? <p>计数器没有启动</p> : <p>计数器: {var_counter}</p>}
      <ul>
        {list.map((item) => {
          return <li key={item.id}>内容包含: {item.value}</li>;
        })}
      </ul>
    </div>
  );
}
