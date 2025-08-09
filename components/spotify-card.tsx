"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pause, Play, ExternalLink } from "lucide-react"
import * as React from "react"

type SpotifyCardProps = {
  url?: string
  title?: string
  artist?: string
}

export default function SpotifyCard({
  url = "https://open.spotify.com/track/1VqpUh3Qykgmr8snpr54An?si=1dqsJOY2Q6GBWdrQD1V2Wg",
  title = "Genit",
  artist = "Tipe-X",
}: SpotifyCardProps) {
  // Extract track ID from any typical Spotify track URL
  const trackId = React.useMemo(() => {
    try {
      const u = new URL(url)
      const parts = u.pathname.split("/")
      const id = parts[parts.findIndex((x) => x === "track") + 1]
      return id || "1VqpUh3Qykgmr8snpr54An"
    } catch {
      return "1VqpUh3Qykgmr8snpr54An"
    }
  }, [url])

  const iframeRef = React.useRef<HTMLIFrameElement>(null)
  const [playing, setPlaying] = React.useState(false)

  // Note: The embedded Spotify player provides its own controls.
  // For accessibility and clarity, we mirror a Play/Pause toggle that instructs users to use the embedded controls.
  const handleToggle = () => {
    // We cannot programmatically control the iframe due to cross-origin restrictions.
    // Toggling here helps reflect user intent and focuses the player for quick interaction.
    setPlaying((p) => !p)
    iframeRef.current?.focus()
  }

  return (
    <Card className="relative overflow-hidden border-white/10 bg-zinc-900/60 backdrop-blur">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-fuchsia-500/10"
      />
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <span className="bg-gradient-to-r from-emerald-400 to-fuchsia-400 bg-clip-text text-transparent">
            Spotify
          </span>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-200"
          >
            Open <ExternalLink className="size-4" />
          </a>
        </CardTitle>
        <CardDescription className="text-zinc-400">
          {title} — {artist}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="secondary"
            onClick={handleToggle}
            className="bg-emerald-600/20 text-emerald-200 hover:bg-emerald-600/30"
            aria-pressed={playing}
            aria-label={playing ? "Pause" : "Play"}
            title="Use the embedded player controls to play/stop"
          >
            {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
            <span className="ml-2 hidden sm:inline">{playing ? "Pause" : "Play"}</span>
          </Button>
          <span className="text-xs text-zinc-500">Use the player below to control playback.</span>
        </div>
        <div className="overflow-hidden rounded-lg border border-white/10">
          <iframe
            ref={iframeRef}
            title="Spotify track player"
            src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator`}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            loading="lazy"
            className="block"
          />
        </div>
      </CardContent>
    </Card>
  )
}
