import { Button } from "./ui/button.js";
import { buttonVariants } from "./ui/button.js";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-3xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#a8f985ac]  to-[#c1e8239a] text-transparent bg-clip-text md:text-6xl py-{32} animated-gradient">

              Concord.
            </span>{" "}
            <br />
          </h1>{" "}
         
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Manage your organisation with ease. Concord is a platform that helps you
          manage your organisation, meetings, events, and much more.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
        <Link to="/signup">
          <Button className="w-full md:w-1/3">
            
              Sign Up
            
          </Button>
          </Link>

          <Link to="/login" className={`w-full md:w-1/3 ${buttonVariants({variant: "outline",})}`}>
          Login
        </Link>
        </div>
      </div>

      <div className="z-10">
        <HeroCards />
      </div>

      <div className="shadow"></div>
    </section>
  );
};
