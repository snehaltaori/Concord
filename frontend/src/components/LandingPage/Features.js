import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card.js";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

const features = [
    {
        title: "Begineer Friendly",
        description:
            "Get your organisations up and running in minutes. No coding required!",
        image: image4,
    },
    {
        title: "Intuitive user interface",
        description:
            "Students/Employees can easily navigate through the platform.",
        image: image3,
    },
    {
        title: "AI-Powered insights",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
        image: image,
    },
];

const featureList = [
    "Meetings",
    "Club Events",
    "Time Table",
    "Scheduling",
    "AI Enabled",
    "Privacy",
    "Rooms",
    "Roles Management",
    "Easy",
];

export const Features = () => {
return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
        <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
            Many{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                Great Features
            </span>
        </h2>

        <div className="flex flex-wrap md:justify-center gap-4">
            {featureList.map((feature) => (
                <div key={feature}>
                    <Badge variant="secondary" className="text-sm">
                        {feature}
                    </Badge>
                </div>
            ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(({ title, description, image }) => (
                <Card key={title}>
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                    </CardHeader>

                    <CardContent>{description}</CardContent>

                    <CardFooter>
                        <img
                            src={image}
                            alt="About feature"
                            className="w-[200px] lg:w-[300px] mx-auto"
                        />
                    </CardFooter>
                </Card>
            ))}
        </div>
    </section>
);
};
