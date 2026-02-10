export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont" }}>
      {/* Hero Section */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "42px", fontWeight: 700 }}>
          China Medical Advisory
        </h1>
        <p style={{ fontSize: "20px", maxWidth: "720px", margin: "20px auto" }}>
          Professional medical advisory and full-process patient accompaniment
          services for international patients seeking treatment in China.
        </p>
        <a
          href="#contact"
          style={{
            display: "inline-block",
            marginTop: "30px",
            padding: "14px 28px",
            backgroundColor: "#000",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "6px",
            fontSize: "16px",
          }}
        >
          Request Medical Consultation
        </a>
      </section>

      {/* Services */}
      <section style={{ background: "#f7f7f7", padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center", fontSize: "32px" }}>
          Our Core Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
            maxWidth: "1000px",
            margin: "40px auto",
          }}
        >
          <Service
            title="Pre-arrival Medical Advisory"
            desc="Remote medical consultation, hospital selection, specialist matching, and treatment planning before you arrive in China."
          />
          <Service
            title="Hospital Coordination"
            desc="Appointment scheduling, medical record translation, and coordination with top-tier Chinese hospitals."
          />
          <Service
            title="On-site Patient Accompaniment"
            desc="Professional bilingual medical companions supporting you throughout consultations, examinations, and hospitalization."
          />
          <Service
            title="Post-treatment Follow-up"
            desc="Medical report interpretation, recovery guidance, and ongoing communication with doctors after treatment."
          />
        </div>
      </section>

      {/* Why China */}
      <section style={{ padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center", fontSize: "32px" }}>
          Why Seek Medical Treatment in China
        </h2>
        <p
          style={{
            maxWidth: "800px",
            margin: "20px auto",
            textAlign: "center",
            fontSize: "18px",
          }}
        >
          China offers world-class clinical expertise in oncology, cardiology,
          neurology, orthopedics, ophthalmology, and advanced medical technology,
          combined with significantly lower costs and high treatment efficiency.
        </p>
      </section>

      {/* Contact */}
      <section
        id="contact"
        style={{
          background: "#000",
          color: "#fff",
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "30px" }}>Contact Us</h2>
        <p style={{ maxWidth: "700px", margin: "20px auto", fontSize: "18px" }}>
          Tell us about your medical needs. Our professional team will respond
          within 24 hours.
        </p>

        <p style={{ marginTop: "30px", fontSize: "16px" }}>
          📧 Email: contact@chinamedadvisory.com
          <br />
          🌍 Service Coverage: All major cities in China
        </p>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "20px",
          textAlign: "center",
          fontSize: "14px",
          background: "#111",
          color: "#aaa",
        }}
      >
        © {new Date().getFullYear()} China Medical Advisory. All rights reserved.
      </footer>
    </main>
  );
}

function Service({ title, desc }: { title: string; desc: string }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "24px",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
      }}
    >
      <h3 style={{ fontSize: "20px", marginBottom: "12px" }}>{title}</h3>
      <p style={{ fontSize: "16px", lineHeight: 1.6 }}>{desc}</p>
    </div>
  );
}
