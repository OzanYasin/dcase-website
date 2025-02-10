import Image from "next/image";

export function Content() {
  return (
    <main className="mx-auto max-w-5xl flex-1 px-8 py-12">
      <section id="expertise" className="mb-24">
        <h1 className="to-dcase-secondary mb-8 bg-gradient-to-r from-dcase bg-clip-text text-4xl font-normal text-transparent">
          Over 25 Years of Combined Expertise
        </h1>
        <div className="mb-8 flex flex-col items-center gap-8 md:flex-row">
          <Image
            src="/placeholder.svg"
            alt="25 Years of Expertise"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
          />
          <div className="prose prose-lg max-w-none">
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              At DCase, we leverage over 25 years of collective ITSM experience
              to develop solutions that address the unique challenges of modern
              service management. By merging proven methodologies with
              forward-thinking innovation, we help organizations achieve
              operational excellence and deliver seamless services.
            </p>
          </div>
        </div>
      </section>

      <section id="innovation" className="mb-24">
        <h2 className="to-dcase-secondary mb-8 bg-gradient-to-r from-dcase bg-clip-text text-4xl font-normal text-transparent">
          Revolutionizing ITSM through Innovation
        </h2>
        <div className="mb-8 flex flex-col items-center gap-8 md:flex-row-reverse">
          <Image
            src="/placeholder.svg"
            alt="ITSM Innovation"
            width={450}
            height={350}
            className="rounded-lg shadow-md"
          />
          <div className="prose prose-lg max-w-none">
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              We are committed to transforming IT Service Management by offering
              scalable, user-centric solutions that empower businesses to
              streamline operations and stay agile in a rapidly changing digital
              landscape. Our approach ensures that IT services remain aligned
              with evolving business needs, driving impactful results and
              continuous growth.
            </p>
          </div>
        </div>
      </section>

      <section id="mission" className="mb-24">
        <h2 className="to-dcase-secondary mb-8 bg-gradient-to-r from-dcase bg-clip-text text-4xl font-normal text-transparent">
          Our Mission
        </h2>
        <div className="mb-8 flex flex-col items-center gap-8 md:flex-row">
          <Image
            src="/placeholder.svg"
            alt="Our Mission"
            width={350}
            height={250}
            className="rounded-lg shadow-md"
          />
          <div className="prose prose-lg max-w-none">
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              To simplify IT operations and enable businesses to focus on their
              core goals by providing innovative, intuitive, and efficient ITSM
              solutions. We believe that well-structured IT processes lead to
              more meaningful business outcomes, fostering productivity and
              long-term success.
            </p>
          </div>
        </div>
      </section>

      <section id="vision" className="mb-24">
        <h2 className="to-dcase-secondary mb-8 bg-gradient-to-r from-dcase bg-clip-text text-4xl font-normal text-transparent">
          Our Vision
        </h2>
        <div className="mb-8 flex flex-col items-center gap-8 md:flex-row-reverse">
          <Image
            src="/placeholder.svg"
            alt="Our Vision"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
          />
          <div className="prose prose-lg max-w-none">
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              We envision a future where IT Service Management is effortless,
              proactive, and precisely tailored to each organization&apos;s
              unique needs. Through smart technology and user-centric design, we
              are paving the way for businesses to operate at their peak
              potential and thrive in an ever-evolving marketplace.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
