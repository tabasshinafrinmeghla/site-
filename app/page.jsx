import { Button } from "@/components/ui/button";
import { FileDownIcon } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container max-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div>
            <span className="text-xl" > Software Developer</span>
            <h1 className="h1"> Hello <br /> I am  <span>Meghla</span>


              {/* A highly motivated software developer with experience in building dynamic web applications using technologies like JavaScript, React, Node.js, and MongoDB. Skilled in problem-solving, writing clean code, and collaborating with cross-functional teams to deliver scalable and efficient solutions. */}
            </h1>
            <h4>a dedicated and detail-oriented professional with a passion for continuous learning and growth in the tech industry.</h4>
          </div>
          <div>photo</div>

        </div>
      </div>
    </section>
  )
}

export default Home;

