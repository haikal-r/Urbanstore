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
                        onClick={() => setIsOpen(false)}
                        href="/dashboard/stores"
                      >
                        Stores
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Lobby</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-y-2 text-muted-foreground">
                      <Link onClick={() => setIsOpen(false)} href="/products">
                        Products
                      </Link>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href="/#categories"
                      >
                        Categories
                      </Link>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href="/dashboard/stores"
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
                      <Link to="/products?category=electronics">
                        Electronics
                      </Link>
                      <Link to="/products?category=jewelery">Jewelery</Link>
                      <Link to="/products?category=mens-clothing">Men's Clothing</Link>
                      <Link to="/products?category=womens-clothing">
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
