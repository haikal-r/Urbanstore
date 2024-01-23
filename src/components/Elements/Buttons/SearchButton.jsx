import Button from "."
import { Icon } from "@iconify/react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Fragment, useEffect, useState } from "react"
import { getProducts } from "@/services/product.service"

const SearchButton = () => {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [data, setData] = useState([])
  const category = Array.from(new Set(data.map((product => product.category))));

  useEffect(() => {
    getProducts(data => {
      setData(data)
    })
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
          <CommandEmpty
            className={query == '' ? 'hidden' : 'py-6 text-center text-sm'}
          >
            No results found.
          </CommandEmpty>
          {query == ''  ? (
            <div>
              
            </div>
          ) : (
          <CommandList>
            {category.map((category) => (
              <CommandGroup key={category} heading={category}>
                {data
                .filter(product => product.category === category)
                .map(product => (
                  <CommandItem key={product.id}>{product.title}</CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
          )}
        </CommandDialog>
      </Fragment>

    )
}

export default SearchButton;