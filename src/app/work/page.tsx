export default function WorkPage() {
    return (
      <section className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent dark:from-green-400 dark:via-blue-400 dark:to-purple-300">
          My Work Experience
        </h1>
  
        <div className="space-y-8 text-left">
          {/* Job 1 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Full-Stack Developer – Pabau CRM
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Sep 2024 – Present
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-200">
              Contributed to developing and optimizing an existing web app using React, TypeScript, Next.js, Apollo GraphQL, Hasura, and Prisma ORM. Focused on performance, maintainability, and seamless API integrations.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Web Developer – Freelancer
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Jan 2024 – Present
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-200">
              Creating reliable and high-performing web-based applications and services using React, TypeScript, Wordpress etc...
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Web Developer – Softeh L.L.C
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Sep 2021 – Feb 2022
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-200">
              Created static and dynamic websites for various companies using HTML, CSS, JavaScript, and ReactJS. Focused heavily on mobile responsiveness and integration of a Document Management System to improve internal workflow.
            </p>
          </div>
        </div>
      </section>
    );
  }
  