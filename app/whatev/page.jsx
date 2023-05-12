import Hero from "../../components/shared/Hero"

export const metadata = {
  title: "Um...Whatev",
  description: "This is custom metadata for this route.",
  "og:image": "https://img2.embroiderydesigns.com/stockdesign/xlarge/moxie_embroidery/gmd00384.webp",
}

export default function Page() {
  return (
    <main className="p-8">
      <Hero />
      <h1 className="font-bold text-2xl">Whatev</h1>
      <p>Routes in Next.js are too easy.</p>
    </main>
  )
}