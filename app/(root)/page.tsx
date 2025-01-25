import { FlickeringGrid } from "@/components/ui/flickering-grid";

const Root = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden ">
      {/* Background Flickering Grid */}
      <FlickeringGrid
        className="dark:block hidden absolute inset-0 z-0 -top-60 -left-200 dark:[mask-image:radial-gradient(450px_circle_at_center,white,transparent)] [mask-image:radial-gradient(450px_circle_at_center,black,transparent)]"
        gridGap={6}
        color=" green"
        maxOpacity={0.5}
        flickerChance={1}
        height={800}
        width={800}
      />

      {/* Foreground Content */}
      <div
        id="content"
        className="relative z-10  mx-auto mb-16 flex max-w-2xl flex-col items-center justify-center"
      >
        <h1 className="text-4xl font-bold bg-clip-text light:bg-white/100 light:text-black dark:bg-black/100 dark:text-white  ">Welcome to the Binary Grid</h1>
        <p className="mt-4 text-lg text-center">
          This is a demo of a flickering binary grid. The text content is overlaid
          on top of the animated grid.
        </p>
        <p className="mt-4 text-lg text-center">
          This is a demo of a flickering binary grid. The text content is overlaid
          on top of the animated grid.
        </p>
        <p className="mt-4 text-lg text-center">
          This is a demo of a flickering binary grid. The text content is overlaid
          on top of the animated grid.
        </p>
      </div>
    </div>
  );
};

export default Root;
