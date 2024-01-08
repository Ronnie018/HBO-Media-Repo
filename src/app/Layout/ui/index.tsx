import Devices from "./partials/Devices";
import Navbar from "./partials/Navbar";
import Viewer from "./partials/Viewer";

export default function () {
  return (
    <div className="h-screen bg-blue_dark">
      <Navbar />

      <main className="container mx-auto mt-16 flex flex-wrap gap-16">
        <Devices />
        <Viewer />
      </main>
    </div>
  );
}
