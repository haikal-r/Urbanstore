import { Menu, Landmark } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { useState } from "react";

const MobileNavbar = () => {
  const[isOpen, setIsOpen] = useState(false)
  const handleOnClick = () => {
    setIsOpen(false)
  }

  return (
    <div className="flex md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side="left">
          <div className="px-2 flex flex-col gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-base font-bold "
              onClick={handleOnClick}
            >
              <Landmark width={19} />
              UrbanStore
            </Link>
            <div className="text-sm">
              <Accordion 
                type='multiple'
                defaultValue={['item-1', 'item-2', 'item-3']}
                className='w-full'>
                <AccordionItem value="item-1">
                  <AccordionTrigger>My Dashboard</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-y-2 text-muted-foreground">
                      <Link
                        onClick={handleOnClick}
                        to="/dashboard/stores"
                      >
                        Stores
                      </Link>
                      <Link
                        onClick={handleOnClick}
                        to="/dashboard/orders"
                      >
                        Orders
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Lobby</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-y-2 text-muted-foreground">
                      <Link onClick={handleOnClick} to="/products">
                        Products
                      </Link>
                      <Link
                        onClick={handleOnClick}
                        to="/#categories"
                      >
                        Categories
                      </Link>
                      <Link
                        onClick={handleOnClick}
                        to="/dashboard/stores"
                      >
                        Create store
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Category</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-y-2 text-muted-foreground">
                      <Link to="/products/category/electronics" onClick={handleOnClick}>
                        Electronics
                      </Link>
                      <Link to="/products/category/jewelery" onClick={handleOnClick}>Jewelery</Link>
                      <Link to="/products/category/men's clothing" onClick={handleOnClick}>Men's Clothing</Link>
                      <Link to="/products/category/women's clothing" onClick={handleOnClick}>
                        Women's Clothing
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
