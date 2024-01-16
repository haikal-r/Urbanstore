import Button from "."
import { Icon } from "@iconify/react"

const SearchButton = () => {
    return(
        <Button classname="flex justify-between items-center gap-2  hover:bg-slate-100">
        <Icon icon="iconoir:search" width={20} />
        <p className="font-medium hidden sm:block">Search products...</p>
        </Button>
    )
}

export default SearchButton;