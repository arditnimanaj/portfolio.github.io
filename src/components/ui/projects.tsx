import { projects } from "@/data/data";
import { Heading1 } from "lucide-react";

export default function Projects() {
  return (
    <div className="grid grid-cols-3">
      {projects.map((item) => (
        <div key={item.id}>
            <h1>{item.name}</h1>
            {/* //image comes here */}
            {item.technologies.map((index,item)=>(<div key={index}>{item}</div>))}
        </div>
      ))}
    </div>
  );
}
