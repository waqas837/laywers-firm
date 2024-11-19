export default function Loading() {
  return (
    <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md h-1 bg-gray-300 overflow-hidden relative">
        <div className="h-full w-1/3 bg-yellow-500 animate-[slide_1.5s_linear_infinite]"></div>
      </div>
    </div>
  );
}
