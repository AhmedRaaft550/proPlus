import { Separator } from "@heroui/react";

export default function NotFound() {
  return (
    <div className="flex  justify-center h-screen items-center space-x-4">
      <h2 className="text-red-500 font-semibold text-2xl"> 404</h2>
      <Separator
        orientation="vertical"
        className="w-0.5 h-10 my-auto bg-black"
      />
      <p className="text-2xl font-semibold text-sky-900">Page is not Found</p>
    </div>
  );
}
