import { Icon } from "@iconify/react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Fragment, useEffect, useState, useCallback } from "react";
import { getProducts } from "@/services/product.service";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SearchButton = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const category = Array.from(new Set(data.map((product) => product.category)));
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setData(data);
    });
  }, []);

  useEffect(() => {
    if (!open) {
      setQuery("");
    }
  }, [open]);

  const handleSelect = useCallback((callback) => {
    setOpen(false);
    callback;
  }, []);

  return (
    <Fragment>
      <Button
        variant="outline"
        onClick={() => setOpen((open) => !open)}
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2 "
      >
        <Icon
          icon="iconoir:search"
          width={17}
          className="xl:mr-2 text-slate-500 "
          aria-hidden="true"
        />
        <span className="font-medium text-slate-500 hidden xl:inline-flex">
          Search products...
        </span>
        <kbd className="pointer-events-none absolute z-10 right-2 top-2 hidden h-6 select-none items-center gap-1 rounded-full border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 xl:flex">
          <abbr title="Control" className="no-underline">
            Ctrl
          </abbr>
          K
        </kbd>
      </Button>
      <CommandDialog position="top" open={open} onOpenChange={setOpen}>
        <CommandInput
          value={query}
          onValueChange={setQuery}
          placeholder="Type a command or search..."
        />
        <CommandEmpty
          className={query == "" ? "hidden" : "py-6 text-center text-sm"}
        >
          No results found.
        </CommandEmpty>
        {query == "" ? (
          <div></div>
        ) : (
          <CommandList>
            {category.map((category) => {
              return (
                <CommandGroup key={category} heading={category}>
                  {data
                    .filter((product) => product.category === category)
                    .map((product) => (
                      <CommandItem
                        key={product.id}
                        onSelect={() =>
                          handleSelect(navigate(`/product/${product.id}`))
                        }
                      >
                        {product.title}
                      </CommandItem>
                    ))}
                </CommandGroup>
              );
            })}
          </CommandList>
        )}
      </CommandDialog>
    </Fragment>
  );
};

export default SearchButton;
