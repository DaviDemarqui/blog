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
        <h1 className="text-2xl md:text-2xl font-light mb-8">Who Am I</h1>

        {/* <div className="grid md:grid-cols-[1fr,200px] gap-8 dark:text-zinc-400 text-black"> */}
          <div className="space-y-6 dark:text-zinc-400 text-black">
            <p className="text-lg">
              I'm a software engineer and the CEO of Convbase, originally from
              Monte Aprazível, Brazil. My journey with technology began
              exceptionally early at the age of four thanks to my older brother,
              a tech enthusiast who introduced me to computers and sparked a
              lifelong fascination with building and creating through code. By
              my teens, I was developing games and websites, inspired by the
              ability of the Web and open-source communities to shape entirely
              new digital worlds. That early curiosity quickly evolved into a
              professional path.
            </p>

            <p className="text-lg">
              At 18, I joined the core team at{" "}
              <a
                href="https://www.genesyssoft.com.br"
                className="underline cursor-pointer hover:text-red-400"
                target="_blank"
              >
                Genesys
              </a>{" "}
              and began working full-time as a frontend engineer. This pivotal
              experience laid the foundation for my first venture, Next, a web
              development and digital marketing agency. There, I refined both my
              technical and strategic skills while gaining firsthand insight
              into the challenges faced by creators, developers, and businesses
              navigating the digital space.
            </p>

            <p className="text-lg">
              Growing up in a region with few opportunities, I’ve always seen
              technology as a powerful equalizer—a way to level the playing
              field and unlock potential for those too often overlooked. With
              that vision in mind, I founded <a
                href="https://www.convbase.com"
                className="underline cursor-pointer hover:text-red-400"
                target="_blank"
              >
               Convbase
              </a>: a safe, intuitive, and
              transparent content reward platform designed to empower content
              creators while helping businesses of all sizes grow through more
              meaningful, performance-driven engagement.
            </p>

            <p className="text-lg">
              Now in early access, <a
                href="https://www.convbase.com"
                className="underline cursor-pointer hover:text-red-400"
                target="_blank"
              >
               Convbase
              </a> is already helping brands across
              Brazil and the United States build stronger connections with their
              audiences—while opening doors for the next generation of creators.
              At the core of everything I do is a belief that innovation should
              create opportunity—and that great platforms start with great
              purpose.
            </p>
          {/* </div> */}

          {/* <div className="order-first md:order-last">
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
          </div> */}
        </div>
      </div>
    </main>
  );
}
