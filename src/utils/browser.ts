export const browser =
  'mozGetUserMedia' in navigator
    ? 'firefox'
    : 'webkitGetUserMedia' in navigator ||
      (window.isSecureContext === false &&
        'webkitRTCPeerConnection' in window &&
        !('RTCIceGatherer' in window))
    ? 'chrome'
    : navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)
    ? 'edge'
    : window.RTCPeerConnection &&
      navigator.userAgent.match(/AppleWebKit\/(\d+)\./)
    ? 'safari'
    : 'unknown';
