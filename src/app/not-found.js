"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/Buttons"

const darkBg = "radial-gradient(ellipse 100% 70% at 50% 100%, rgba(120,0,20,0.6) 0%, transparent 90%), linear-gradient(180deg, #0a0a0a 0%, #1a0007 60%, #2d0010 100%)"

export default function NotFound() {
  const router = useRouter()

  return (
    <div style={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: darkBg,
      minHeight: "100%",
      gap: "var(--spacing-lg)",
      padding: "var(--spacing-lg)",
      textAlign: "center",
    }}>
      <h1 style={{ color: "var(--FDF7E6)", fontSize: "clamp(3rem, 10vw, 7rem)", fontWeight: 700, lineHeight: 1, margin: 0 }}>
        404
      </h1>
      <p style={{ color: "rgba(253,247,230,0.6)", fontSize: "1rem", margin: 0 }}>
        That page doesn't exist.
      </p>
      <Button text="Go home" onClick={() => router.push("/")} variant="primary" />
    </div>
  )
}
