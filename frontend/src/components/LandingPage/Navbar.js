import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

import { Link } from "react-router-dom";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { LogoIcon } from "./Icons";

const routeList = [
    {
        href: "#features",
        label: "Features",
    },
    {
        href: "#pricing",
        label: "Pricing",
    },
    {
        href: "#faq",
        label: "FAQ",
    },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full  border-b-slate-700 bg-background">
        <NavigationMenu className="mx-auto">
            <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
                <NavigationMenuItem className="font-bold flex">
                    <a
                        rel="noreferrer noopener"
                        href="/"
                        className="ml-2 font-bold text-xl flex"
                    >
                        <LogoIcon />
                        Concord.
                    </a>
                </NavigationMenuItem>

                {/* mobile */}
                <span className="flex md:hidden">

                    <Sheet
                        open={isOpen}
                        onOpenChange={setIsOpen}
                    >
                        <SheetTrigger className="px-2">
                            <Menu
                                className="flex md:hidden h-5 w-5"
                                onClick={() => setIsOpen(true)}
                            >
                                <span className="sr-only">Menu Icon</span>
                            </Menu>
                        </SheetTrigger>

                        <SheetContent side={"left"}>
                            <SheetHeader>
                                <SheetTitle className="font-bold text-xl">
                                    Shadcn/React
                                </SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                                {routeList.map(({ href, label }) => (
                                    <a
                                        rel="noreferrer noopener"
                                        key={label}
                                        href={href}
                                        onClick={() => setIsOpen(false)}
                                        className={buttonVariants({ variant: "ghost" })}
                                    >
                                        {label}
                                    </a>
                                ))}
                                <Link to = "/dashboard"
                                    className={`w-[110px] border ${buttonVariants({
                                        variant: "secondary",
                                    })}`}
                                >
                                    
                                    Dashboard
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </span>

                {/* desktop */}
                <nav className="hidden md:flex gap-2">
                    {routeList.map((route, i) => (
                        <a
                            rel="noreferrer noopener"
                            href={route.href}
                            key={i}
                            className={`text-[17px] ${buttonVariants({
                                variant: "ghost",
                            })}`}
                        >
                            {route.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex gap-2">
                    <Link to = "/dashboard"
                        className={`border ${buttonVariants({ variant: "secondary" })}`}
                    >
                        Dashboard
                    </Link>
                    <Link to = "/login"
                        className={`border ${buttonVariants({ variant: "primary" })}`}
                    >
                        Log Out
                    </Link>

                </div>
            </NavigationMenuList>
        </NavigationMenu>
    </header>
);
};
