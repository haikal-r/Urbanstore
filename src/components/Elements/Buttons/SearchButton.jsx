import Button from "."
import { Icon } from "@iconify/react"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Fragment, useEffect, useState, useTransition } from "react"
import { getProducts } from "@/services/product.service"

const SearchButton = () => {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [data, setData] = useState([])
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    // const fetchProduct = () => {
    // }
    getProducts(data => setData(data))

    // startTransition(fetchProduct)
  }, [])

  useEffect(() => {
    if(!open){
      setQuery('')
    }
  }, [open])

    return(
      <Fragment>
        <Button 
        onClick={() => setOpen(open => !open)}
        classname="flex justify-between items-center gap-2 hover:bg-slate-100">
        <Icon icon="iconoir:search" width={20} />
        <p className="font-medium hidden sm:block">Search products...</p>
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput 
            value={query}
            onValueChange={setQuery}
            placeholder="Type a command or search..." 
          />
          <CommandList>
            {data.map((index, product) => {
            <CommandGroup heading={product.category} key={product.category}>
              <CommandItem key={index} value={product.title}>
                <span>{product.title}</span>
              </CommandItem>
            </CommandGroup>
            })}
          </CommandList>
        </CommandDialog>
      </Fragment>

    )
}

export default SearchButton;