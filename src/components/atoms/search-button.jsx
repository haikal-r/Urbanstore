import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Skeleton } from "@/components/ui/skeleton";
import { useDebounce } from "@/features/use-debounce";
import { getApiResponse } from "@/lib/api";
import { cn } from "@/lib/utils";
import {
  Fragment,
  useCallback,
  useEffect,
  useState,
  useTransition,
} from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const SearchButton = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [isPending, startTransition] = useTransition();
  const debounced = useDebounce(value, 500);
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
    if (!open) {
      setValue("");
    }
  }, [open]);

  useEffect(() => {
    if (value == "") {
      return;
    }

    const fetchProducts = async () => {
      setIsLoading(true);
      const response = await getApiResponse(
        "products/search",
        `query=${debounced}`
      );
      setData(response);
      setIsLoading(false);
    };

    startTransition(() => fetchProducts());

    return () => setData(null);
  }, [debounced]);

  const handleSelect = useCallback((callback) => {
    setOpen(false);
    callback;
  }, []);

  return (
    <Fragment>
      <Button
        variant="outline"
        onClick={() => setOpen((open) => !open)}
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2 shadow-sm"
        size="sm"
      >
        <CiSearch
          className="xl:mr-2 text-foreground text-xl"
          aria-hidden="true"
        />
        <span className="font-medium text-foreground hidden xl:inline-flex">
          Search products...
        </span>
        <kbd className="pointer-events-none absolute z-10 right-2 top-2 hidden h-6 select-none items-center gap-1 rounded-sm border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 xl:flex">
          <abbr title="Control" className="no-underline">
            Ctrl
          </abbr>
          K
        </kbd>
      </Button>
      <CommandDialog position="top" open={open} onOpenChange={setOpen}>
        <CommandInput
          value={value}
          onValueChange={setValue}
          placeholder="Type a command or search..."
        />
        <CommandEmpty
          className={cn(
            isPending || isLoading ? "hidden" : "py-6 text-center text-sm"
          )}
        >
          No results found.
        </CommandEmpty>

        {isPending || isLoading ? (
          <div className="space-y-1 overflow-hidden px-1 py-2">
            <Skeleton className="h-5 w-1/4 rounded" />
            <Skeleton className="h-8 rounded-sm" />
            <Skeleton className="h-8 rounded-sm" />
          </div>
        ) : (
          <CommandList>
            {data?.map((item) => {
              return (
                <CommandGroup key={item.category} heading={item.category}>
                  {item.products.map((product) => (
                    <CommandItem
                      key={product.id}
                      onSelect={() =>
                        handleSelect(navigate(`/product/${product.uuid}`))
                      }
                    >
                      {product.name}
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
