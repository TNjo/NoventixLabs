import { ImageResponse } from "next/og";

export const alt = "NoventixLabs: Automate · Build · Grow";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const mark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="l" x1="0" y1="0" x2="0.4" y2="1"><stop offset="0" stop-color="#020717"/><stop offset="0.55" stop-color="#06235e"/><stop offset="1" stop-color="#0f6fe8"/></linearGradient><linearGradient id="r" x1="0.6" y1="0" x2="0.2" y2="1"><stop offset="0" stop-color="#1a4fd6"/><stop offset="0.6" stop-color="#0a1f63"/><stop offset="1" stop-color="#020717"/></linearGradient><linearGradient id="b" x1="0" y1="1" x2="1" y2="0"><stop offset="0.18" stop-color="#2af0ff"/><stop offset="0.42" stop-color="#1f8bff"/><stop offset="1" stop-color="#0b3fd4"/></linearGradient></defs><path d="M2 20 L31 20 L31 80 Q31 84.5 27 86.6 L2 99 Z" fill="url(#l)"/><path d="M69 20 Q69 15.5 73 13.4 L98 0 L98 76 L69 76 Z" fill="url(#r)"/><path d="M2 18 Q2 3 17 3 L33 3 Q41 3 46.5 9.5 L95.5 69 Q98 72.5 98 78 L98 82 Q98 97 83 97 L67 97 Q59 97 53.5 90.5 L5 31 Q2 27 2 18 Z" fill="url(#b)"/></svg>`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "radial-gradient(circle at 20% 0%, #1f6bff55, transparent 50%), radial-gradient(circle at 90% 100%, #22d3ff33, transparent 45%), #04060f",
          color: "#eef2ff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`data:image/svg+xml;utf8,${encodeURIComponent(mark)}`} width={84} height={84} alt="" />
          <div style={{ display: "flex", fontSize: 44, fontWeight: 700, letterSpacing: -1 }}>
            <span>Noventix</span>
            <span style={{ color: "#22a6ff" }}>Labs</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 1000 }}>
            We engineer automations, websites & apps that move business.
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 36 }}>
            {["Automation & AI", "Websites", "Web Apps", "Mobile Apps", "Social Media", "24/7 Support"].map((t) => (
              <div key={t} style={{ display: "flex", padding: "10px 18px", borderRadius: 999, border: "1px solid #2b3a6e", color: "#a9b6e0", fontSize: 22 }}>
                {t}
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 8, color: "#5d6890" }}>AUTOMATE | BUILD | GROW</div>
      </div>
    ),
    size,
  );
}
