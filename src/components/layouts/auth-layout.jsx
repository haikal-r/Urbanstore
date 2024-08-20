import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Landmark } from "lucide-react";
import { useFetchProducts } from "@/features/product/use-fetch-products";

const AuthLayouts = (props) => {
    const { children } = props;
    const { data } = useFetchProducts()
    console.log(data)

    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-3 min-h-screen overflow-hidden">
            <AspectRatio ratio={16 / 9}>
            <div className="h-full sm:w-screen lg:w-[50vw] w-[33vw] object-fill">
                <img src="/images/auth-layout.webp" alt="Image" className="absolute inset-0 object-cover h-full w-full" />
                <div className='absolute inset-0 bg-gradient-to-t from-background to-background/60 md:to-background/5' />
                <Link to="/" className="absolute left-4 top-4 sm:left-8 sm:top-6 z-20 lg:flex items-center text-lg font-bold tracking-tight gap-2 hidden">
                    <Landmark />
                    UrbanShop
                </Link>
            </div>
            </AspectRatio>
            <main className='container absolute top-1/2 col-span-1 flex -translate-y-1/2 items-center justify-center md:static md:top-0 md:col-span-2 md:flex md:translate-y-0 lg:col-span-1'>
                {children}
            </main>
        </div>
    )
}

export default AuthLayouts;