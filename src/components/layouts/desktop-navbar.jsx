import { Link } from "react-router-dom";
import { Landmark } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from '../ui/navigation-menu';
import { ListItem } from "../ui/list-item";

const DesktopNavbar = () => {
  return (
    <div className="hidden md:flex gap-x-4 items-center">
      <Link to="/" className="flex items-center gap-1 md:gap-2">
        <Landmark width={19} />
        UrbanStore
      </Link>
        <NavigationMenu>
        <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Lobby</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Landmark className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      UrbanStore
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground font-normal">
                      An open source ecommerce skateshop built with everything new in Next.js
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href='/products' title='Products'>
                  All the products we have to offer
                </ListItem>
                <ListItem href='/#categories' title='Categories'>
                  See all categories we have
                </ListItem>
                <ListItem href='/dashboard/stores' title='Create store'>
                  Create store and start selling products
                </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
            <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2'>
                <ListItem href='/category/electronics' title='Electronics'>
                  Explore the electronics category
                </ListItem>
                <ListItem href='/category/clothing' title='Clothing'>
                  Explore the clothing category
                </ListItem>
                <ListItem href="/category/accessories" title='Accessories'>
                  Explore the accessories category
                </ListItem>
                <ListItem href="/category/sports" title='Sports'>
                  Explore the sports category
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>

  );
};

export default DesktopNavbar;
