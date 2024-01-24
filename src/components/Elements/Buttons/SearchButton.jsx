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
import { Fragment, useEffect, useState, useCallback } from "react"
import { getProducts } from "@/services/product.service"
import { useNavigate } from "react-router-dom"

const SearchButton = () => {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [data, setData] = useState([])
  const category = Array.from(new Set(data.map((product => product.category))));
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen((open) => !open)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

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

  const handleSelect = useCallback((callback) => {
    setOpen(false)
    callback
  }, [])

    return(
      <Fragment>
        <Button 
        onClick={() => setOpen(open => !open)}
        classname="flex justify-between items-center gap-2 hover:bg-slate-100">
        <Icon icon="iconoir:search" width={20} />
        <p className="font-medium hidden md:block">Search products...</p>
        </Button>
        <CommandDialog position="top" open={open} onOpenChange={setOpen}>
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
            {category.map((category) => {
              return(
                <CommandGroup key={category} heading={category}>
                {data
                .filter(product => product.category === category)
                .map(product => (
                  <CommandItem 
                    key={product.id}
                    onSelect={() => handleSelect(navigate(`/product/${product.id}`))}
                  >
                    {product.title}
                  </CommandItem>
                ))}
              </CommandGroup>
              )
            })}
          </CommandList>
          )}
        </CommandDialog>
      </Fragment>

    )
}

export default SearchButton;