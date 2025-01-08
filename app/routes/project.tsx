import Badge from "~/components/badge";
import My_project from "~/components/my_project";

export default function Project() {
  return (
    <>
      <div className="mockup-browser bg-base-300 border h-screen w-screen">
        <div className="mockup-browser-toolbar">
          <div className="input">https://gusz.my.id/Project</div>
        </div>
        <div className="bg-base-200 flex justify-center gap-6 px-4 py-4 w-full">
          <My_project />
        </div>
        <Badge />
      </div>
    </>
  );
}
