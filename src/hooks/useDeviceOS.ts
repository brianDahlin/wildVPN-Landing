"use client"

import { useState, useEffect } from "react"

type DeviceOS = "ios" | "android" | "desktop"

export function useDeviceOS(): DeviceOS {
  const [os, setOS] = useState<DeviceOS>("desktop")

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || (window as Window & { opera?: string }).opera || ""

    if (/iPad|iPhone|iPod/.test(ua) && !(window as Window & { MSStream?: unknown }).MSStream) {
      setOS("ios")
    } else if (/android/i.test(ua)) {
      setOS("android")
    } else {
      setOS("desktop")
    }
  }, [])

  return os
}
