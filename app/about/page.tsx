// app/about/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Me",
  description: "Software engineer and CEO of Convbase",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen dark:text-white text-black">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-2xl font-bold mb-8">About</h1>

        <div className="grid md:grid-cols-[1fr,300px] gap-8 dark:text-zinc-400 text-black">
          <div className="space-y-6">
            <p className="text-lg">
            I'm a software engineer and the CEO of Convbase, hailing from Monte Aprazível, Brazil. My journey into technology began early—immersed in creating games and websites as a teen, I quickly discovered the power of the Web and open source to shape new worlds.
            </p>

            <p className="text-lg">
              At 18, I joined the{" "}
              <a
                href="https://www.genesyssoft.com.br"
                className="underline cursor-pointer"
                target="_blank"
              >
                Genesys
              </a>{" "}
              core team and landed my first full-time role as a frontend
              engineer. That pivotal experience set the stage for founding my
              first company, Next, in São Jose do Rio Preto. As a web
              development agency with digital marketing ambitions, Next was
              where I honed my skills, absorbed industry insights, and
              identified a unique market opportunity.
            </p>

            <p className="text-lg">
              Driven by that vision, I ventured into the world of online
              advertising to create a network that is fast, intuitive, and
              transparent, with a clear focus on empowering publishers. This
              pursuit led to the creation of <a
                href="https://www.convbase.com/blog/blackbox-a-deep-dive-into-the-publishers-algorithmic-power-tool"
                className="underline cursor-pointer"
                target="_blank"
              >
                Blackbox 
              </a> and <a
                href="https://www.convbase.com"
                className="underline cursor-pointer"
                target="_blank"
              >
               Convbase.
              </a>
            </p>

            <p className="text-lg">
              Today, our platform—currently in early access—is already bridging
              gaps and helping companies across Brazil and the United States navigate the
              digital ad landscape with confidence. Every step of my journey has
              been about harnessing innovation to transform challenges into
              opportunities, and with Convbase, I'm proud to keep that spirit
              alive.
            </p>
          </div>

          <div className="order-first md:order-last">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mx-auto">
              <Image
                src="https://ynncikcuvuzbykdnvwia.supabase.co/storage/v1/object/public/about//mee%20(1).jpg"
                alt="Profile picture"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 192px, 256px"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
