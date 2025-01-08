import type { MetaFunction } from "@remix-run/node";
import Badge from "~/components/badge";
import Description from "~/components/description";
import My_project from "~/components/my_project";
import Name from "~/components/name";

export const meta: MetaFunction = () => {
  return [
    { title: "PORTOFOLIO" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="mockup-browser bg-base-300 border h-screen w-screen">
      <div className="mockup-browser-toolbar">
        <div className="input">https://gusz.my.id</div>
      </div>
      <div className="bg-base-200 flex-col gap-6 px-4 py-16 w-full h-screen">
        <div className="flex p-4">
          <Name />
        </div>
        <div className="mt-6 p-4 flex-grow">
          <Description />
        </div>
        <div className="bottom-0 mb-0"><Badge /></div>
        
      </div >
      
    </div>
  );
}
