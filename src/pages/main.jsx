import { Button } from "@/components/ui/button";

export default function MainPage() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-4 py-24 text-center md:py-32">
      <span>test</span>
      <p className="font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight">
        An e-commerce skateshop built with everything new in Next.js
      </p>

      <p className="max-w-[42rem] text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        Buy and sell skateboarding gears from independent brands and stores
        around the world with ease
      </p>

      <div className='flex flex-wrap items-center justify-center gap-4'>
        <Button>buy</Button>
        <Button>sell</Button>
      </div>
    </section>
  );
}
