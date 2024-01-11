import Button from "."
import { Icon } from "@iconify/react"

const SearchButton = () => {
    return(
        <Button classname="flex justify-between items-center gap-2 font-medium hover:bg-slate-100">
        <Icon icon="iconoir:search" width={20} />
        Search products...
        </Button>
    )
}

export default SearchButton;