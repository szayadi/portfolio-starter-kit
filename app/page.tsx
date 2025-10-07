import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Sammy Zayadi
      </h1>
      <p className="mb-4">
        {`Hi! I'm a Computer Science graduate from Seattle University with a passion for building scalable web applications and solving complex technical challenges. Previous roles include being a Software Engineering Intern at StockPikr and IT Support Specialist at Seattle University.`}
      </p>
      <p className="mb-4">
        {`I specialize in full-stack development using React, Node.js, TypeScript, and cloud technologies. With over 3,000 hours of combined software development and IT support experience, I bring both technical expertise and strong problem-solving skills to every project.`}
      </p>
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">What I Do</h2>
        <ul className="list-disc list-inside space-y-2 text-neutral-800 dark:text-neutral-200">
          <li>Build responsive web applications with React, TypeScript, and Node.js</li>
          <li>Design and implement scalable backend systems with MongoDB and Firebase</li>
          <li>Deploy and maintain cloud infrastructure on Microsoft Azure</li>
          <li>Provide technical support and troubleshooting for 4,000+ users</li>
          <li>Implement security protocols and access management systems</li>
        </ul>
      </div>
      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold">Recent Projects</h2>
        <BlogPosts />
      </div>
    </section>
  )
}
