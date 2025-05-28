
export default function OnlineTuitionHomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-blue-800 text-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold">Tuitionly</h1>
        <p className="text-sm">Empowering Global Students Through Online Education</p>
      </header>

      <main className="p-6 space-y-10">
        <section className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Live & Recorded Online Classes</h2>
            <p>We offer high-quality tuition in STEM subjects for students from all curricula including British, American, CBSE, ICSE, IB, and Pakistani boards.</p>
            <ul className="list-disc list-inside mt-4 text-sm">
              <li>Interactive whiteboard & virtual classroom</li>
              <li>Join classes via secure Zoom links</li>
              <li>Recorded lessons for review</li>
            </ul>
          </div>
          <div>
            <img src="/images/online-classroom.jpg" alt="Online Classroom" className="rounded-2xl shadow" />
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-4 rounded-xl shadow">
            <h3 className="font-semibold text-lg">Parent Dashboard</h3>
            <p className="text-sm">Track attendance, grades, and tutor feedback in real-time.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-xl shadow">
            <h3 className="font-semibold text-lg">Exam Preparation</h3>
            <p className="text-sm">Courses for IELTS, TOEFL, SAT, GRE, GMAT, PTE and more.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-xl shadow">
            <h3 className="font-semibold text-lg">Secure Payments</h3>
            <p className="text-sm">Monthly subscriptions and one-time course fees via secure checkout.</p>
          </div>
        </section>

        <section className="bg-blue-50 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Request a Free Trial</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Parent/Student Name" className="border p-2 rounded" />
            <input type="email" placeholder="Email Address" className="border p-2 rounded" />
            <input type="text" placeholder="Student Grade & Curriculum" className="border p-2 rounded col-span-2" />
            <button className="bg-blue-800 text-white py-2 px-4 rounded col-span-2">Submit</button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-sm p-4 text-center">
        &copy; 2025 Tuitionly. All rights reserved.
      </footer>
    </div>
  );
}
