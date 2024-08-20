import { ShoppingBag, Store } from "lucide-react";

const iconClass = 'mr-2 h-4 w-4'

export const MENU_ITEMS = [
  {
    title: 'Orders',
    href: '/dashboard/orders',
    icon: <ShoppingBag className={iconClass} />
  },
  {
    title: 'Stores',
    href: '/dashboard/stores',
    icon: <Store className={iconClass} />
  },
]