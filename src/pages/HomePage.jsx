import { useRef, useState } from "react";
import Timeline from "../components/Timeline";
import PokeTeam from "../assets/pokeTeam.jpg";
import { motion, useAnimationControls } from "framer-motion";

const HomePage = () => {
  const [hasHovered, setHasHovered] = useState(false);
  const [showColorFact, setShowColorFact] = useState(false);
  const [factPlacement, setFactPlacement] = useState("below");
  const titleRef = useRef(null);
  const colorFacts = [
    { name: "Red", hex: "#E3350D", title: "Pokémon Red", year: "1996" },
    { name: "Green", hex: "#3FAE49", title: "Pokémon Green", year: "1996" },
    { name: "Blue", hex: "#3B82F6", title: "Pokémon Blue", year: "1996" },
    { name: "Yellow", hex: "#F5C518", title: "Pokémon Yellow", year: "1998" },
    { name: "Black", hex: "#111111", title: "Pokémon Black", year: "2010" },
    { name: "White", hex: "#FFFFFF", title: "Pokémon White", year: "2010" },
    { name: "Scarlet", hex: "#B91C3B", title: "Pokémon Scarlet", year: "2022" },
    { name: "Violet", hex: "#7C3AED", title: "Pokémon Violet", year: "2022" },
  ];
  const [videoPlaying, setVideoPlaying] = useState(false);
  const cardControls = useAnimationControls();
  const wantVideoRef = useRef(false);
  const REG_POKEMON_VIDEO_ID = "MpaHR-V_R-o";

  const handleFactMouseEnter = () => {
    const el = titleRef.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      setFactPlacement(
        window.innerHeight - rect.bottom < 220 ? "above" : "below"
      );
    }
    setShowColorFact(true);
  };

  const handleFactMouseLeave = () => {
    setShowColorFact(false);
  };

  const handlePosterMouseEnter = () => {
    wantVideoRef.current = true;
    setHasHovered(true);
    cardControls.stop();
    cardControls
      .start({
        rotateY: [0, 360],
        transition: { duration: 1.2, ease: [0.32, 0.72, 0, 1] },
      })
      .then(() => {
        if (wantVideoRef.current) {
          cardControls.set({ rotateY: 0 });
          setVideoPlaying(true);
        }
      });
  };

  const handlePosterMouseLeave = () => {
    wantVideoRef.current = false;
    setHasHovered(false);
    setVideoPlaying(false);
    cardControls.stop();
    cardControls
      .start({
        rotateY: [0, -360],
        transition: { duration: 1.1, ease: "easeInOut" },
      })
      .then(() => {
        cardControls.set({ rotateY: 0 });
      });
  };

  return (
    <div>
      <div className="py-5">
        <motion.div
        className="w-3/4 lg:w-2/3 mx-auto cursor-pointer [perspective:1200px]"
        animate={hasHovered ? { y: 0 } : { y: [0, -6, 0] }}
        transition={
          hasHovered
            ? {}
            : { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
        }
        onMouseEnter={handlePosterMouseEnter}
        onMouseLeave={handlePosterMouseLeave}
      >
        <motion.div
          animate={cardControls}
          className="relative rounded-xl"
        >
          <img
            src={PokeTeam}
            alt="pokemon team"
            className={`w-full rounded-xl shadow-2xl transition-opacity duration-500 ${
              videoPlaying ? "opacity-0" : "opacity-100"
            }`}
          />

          {videoPlaying && (
            <iframe
              src={`https://www.youtube.com/embed/${REG_POKEMON_VIDEO_ID}?autoplay=1&rel=0`}
              title="REG Pokémon video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full rounded-xl shadow-2xl"
            />
          )}

          <div className="hidden md:block">
            <motion.div
            animate={hasHovered ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
            className="pointer-events-none absolute top-3 right-3 grid -translate-x-1/2 place-items-center rounded-full bg-black/60 px-4 py-1.5 text-sm font-medium text-white backdrop-blur"
          >
            Hover me
          </motion.div>
          </div>
        </motion.div>
      </motion.div>

<div
  ref={titleRef}
  tabIndex={0}
  aria-describedby="color-fact-card"
  className="relative flex w-fit flex-col items-center  mx-auto mt-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500/60"
  onMouseEnter={handleFactMouseEnter}
  onMouseLeave={handleFactMouseLeave}
  onFocus={handleFactMouseEnter}
  onBlur={handleFactMouseLeave}
>
  {/* EVOLUTION */}
  <h1 className="flex items-baseline text-[clamp(1rem,8vw,3rem)] font-black leading-[0.85] tracking-[0.01em]">
    EV

    {/* Blue O */}
    <span
      className="
        relative mx-[0.02em] inline-block aspect-square w-[0.72em]
        rounded-full border-[0.055em] border-[#111]
        bg-[linear-gradient(to_bottom,#3B82F6_0_47%,#111_47%_53%,#fff_53%_100%)]
      "
    >
      <span
        className="
          absolute left-1/2 top-1/2
          h-[0.2em] w-[0.2em]
          -translate-x-1/2 -translate-y-1/2
          rounded-full border-[0.04em] border-[#111]
          bg-white
        "
      />
    </span>

    LUTI

    {/* Red O */}
    <span
      className="
        relative mx-[0.02em] inline-block aspect-square w-[0.72em]
        rounded-full border-[0.055em] border-[#111]
        bg-[linear-gradient(to_bottom,#E3350D_0_47%,#111_47%_53%,#fff_53%_100%)]
      "
    >
      <span
        className="
          absolute left-1/2 top-1/2
          h-[0.2em] w-[0.2em]
          -translate-x-1/2 -translate-y-1/2
          rounded-full border-[0.04em] border-[#111]
          bg-white
        "
      />
    </span>

    N
    <span className="ml-1 md:ml-2 text-sm md:text-3xl font-medium tracking-[0.035em]">of</span>
  </h1>

  {/* POKÉMON */}
  <h2
    className="
      mt-1 text-[clamp(2rem,5vw,3rem)]
      font-black leading-[0.9]
      tracking-[-0.06em]
      text-transparent
      bg-clip-text
      bg-[linear-gradient(90deg,#E3350D,#3FAE49,#3B82F6,#F5C518,#111,#B91C3B,#7C3AED)]
    "
  >
    Pokémon
  </h2>

  {/* Color timeline */}
  <div className="mt-2 md:mt-6 flex w-full items-center gap-2">
    <span className="h-px flex-1 bg-[#111]" />

    {[
      "#E3350D",
      "#3FAE49",
      "#3B82F6",
      "#F5C518",
      "#111111",
      "#FFFFFF",
      "#B91C3B",
      "#7C3AED",
    ].map((color, index) => (
      <span
        key={index}
        className="h-2 w-2 rounded-full border border-[#111]/20"
        style={{ backgroundColor: color }}
      />
    ))}

    <span className="h-px flex-1 bg-[#111]" />
  </div>

  {/* <motion.div
    id="color-fact-card"
    initial={false}
    animate={
      showColorFact
        ? { opacity: 1, y: 0, scale: 1 }
        : { opacity: 0, y: factPlacement === "above" ? -8 : 10, scale: 0.95 }
    }
    transition={{ duration: 0.2 }}
    style={{ x: "-50%" }}
    className={`pointer-events-none absolute left-1/2 z-30 w-max max-w-[min(24rem,85vw)] rounded-2xl bg-zinc-900/95 px-5 py-4 text-center shadow-2xl ring-1 ring-red-600/40 backdrop-blur ${
      factPlacement === "above" ? "bottom-full mb-3" : "top-full mt-3"
    }`}
  >
    <p className="text-sm font-bold uppercase tracking-wide text-red-400">
      A Colorful Journey
    </p>
    <p className="mt-1 text-xs leading-relaxed text-zinc-300">
      A quick look at Pokémon&apos;s color-named game titles through the years.
    </p>
    <div className="mt-3 grid grid-cols-1 gap-1.5 min-[420px]:grid-cols-2">
      {colorFacts.map((color) => (
        <span
          key={color.name}
          className="flex items-center justify-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-semibold text-zinc-100 ring-1 ring-white/15"
        >
          <span
            className="h-3 w-3 shrink-0 rounded-full ring-1 ring-white/30"
            style={{ backgroundColor: color.hex }}
          />
          {color.title}{" "}
          <span className="text-[9px] font-medium text-zinc-400">
            ({color.year})
          </span>
        </span>
      ))}
    </div>
    <p className="mt-3 text-[10px] font-medium text-zinc-400">
      1996 → 2022 · The adventure continues.
    </p>
  </motion.div> */}
</div>
      </div>
      <Timeline />
    </div>
  );
};

export default HomePage;