import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <header className='max-w-6xl mx-auto px-4 sm:px-8 py-6'>
        {/* <Image src={logo} alt="logo" /> */}
        Hello
      </header>
      <section className='max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center'>
        <div>
          <h1 className='capitalize text-4xl md:text-7xl font-bold'>
            job <span className='text-primary'>tracking</span> app
          </h1>
          <p className='leading-loose max-w-md mt-4'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            excepturi quia, soluta enim veritatis ullam sunt debitis cumque modi
            provident, eius commodi fugiat deserunt magnam natus corporis, nisi
            quidem! Alias.
          </p>
          <Button asChild className='mt-4'>
            <Link href='add-job'>Get Started</Link>
          </Button>
        </div>
        {/* <Image src={landingImage} alt="landing" className="hidden lg:block" /> */}
        Hello
      </section>
    </main>
  );
}