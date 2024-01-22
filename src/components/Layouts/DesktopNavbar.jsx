import { Link } from "react-router-dom";
import { Landmark } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from '../ui/navigation-menu';
import { ListItem } from "./ListItem";

const DesktopNavbar = () => {
  return (
    <div className="hidden sm:flex gap-x-4 items-center">
      <Link to="/" className="flex items-center gap-1 md:gap-2">
        <Landmark width={21} />
        UrbanStore
      </Link>
        <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
            <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2'>
                <ListItem href='/products/category/electronics' title='Electronics'>
                  Explore the skateboards category
                </ListItem>
                <ListItem href='/products/category/jewelery' title='Jewelery'>
                  Explore the clothing category
                </ListItem>
                <ListItem href="/products/category/men's clothing" title='Mens Clothing'>
                  Explore the shoes category
                </ListItem>
                <ListItem href="/products/category/women's clothing" title='Womens Clothing'>
                  Explore the accessories category
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
