import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 p-8 sm:p-12 font-[family-name:var(--font-geist-sans)]">
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Mahmoud Ahmed Elsharkawy</h1>
        <p className="text-lg sm:text-xl text-gray-600">Data Analyst | Python Developer</p>
        <div className="flex justify-center gap-4 mt-4">
          <p className="text-gray-600">Cairo, Egypt</p>
          <p className="text-gray-600">mahmoudahed33455@gmail.com</p>
          <p className="text-gray-600">+20111547897</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto">
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          <div className="flex justify-center sm:justify-start">
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Professional Summary</h2>
            <p className="text-gray-600">
              Recent Commerce graduate with a passion for data analysis, certified in Python and Data Analysis. 
              Skilled in extracting insights from datasets to drive decision-making. Seeking freelance opportunities 
              to leverage analytical skills in real-world projects.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">Education</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Bachelor of Commerce</h3>
            <p className="text-gray-600">Faculty of Commerce, Ain Shams University | Graduated: 2024</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">Certifications</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Data Analysis Certification</h3>
            <p className="text-gray-600">[Camp Name]</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow mt-4">
            <h3 className="text-xl font-semibold">Python Programming</h3>
            <p className="text-gray-600">Code Academy</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow mt-4">
            <h3 className="text-xl font-semibold">Professional Development Courses</h3>
            <p className="text-gray-600">British Council</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">Technical Skills</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Languages</h3>
            <p className="text-gray-600">Python (Pandas, NumPy), SQL (Basic)</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow mt-4">
            <h3 className="text-xl font-semibold">Tools</h3>
            <p className="text-gray-600">Excel (Advanced), Power BI (Basic)</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow mt-4">
            <h3 className="text-xl font-semibold">Data Analysis</h3>
            <p className="text-gray-600">Cleaning, Visualization, Statistical Modeling</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">Soft Skills</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600">Problem-Solving, Communication (Arabic & English)</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">Projects</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Retail Sales Analysis</h3>
            <p className="text-gray-600 mb-2">Analyzed sales data using Python to identify top-performing products.</p>
            <p className="text-gray-600 font-medium">Outcome: Recommended pricing adjustments, increasing profits by 15%.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">Contact</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600">Cairo, Egypt</p>
            <p className="text-gray-600">Email: mahmoudahed33455@gmail.com</p>
            <p className="text-gray-600">Phone: +20111547897</p>
          </div>
        </section>
      </main>

      <footer className="text-center text-gray-600 mt-12">
        <p>&copy; {new Date().getFullYear()} Mahmoud Ahmed Elsharkawy. All rights reserved.</p>
      </footer>
    </div>
  );
}