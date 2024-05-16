import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

const serviceList = [
    {
      title: "Role Based Access",
      description:
        "Get the best of your team by assigning roles and permissions to each member.",
      icon: <ChartIcon />,
    },
    {
      title: "Monetization",
      description:
        "Monetize your content and get paid for your hard work. We take care of the rest.",
      icon: <WalletIcon />,
    },
    {
      title: "Task Automation",
      description:
        "Automate your tasks and focus on what matters the most. We got your back.",
      icon: <MagnifierIcon />,
    },
  ];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
  <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
    <div>
      <h2 className="text-3xl md:text-4xl font-bold">
         Services By {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        Concord.
        </span>
      </h2>

      <p className="text-muted-foreground text-xl mt-4 mb-8 ">
        Absolutely. No. Compromise. on the services we provide. We make sure you get the best of the best.
      </p>

      <div className="flex flex-col gap-8">
        {serviceList.map(({ icon, title, description }) => (
          <Card key={title}>
            <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
              <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                {icon}
              </div>
              <div>
                <CardTitle>{title}</CardTitle>
                <CardDescription className="text-md mt-2">
                  {description}
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>

    <img
      src={cubeLeg}
      className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
      alt="About services"
    />
  </div>
</section>
  );
};
