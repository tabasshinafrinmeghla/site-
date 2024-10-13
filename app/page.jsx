
// social site linkup 
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container max-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div>
            <span className="text-xl" > Software Developer</span>
            <h1 className="h1"> Hello <br /> I am  <span className="text-teal-500">Meghla</span>


              {/* A highly motivated software developer with experience in building dynamic web applications using technologies like JavaScript, React, Node.js, and MongoDB. Skilled in problem-solving, writing clean code, and collaborating with cross-functional teams to deliver scalable and efficient solutions. */}
            </h1>
            <p className="max-w-500px mb-9  ">a dedicated and detail-oriented professional with a passion for continuous learning and growth in the tech industry.</p>
            <div className="flex flex-col xl:flex-row items-center gap-8 ">
              <Button variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 rounded-full "
              >
                <span>Access Resume</span>
                {/* <FileDownload></FileDownload> */}
                <FiDownload className="text-xl " />
              </Button>
              <div className="mb-8 xl:mb-0  ">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-teal-500 hover:text-primary hover:transition-all duration-500 " />
              </div>
            </div>

          </div>
          <div>
            <Photo></Photo>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Home;

