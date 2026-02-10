export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "60px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#ffffff",
        color: "#111111",
      }}
    >
      <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
        ChinaMedAdvisory
      </h1>

      <p style={{ fontSize: "18px", maxWidth: "720px", lineHeight: 1.6 }}>
        We provide professional medical advisory and full-process patient
        accompaniment services for international patients seeking medical
        treatment in China.
      </p>

      <section style={{ marginTop: "60px" }}>
        <h2>Our Services</h2>
        <ul>
          <li>Medical consultation and case evaluation</li>
          <li>Hospital and specialist coordination</li>
          <li>On-site accompaniment and interpretation</li>
          <li>Post-treatment follow-up support</li>
        </ul>
      </section>

      <section style={{ marginTop: "60px" }}>
        <h2>Contact Us</h2>
        <p>Email: contact@chinamedadvisory.com</p>
      </section>
    </main>
  );
}
