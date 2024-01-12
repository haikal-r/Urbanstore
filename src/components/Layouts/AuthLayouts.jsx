import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio"

const AuthLayouts = (props) => {
    const { children, title, type } = props;
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-3 min-h-screen overflow-hidden">
            <AspectRatio ratio={16 / 9}>
            <div className="h-full sm:w-screen lg:w-[50vw] w-[33vw] object-fill">
                <img src="/images/auth-layout.jpg" alt="Image" className="absolute inset-0 object-cover h-full w-full" />
                {/* <div className='absolute inset-0 bg-gradient-to-t from-background to-background/60 md:to-background/40' /> */}
            </div>
            </AspectRatio>
            <main className='container absolute top-1/2 col-span-1 flex -translate-y-1/2 items-center md:static md:top-0 md:col-span-2 md:flex md:translate-y-0 lg:col-span-1'>
                {children}
            </main>
        </div>
    )
}

export default AuthLayouts;