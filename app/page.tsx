const pageStyle = {
  minHeight: "100vh",
  backgroundColor: "#020617", // dark
  color: "white",
  margin: 0,
  padding: 0,
  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
} as const;

const containerStyle = {
  maxWidth: "960px",
  margin: "0 auto",
  padding: "16px",
} as const;

const headerStyle = {
  paddingBottom: "12px",
  borderBottom: "1px solid #1f2933",
  marginBottom: "16px",
} as const;

const titleRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "8px",
} as const;

const gridStyle = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "16px",
} as const;

const cardStyle = {
  borderRadius: "12px",
  border: "1px solid #1f2933",
  backgroundColor: "#020617",
  padding: "12px",
} as const;

export default function Page() {
  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        {/* HEADER */}
        <header style={headerStyle}>
          <div style={titleRowStyle}>
            <div style={{ fontWeight: 600 }}>USD • Live Desk</div>
            <div style={{ fontSize: "11px", color: "#9ca3af" }}>
              High-impact USD events & headlines
            </div>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main style={gridStyle}>
          {/* Left card – events */}
          <section style={cardStyle}>
            <h2 style={{ fontSize: "14px", fontWeight: 600, marginBottom: "8px" }}>
              High-Impact USD Events
            </h2>
            <p style={{ fontSize: "12px", color: "#9ca3af" }}>
              (Demo) Example: US CPI, NFP, FOMC, GDP releases will appear here.
            </p>
          </section>

          {/* Right card – news */}
          <section style={cardStyle}>
            <h2 style={{ fontSize: "14px", fontWeight: 600, marginBottom: "8px" }}>
              USD Headlines
            </h2>
            <p style={{ fontSize: "12px", color: "#9ca3af" }}>
              (Demo) Latest USD-related news headlines will appear here.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
