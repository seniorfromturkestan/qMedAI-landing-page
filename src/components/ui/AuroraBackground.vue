<template>
  <div class="aurora" aria-hidden="true">
    <div class="aurora-layer aurora-1" />
    <div class="aurora-layer aurora-2" />
    <div class="aurora-layer aurora-3" />
    <div class="aurora-layer aurora-4" />
    <div class="aurora-stream aurora-stream-1" />
    <div class="aurora-stream aurora-stream-2" />
    <div class="aurora-particles" />
    <div class="aurora-noise" />
  </div>
</template>

<style scoped>
.aurora {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
  will-change: transform;
  animation: auroraBreathe 12s ease-in-out infinite;
}

@keyframes auroraBreathe {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.88; }
}

.aurora-layer {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0;
  animation: auroraFade 1.2s ease-out forwards;
}

.aurora-1 {
  top: -15%;
  left: -10%;
  width: 55vw;
  height: 55vw;
  max-width: 700px;
  max-height: 700px;
  background: radial-gradient(circle, rgba(90, 227, 207, 0.16) 0%, rgba(90, 227, 207, 0.04) 45%, transparent 70%);
  animation-name: auroraFade, auroraDrift1;
  animation-duration: 1.2s, 22s;
  animation-timing-function: ease-out, ease-in-out;
  animation-iteration-count: 1, infinite;
  animation-fill-mode: forwards, none;
  animation-delay: 0s, 0s;
}

.aurora-2 {
  top: 10%;
  right: -12%;
  width: 50vw;
  height: 50vw;
  max-width: 650px;
  max-height: 650px;
  background: radial-gradient(circle, rgba(122, 182, 255, 0.14) 0%, rgba(122, 182, 255, 0.03) 45%, transparent 70%);
  animation-name: auroraFade, auroraDrift2;
  animation-duration: 1.2s, 28s;
  animation-timing-function: ease-out, ease-in-out;
  animation-iteration-count: 1, infinite;
  animation-fill-mode: forwards, none;
  animation-delay: 0.3s, 0s;
}

.aurora-3 {
  bottom: -10%;
  left: 20%;
  width: 45vw;
  height: 45vw;
  max-width: 580px;
  max-height: 580px;
  background: radial-gradient(circle, rgba(90, 180, 255, 0.10) 0%, rgba(90, 227, 207, 0.06) 40%, transparent 70%);
  animation-name: auroraFade, auroraDrift3;
  animation-duration: 1.2s, 25s;
  animation-timing-function: ease-out, ease-in-out;
  animation-iteration-count: 1, infinite;
  animation-fill-mode: forwards, none;
  animation-delay: 0.6s, 0s;
}

.aurora-4 {
  top: 40%;
  right: 15%;
  width: 40vw;
  height: 40vw;
  max-width: 520px;
  max-height: 520px;
  background: radial-gradient(circle, rgba(140, 120, 255, 0.07) 0%, rgba(90, 180, 255, 0.03) 40%, transparent 70%);
  animation-name: auroraFade, auroraDrift4;
  animation-duration: 1.2s, 30s;
  animation-timing-function: ease-out, ease-in-out;
  animation-iteration-count: 1, infinite;
  animation-fill-mode: forwards, none;
  animation-delay: 0.9s, 0s;
}

.aurora-stream,
.aurora-particles {
  position: absolute;
  inset: -10%;
  will-change: transform, opacity;
}

.aurora-stream {
  opacity: 0.30;
  mix-blend-mode: screen;
}

.aurora-stream-1 {
  background:
    linear-gradient(110deg, transparent 0%, rgba(90, 227, 207, 0.10) 32%, transparent 58%),
    linear-gradient(160deg, transparent 12%, rgba(122, 182, 255, 0.07) 44%, transparent 72%);
  transform: translate3d(-6%, 0, 0) rotate(-8deg) scale(1.08);
  animation: streamDrift1 36s linear infinite;
}

.aurora-stream-2 {
  background:
    linear-gradient(100deg, transparent 0%, rgba(122, 182, 255, 0.07) 30%, transparent 58%),
    linear-gradient(145deg, transparent 18%, rgba(90, 227, 207, 0.08) 48%, transparent 78%);
  transform: translate3d(8%, -2%, 0) rotate(7deg) scale(1.04);
  animation: streamDrift2 42s linear infinite;
}

.aurora-particles {
  inset: 0;
  opacity: 0.32;
  background-image:
    radial-gradient(circle at 12% 24%, rgba(176, 211, 255, 0.26) 0 1px, transparent 1.8px),
    radial-gradient(circle at 74% 32%, rgba(90, 227, 207, 0.22) 0 1px, transparent 1.8px),
    radial-gradient(circle at 36% 72%, rgba(122, 182, 255, 0.18) 0 1px, transparent 1.8px),
    radial-gradient(circle at 82% 78%, rgba(90, 227, 207, 0.16) 0 1px, transparent 1.8px),
    radial-gradient(circle at 55% 48%, rgba(140, 120, 255, 0.12) 0 1px, transparent 1.8px);
  background-size: 320px 320px, 380px 380px, 420px 420px, 520px 520px, 460px 460px;
  animation: particlesFloat 44s linear infinite;
}

.aurora-noise {
  position: absolute;
  inset: 0;
  background-image:
    url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  background-size: 200px 200px;
  opacity: 0.4;
}

@keyframes auroraFade {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes auroraDrift1 {
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  33% { transform: translate3d(4vw, 3vh, 0) scale(1.05); }
  66% { transform: translate3d(-2vw, -2vh, 0) scale(0.97); }
}

@keyframes auroraDrift2 {
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  33% { transform: translate3d(-3vw, 4vh, 0) scale(0.96); }
  66% { transform: translate3d(5vw, -1vh, 0) scale(1.04); }
}

@keyframes auroraDrift3 {
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  33% { transform: translate3d(3vw, -3vh, 0) scale(1.03); }
  66% { transform: translate3d(-4vw, 2vh, 0) scale(0.98); }
}

@keyframes auroraDrift4 {
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  25% { transform: translate3d(-2vw, 3vh, 0) scale(1.06); }
  50% { transform: translate3d(3vw, 1vh, 0) scale(0.95); }
  75% { transform: translate3d(-1vw, -2vh, 0) scale(1.02); }
}

@keyframes streamDrift1 {
  0% { transform: translate3d(-6%, 0, 0) rotate(-8deg) scale(1.08); }
  50% { transform: translate3d(4%, 2%, 0) rotate(-4deg) scale(1.12); }
  100% { transform: translate3d(-6%, 0, 0) rotate(-8deg) scale(1.08); }
}

@keyframes streamDrift2 {
  0% { transform: translate3d(8%, -2%, 0) rotate(7deg) scale(1.04); }
  50% { transform: translate3d(-4%, 3%, 0) rotate(11deg) scale(1.08); }
  100% { transform: translate3d(8%, -2%, 0) rotate(7deg) scale(1.04); }
}

@keyframes particlesFloat {
  0% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(-2%, 2%, 0) scale(1.03); }
  100% { transform: translate3d(0, 0, 0) scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .aurora {
    animation: none;
  }

  .aurora-layer {
    animation: auroraFade 0.5s ease-out forwards;
  }

  .aurora-stream,
  .aurora-particles,
  .aurora-noise {
    display: none;
  }
}
</style>
