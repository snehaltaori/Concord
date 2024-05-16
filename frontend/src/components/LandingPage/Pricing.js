import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Check } from "lucide-react";

const PopularPlanType = {
    NO: 0,
    YES: 1,
};

const pricingList = [
    {
        title: "Demo Version",
        popular: PopularPlanType.NO,
        price: 0,
        description:
            "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
        buttonText: "Start Free Trial",
        benefitList: [
            "100+ Entities",
            "4 GB Storage",
            "Upto 6 rooms",
            "Community support",
            "Setup Assistance",
        ],
    },
    {
        title: "Business",
        popular: PopularPlanType.YES,
        price: 100,
        description:
            "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
        buttonText: "Get Started",
        benefitList: [
            "4000+ Entities",
            "1024 GB Storage",
            "Upto 100 rooms",
            "Priority support",
            "AI Enabled",
        ],
    },
    {
        title: "Organisation",
        popular: PopularPlanType.NO,
        price: 400,
        description:
            "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
        buttonText: "Contact US",
        benefitList: [
            "Unlimited Entities",
            "Unlimited Storage",
            "Unlimited rooms",
            "Grow with Concord",
            "Access to all features",
        ],
    },
];

export const Pricing = () => {
return (
    <section id="pricing" className="container py-24 sm:py-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
            Subscribe to  
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                {" "}
                Concord{" "}
            </span>
            now.
        </h2>
        <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
            The more you wait, the more other organisations grow.
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingList.map((pricing) => (
                <Card
                    key={pricing.title}
                    className={
                        pricing.popular === PopularPlanType.YES
                            ? "drop-shadow-xl shadow-white/10"
                            : ""
                    }
                >
                    <CardHeader>
                        <CardTitle className="flex item-center justify-between">
                            {pricing.title}
                            {pricing.popular === PopularPlanType.YES ? (
                                <Badge variant="secondary" className="text-sm text-primary">
                                    Most popular
                                </Badge>
                            ) : null}
                        </CardTitle>
                        <div>
                            <span className="text-3xl font-bold">${pricing.price}</span>
                            <span className="text-muted-foreground"> /month</span>
                        </div>

                        <CardDescription>{pricing.description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                        <Button className="w-full">{pricing.buttonText}</Button>
                    </CardContent>

                    <hr className="w-4/5 m-auto mb-4" />

                    <CardFooter className="flex">
                        <div className="space-y-4">
                            {pricing.benefitList.map((benefit) => (
                                <span key={benefit} className="flex">
                                    <Check className="text-green-500" />{" "}
                                    <h3 className="ml-2">{benefit}</h3>
                                </span>
                            ))}
                        </div>
                    </CardFooter>
                </Card>
            ))}
        </div>
    </section>
);
};
