import { Link } from "react-router-dom";
import { Landmark } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '../ui/navigation-menu';
import { ListItem } from "./ListItem";
import { useEffect, useState } from "react";
import { getCategory } from "@/services/category.service";

const DesktopNavbar = () => {
  // const [category, setCategory] = useState([]);

  // useEffect(() => {
  //   getCategory((data) => {
  //     setCategory(data)
  //   })
  // },[])

  return (
    <div className="hidden md:flex gap-x-4 items-center">
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
                <ListItem href='/products?category=electronics' title='Electronics'>
                  Explore the skateboards category
                </ListItem>
                <ListItem href='/products?category=jewelery' title='Jewelery'>
                  Explore the clothing category
                </ListItem>
                <ListItem href='/products?category=mens-clothing' title='Mens Clothing'>
                  Explore the shoes category
                </ListItem>
                <ListItem href='/products?category=womens-clothing' title='Womens Clothing'>
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
