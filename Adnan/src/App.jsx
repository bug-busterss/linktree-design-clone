import { useEffect, useState } from "react";
import { getVariables } from "./helpers/helpers";
import Avatar from "./components/Avatar";
import Toggle from "./components/Toggle";
import LargeLink from "./components/LargeLink";
import SmallLink from "./components/SmallLink";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function App() {
  const [isLight, setIsLight] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "light") {
        setIsLight(true);
      }
    }
  }, []);

  const {
    colorScheme,
    name,
    profilePic,
    handle,
    title,
    roundStyle,
    smallLinks,
    largeLinks,
  } = getVariables();
  document.title = `Links by ${name}`;

  let rounding = "rounded-full";

  let lightBG = "bg-slate-100";
  let lightFG = "text-slate-900";
  let darkBG = "dark:bg-slate-900";
  let darkFG = "dark:text-slate-100";
  let gradientLightFrom = "from-slate-900";
  let gradientLightTo = "to-slate-500";
  let gradientDarkFrom = "dark:from-slate-100";
  let gradientDarkTo = "dark:to-slate-400";
  let toggleLight = "bg-slate-200";
  let toggleDark = "bg-slate-900";
  let toggleLightFont = "text-slate-900";
  let toggleDarkFont = "text-slate-200";
  let toggleBackgroundLight = "bg-slate-300";
  let toggleBackgroundDark = "bg-slate-600";
  let toggleAccent = "focus:ring-slate-500";
  let buttonRingFocus = "focus:ring-slate-500";
  let buttonLightColor = "bg-slate-200";
  let buttonLightColorHover = "hover:bg-slate-300";
  let buttonDarkColor = "dark:bg-slate-600";
  let buttonDarkColorHover = "dark:hover:bg-slate-700";
  let buttonLightShadow = "shadow-slate-400";
  let buttonLightShadowHover = "hover:shadow-slate-400";
  let buttonDarkShadow = "dark:shadow-slate-400";
  let buttonDarkShadowHover = "dark:hover:shadow-slate-400";

  switch (roundStyle.toLowerCase()) {
    case "rounded":
      rounding = "rounded-full";
      break;
    case "square-rounded":
      rounding = "rounded-md";
      break;
    case "square":
      rounding = "rounded-none";
      break;
    default:
      break;
  }

  switch (colorScheme.toLowerCase()) {
    case "gray":
      lightBG = "bg-gray-100";
      lightFG = "text-gray-900";
      darkBG = "dark:bg-gray-900";
      darkFG = "dark:text-gray-100";
      gradientLightFrom = "from-gray-900";
      gradientLightTo = "to-gray-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-gray-400";
      toggleLight = "bg-gray-200";
      toggleDark = "bg-gray-900";
      toggleLightFont = "text-gray-900";
      toggleDarkFont = "text-gray-200";
      toggleBackgroundLight = "bg-gray-300";
      toggleBackgroundDark = "bg-gray-600";
      toggleAccent = "focus:ring-gray-500";
      buttonRingFocus = "focus:ring-gray-500";
      buttonLightColor = "bg-gray-200";
      buttonLightColorHover = "hover:bg-gray-300";
      buttonDarkColor = "dark:bg-gray-600";
      buttonDarkColorHover = "dark:hover:bg-gray-700";
      buttonLightShadow = "shadow-gray-400";
      buttonLightShadowHover = "hover:shadow-gray-400";
      buttonDarkShadow = "dark:shadow-gray-400";
      buttonDarkShadowHover = "dark:hover:shadow-gray-400";
      break;
    case "zinc":
      lightBG = "bg-zinc-100";
      lightFG = "text-zinc-900";
      darkBG = "dark:bg-zinc-900";
      darkFG = "dark:text-zinc-100";
      gradientLightFrom = "from-zinc-900";
      gradientLightTo = "to-zinc-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-zinc-400";
      toggleLight = "bg-zinc-200";
      toggleDark = "bg-zinc-900";
      toggleLightFont = "text-zinc-900";
      toggleDarkFont = "text-zinc-200";
      toggleBackgroundLight = "bg-zinc-300";
      toggleBackgroundDark = "bg-zinc-600";
      toggleAccent = "focus:ring-zinc-500";
      buttonRingFocus = "focus:ring-zinc-500";
      buttonLightColor = "bg-zinc-200";
      buttonLightColorHover = "hover:bg-zinc-300";
      buttonDarkColor = "dark:bg-zinc-600";
      buttonDarkColorHover = "dark:hover:bg-zinc-700";
      buttonLightShadow = "shadow-zinc-400";
      buttonLightShadowHover = "hover:shadow-zinc-400";
      buttonDarkShadow = "dark:shadow-zinc-400";
      buttonDarkShadowHover = "dark:hover:shadow-zinc-400";
      break;
    case "neutral":
      lightBG = "bg-neutral-100";
      lightFG = "text-neutral-900";
      darkBG = "dark:bg-neutral-900";
      darkFG = "dark:text-neutral-100";
      gradientLightFrom = "from-neutral-900";
      gradientLightTo = "to-neutral-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-neutral-400";
      toggleLight = "bg-neutral-200";
      toggleDark = "bg-neutral-900";
      toggleLightFont = "text-neutral-900";
      toggleDarkFont = "text-neutral-200";
      toggleBackgroundLight = "bg-neutral-300";
      toggleBackgroundDark = "bg-neutral-600";
      toggleAccent = "focus:ring-neutral-500";
      buttonRingFocus = "focus:ring-neutral-500";
      buttonLightColor = "bg-neutral-200";
      buttonLightColorHover = "hover:bg-neutral-300";
      buttonDarkColor = "dark:bg-neutral-600";
      buttonDarkColorHover = "dark:hover:bg-neutral-700";
      buttonLightShadow = "shadow-neutral-400";
      buttonLightShadowHover = "hover:shadow-neutral-400";
      buttonDarkShadow = "dark:shadow-neutral-400";
      buttonDarkShadowHover = "dark:hover:shadow-neutral-400";
      break;
    case "stone":
      lightBG = "bg-stone-100";
      lightFG = "text-stone-900";
      darkBG = "dark:bg-stone-900";
      darkFG = "dark:text-stone-100";
      gradientLightFrom = "from-stone-900";
      gradientLightTo = "to-stone-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-stone-400";
      toggleLight = "bg-stone-200";
      toggleDark = "bg-stone-900";
      toggleLightFont = "text-stone-900";
      toggleDarkFont = "text-stone-200";
      toggleBackgroundLight = "bg-stone-300";
      toggleBackgroundDark = "bg-stone-600";
      toggleAccent = "focus:ring-stone-500";
      buttonRingFocus = "focus:ring-stone-500";
      buttonLightColor = "bg-stone-200";
      buttonLightColorHover = "hover:bg-stone-300";
      buttonDarkColor = "dark:bg-stone-600";
      buttonDarkColorHover = "dark:hover:bg-stone-700";
      buttonLightShadow = "shadow-stone-400";
      buttonLightShadowHover = "hover:shadow-stone-400";
      buttonDarkShadow = "dark:shadow-stone-400";
      buttonDarkShadowHover = "dark:hover:shadow-stone-400";
      break;
    case "red":
      lightBG = "bg-red-100";
      lightFG = "text-red-900";
      darkBG = "dark:bg-red-900";
      darkFG = "dark:text-red-100";
      gradientLightFrom = "from-red-900";
      gradientLightTo = "to-red-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-red-400";
      toggleLight = "bg-red-200";
      toggleDark = "bg-red-900";
      toggleLightFont = "text-red-900";
      toggleDarkFont = "text-red-200";
      toggleBackgroundLight = "bg-red-300";
      toggleBackgroundDark = "bg-red-600";
      toggleAccent = "focus:ring-red-500";
      buttonRingFocus = "focus:ring-red-500";
      buttonLightColor = "bg-red-200";
      buttonLightColorHover = "hover:bg-red-300";
      buttonDarkColor = "dark:bg-red-600";
      buttonDarkColorHover = "dark:hover:bg-red-700";
      buttonLightShadow = "shadow-red-400";
      buttonLightShadowHover = "hover:shadow-red-400";
      buttonDarkShadow = "dark:shadow-red-400";
      buttonDarkShadowHover = "dark:hover:shadow-red-400";
      break;
    case "orange":
      lightBG = "bg-orange-100";
      lightFG = "text-orange-900";
      darkBG = "dark:bg-orange-900";
      darkFG = "dark:text-orange-100";
      gradientLightFrom = "from-orange-900";
      gradientLightTo = "to-orange-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-orange-400";
      toggleLight = "bg-orange-200";
      toggleDark = "bg-orange-900";
      toggleLightFont = "text-orange-900";
      toggleDarkFont = "text-orange-200";
      toggleBackgroundLight = "bg-orange-300";
      toggleBackgroundDark = "bg-orange-600";
      toggleAccent = "focus:ring-orange-500";
      buttonRingFocus = "focus:ring-orange-500";
      buttonLightColor = "bg-orange-200";
      buttonLightColorHover = "hover:bg-orange-300";
      buttonDarkColor = "dark:bg-orange-600";
      buttonDarkColorHover = "dark:hover:bg-orange-700";
      buttonLightShadow = "shadow-orange-400";
      buttonLightShadowHover = "hover:shadow-orange-400";
      buttonDarkShadow = "dark:shadow-orange-400";
      buttonDarkShadowHover = "dark:hover:shadow-orange-400";
      break;
    case "amber":
      lightBG = "bg-amber-100";
      lightFG = "text-amber-900";
      darkBG = "dark:bg-amber-900";
      darkFG = "dark:text-amber-100";
      gradientLightFrom = "from-amber-900";
      gradientLightTo = "to-amber-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-amber-400";
      toggleLight = "bg-amber-200";
      toggleDark = "bg-amber-900";
      toggleLightFont = "text-amber-900";
      toggleDarkFont = "text-amber-200";
      toggleBackgroundLight = "bg-amber-300";
      toggleBackgroundDark = "bg-amber-600";
      toggleAccent = "focus:ring-amber-500";
      buttonRingFocus = "focus:ring-amber-500";
      buttonLightColor = "bg-amber-200";
      buttonLightColorHover = "hover:bg-amber-300";
      buttonDarkColor = "dark:bg-amber-600";
      buttonDarkColorHover = "dark:hover:bg-amber-700";
      buttonLightShadow = "shadow-amber-400";
      buttonLightShadowHover = "hover:shadow-amber-400";
      buttonDarkShadow = "dark:shadow-amber-400";
      buttonDarkShadowHover = "dark:hover:shadow-amber-400";
      break;
    case "yellow":
      lightBG = "bg-yellow-100";
      lightFG = "text-yellow-900";
      darkBG = "dark:bg-yellow-900";
      darkFG = "dark:text-yellow-100";
      gradientLightFrom = "from-yellow-900";
      gradientLightTo = "to-yellow-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-yellow-400";
      toggleLight = "bg-yellow-200";
      toggleDark = "bg-yellow-900";
      toggleLightFont = "text-yellow-900";
      toggleDarkFont = "text-yellow-200";
      toggleBackgroundLight = "bg-yellow-300";
      toggleBackgroundDark = "bg-yellow-600";
      toggleAccent = "focus:ring-yellow-500";
      buttonRingFocus = "focus:ring-yellow-500";
      buttonLightColor = "bg-yellow-200";
      buttonLightColorHover = "hover:bg-yellow-300";
      buttonDarkColor = "dark:bg-yellow-600";
      buttonDarkColorHover = "dark:hover:bg-yellow-700";
      buttonLightShadow = "shadow-yellow-400";
      buttonLightShadowHover = "hover:shadow-yellow-400";
      buttonDarkShadow = "dark:shadow-yellow-400";
      buttonDarkShadowHover = "dark:hover:shadow-yellow-400";
      break;
    case "lime":
      lightBG = "bg-lime-100";
      lightFG = "text-lime-900";
      darkBG = "dark:bg-lime-900";
      darkFG = "dark:text-lime-100";
      gradientLightFrom = "from-lime-900";
      gradientLightTo = "to-lime-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-lime-400";
      toggleLight = "bg-lime-200";
      toggleDark = "bg-lime-900";
      toggleLightFont = "text-lime-900";
      toggleDarkFont = "text-lime-200";
      toggleBackgroundLight = "bg-lime-300";
      toggleBackgroundDark = "bg-lime-600";
      toggleAccent = "focus:ring-lime-500";
      buttonRingFocus = "focus:ring-lime-500";
      buttonLightColor = "bg-lime-200";
      buttonLightColorHover = "hover:bg-lime-300";
      buttonDarkColor = "dark:bg-lime-600";
      buttonDarkColorHover = "dark:hover:bg-lime-700";
      buttonLightShadow = "shadow-lime-400";
      buttonLightShadowHover = "hover:shadow-lime-400";
      buttonDarkShadow = "dark:shadow-lime-400";
      buttonDarkShadowHover = "dark:hover:shadow-lime-400";
      break;
    case "green":
      lightBG = "bg-green-100";
      lightFG = "text-green-900";
      darkBG = "dark:bg-green-900";
      darkFG = "dark:text-green-100";
      gradientLightFrom = "from-green-900";
      gradientLightTo = "to-green-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-green-400";
      toggleLight = "bg-green-200";
      toggleDark = "bg-green-900";
      toggleLightFont = "text-green-900";
      toggleDarkFont = "text-green-200";
      toggleBackgroundLight = "bg-green-300";
      toggleBackgroundDark = "bg-green-600";
      toggleAccent = "focus:ring-green-500";
      buttonRingFocus = "focus:ring-green-500";
      buttonLightColor = "bg-green-200";
      buttonLightColorHover = "hover:bg-green-300";
      buttonDarkColor = "dark:bg-green-600";
      buttonDarkColorHover = "dark:hover:bg-green-700";
      buttonLightShadow = "shadow-green-400";
      buttonLightShadowHover = "hover:shadow-green-400";
      buttonDarkShadow = "dark:shadow-green-400";
      buttonDarkShadowHover = "dark:hover:shadow-green-400";
      break;
    case "emerald":
      lightBG = "bg-emerald-100";
      lightFG = "text-emerald-900";
      darkBG = "dark:bg-emerald-900";
      darkFG = "dark:text-emerald-100";
      gradientLightFrom = "from-emerald-900";
      gradientLightTo = "to-emerald-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-emerald-400";
      toggleLight = "bg-emerald-200";
      toggleDark = "bg-emerald-900";
      toggleLightFont = "text-emerald-900";
      toggleDarkFont = "text-emerald-200";
      toggleBackgroundLight = "bg-emerald-300";
      toggleBackgroundDark = "bg-emerald-600";
      toggleAccent = "focus:ring-emerald-500";
      buttonRingFocus = "focus:ring-emerald-500";
      buttonLightColor = "bg-emerald-200";
      buttonLightColorHover = "hover:bg-emerald-300";
      buttonDarkColor = "dark:bg-emerald-600";
      buttonDarkColorHover = "dark:hover:bg-emerald-700";
      buttonLightShadow = "shadow-emerald-400";
      buttonLightShadowHover = "hover:shadow-emerald-400";
      buttonDarkShadow = "dark:shadow-emerald-400";
      buttonDarkShadowHover = "dark:hover:shadow-emerald-400";
      break;
    case "teal":
      lightBG = "bg-teal-100";
      lightFG = "text-teal-900";
      darkBG = "dark:bg-teal-900";
      darkFG = "dark:text-teal-100";
      gradientLightFrom = "from-teal-900";
      gradientLightTo = "to-teal-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-teal-400";
      toggleLight = "bg-teal-200";
      toggleDark = "bg-teal-900";
      toggleLightFont = "text-teal-900";
      toggleDarkFont = "text-teal-200";
      toggleBackgroundLight = "bg-teal-300";
      toggleBackgroundDark = "bg-teal-600";
      toggleAccent = "focus:ring-teal-500";
      buttonRingFocus = "focus:ring-teal-500";
      buttonLightColor = "bg-teal-200";
      buttonLightColorHover = "hover:bg-teal-300";
      buttonDarkColor = "dark:bg-teal-600";
      buttonDarkColorHover = "dark:hover:bg-teal-700";
      buttonLightShadow = "shadow-teal-400";
      buttonLightShadowHover = "hover:shadow-teal-400";
      buttonDarkShadow = "dark:shadow-teal-400";
      buttonDarkShadowHover = "dark:hover:shadow-teal-400";
      break;
    case "cyan":
      lightBG = "bg-cyan-100";
      lightFG = "text-cyan-900";
      darkBG = "dark:bg-cyan-900";
      darkFG = "dark:text-cyan-100";
      gradientLightFrom = "from-cyan-900";
      gradientLightTo = "to-cyan-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-cyan-400";
      toggleLight = "bg-cyan-200";
      toggleDark = "bg-cyan-900";
      toggleLightFont = "text-cyan-900";
      toggleDarkFont = "text-cyan-200";
      toggleBackgroundLight = "bg-cyan-300";
      toggleBackgroundDark = "bg-cyan-600";
      toggleAccent = "focus:ring-cyan-500";
      buttonRingFocus = "focus:ring-cyan-500";
      buttonLightColor = "bg-cyan-200";
      buttonLightColorHover = "hover:bg-cyan-300";
      buttonDarkColor = "dark:bg-cyan-600";
      buttonDarkColorHover = "dark:hover:bg-cyan-700";
      buttonLightShadow = "shadow-cyan-400";
      buttonLightShadowHover = "hover:shadow-cyan-400";
      buttonDarkShadow = "dark:shadow-cyan-400";
      buttonDarkShadowHover = "dark:hover:shadow-cyan-400";
      break;
    case "sky":
      lightBG = "bg-sky-100";
      lightFG = "text-sky-900";
      darkBG = "dark:bg-sky-900";
      darkFG = "dark:text-sky-100";
      gradientLightFrom = "from-sky-900";
      gradientLightTo = "to-sky-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-sky-400";
      toggleLight = "bg-sky-200";
      toggleDark = "bg-sky-900";
      toggleLightFont = "text-sky-900";
      toggleDarkFont = "text-sky-200";
      toggleBackgroundLight = "bg-sky-300";
      toggleBackgroundDark = "bg-sky-600";
      toggleAccent = "focus:ring-sky-500";
      buttonRingFocus = "focus:ring-sky-500";
      buttonLightColor = "bg-sky-200";
      buttonLightColorHover = "hover:bg-sky-300";
      buttonDarkColor = "dark:bg-sky-600";
      buttonDarkColorHover = "dark:hover:bg-sky-700";
      buttonLightShadow = "shadow-sky-400";
      buttonLightShadowHover = "hover:shadow-sky-400";
      buttonDarkShadow = "dark:shadow-sky-400";
      buttonDarkShadowHover = "dark:hover:shadow-sky-400";
      break;
    case "blue":
      lightBG = "bg-blue-100";
      lightFG = "text-blue-900";
      darkBG = "dark:bg-blue-900";
      darkFG = "dark:text-blue-100";
      gradientLightFrom = "from-blue-900";
      gradientLightTo = "to-blue-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-blue-400";
      toggleLight = "bg-blue-200";
      toggleDark = "bg-blue-900";
      toggleLightFont = "text-blue-900";
      toggleDarkFont = "text-blue-200";
      toggleBackgroundLight = "bg-blue-300";
      toggleBackgroundDark = "bg-blue-600";
      toggleAccent = "focus:ring-blue-500";
      buttonRingFocus = "focus:ring-blue-500";
      buttonLightColor = "bg-blue-200";
      buttonLightColorHover = "hover:bg-blue-300";
      buttonDarkColor = "dark:bg-blue-600";
      buttonDarkColorHover = "dark:hover:bg-blue-700";
      buttonLightShadow = "shadow-blue-400";
      buttonLightShadowHover = "hover:shadow-blue-400";
      buttonDarkShadow = "dark:shadow-blue-400";
      buttonDarkShadowHover = "dark:hover:shadow-blue-400";
      break;
    case "indigo":
      lightBG = "bg-indigo-100";
      lightFG = "text-indigo-900";
      darkBG = "dark:bg-indigo-900";
      darkFG = "dark:text-indigo-100";
      gradientLightFrom = "from-indigo-900";
      gradientLightTo = "to-indigo-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-indigo-400";
      toggleLight = "bg-indigo-200";
      toggleDark = "bg-indigo-900";
      toggleLightFont = "text-indigo-900";
      toggleDarkFont = "text-indigo-200";
      toggleBackgroundLight = "bg-indigo-300";
      toggleBackgroundDark = "bg-indigo-600";
      toggleAccent = "focus:ring-indigo-500";
      buttonRingFocus = "focus:ring-indigo-500";
      buttonLightColor = "bg-indigo-200";
      buttonLightColorHover = "hover:bg-indigo-300";
      buttonDarkColor = "dark:bg-indigo-600";
      buttonDarkColorHover = "dark:hover:bg-indigo-700";
      buttonLightShadow = "shadow-indigo-400";
      buttonLightShadowHover = "hover:shadow-indigo-400";
      buttonDarkShadow = "dark:shadow-indigo-400";
      buttonDarkShadowHover = "dark:hover:shadow-indigo-400";
      break;
    case "violet":
      lightBG = "bg-violet-100";
      lightFG = "text-violet-900";
      darkBG = "dark:bg-violet-900";
      darkFG = "dark:text-violet-100";
      gradientLightFrom = "from-violet-900";
      gradientLightTo = "to-violet-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-violet-400";
      toggleLight = "bg-violet-200";
      toggleDark = "bg-violet-900";
      toggleLightFont = "text-violet-900";
      toggleDarkFont = "text-violet-200";
      toggleBackgroundLight = "bg-violet-300";
      toggleBackgroundDark = "bg-violet-600";
      toggleAccent = "focus:ring-violet-500";
      buttonRingFocus = "focus:ring-violet-500";
      buttonLightColor = "bg-violet-200";
      buttonLightColorHover = "hover:bg-violet-300";
      buttonDarkColor = "dark:bg-violet-600";
      buttonDarkColorHover = "dark:hover:bg-violet-700";
      buttonLightShadow = "shadow-violet-400";
      buttonLightShadowHover = "hover:shadow-violet-400";
      buttonDarkShadow = "dark:shadow-violet-400";
      buttonDarkShadowHover = "dark:hover:shadow-violet-400";
      break;
    case "purple":
      lightBG = "bg-purple-100";
      lightFG = "text-purple-900";
      darkBG = "dark:bg-purple-900";
      darkFG = "dark:text-purple-100";
      gradientLightFrom = "from-purple-900";
      gradientLightTo = "to-purple-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-purple-400";
      toggleLight = "bg-purple-200";
      toggleDark = "bg-purple-900";
      toggleLightFont = "text-purple-900";
      toggleDarkFont = "text-purple-200";
      toggleBackgroundLight = "bg-purple-300";
      toggleBackgroundDark = "bg-purple-600";
      toggleAccent = "focus:ring-purple-500";
      buttonRingFocus = "focus:ring-purple-500";
      buttonLightColor = "bg-purple-200";
      buttonLightColorHover = "hover:bg-purple-300";
      buttonDarkColor = "dark:bg-purple-600";
      buttonDarkColorHover = "dark:hover:bg-purple-700";
      buttonLightShadow = "shadow-purple-400";
      buttonLightShadowHover = "hover:shadow-purple-400";
      buttonDarkShadow = "dark:shadow-purple-400";
      buttonDarkShadowHover = "dark:hover:shadow-purple-400";
      break;
    case "fuchsia":
      lightBG = "bg-fuchsia-100";
      lightFG = "text-fuchsia-900";
      darkBG = "dark:bg-fuchsia-900";
      darkFG = "dark:text-fuchsia-100";
      gradientLightFrom = "from-fuchsia-900";
      gradientLightTo = "to-fuchsia-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-fuchsia-400";
      toggleLight = "bg-fuchsia-200";
      toggleDark = "bg-fuchsia-900";
      toggleLightFont = "text-fuchsia-900";
      toggleDarkFont = "text-fuchsia-200";
      toggleBackgroundLight = "bg-fuchsia-300";
      toggleBackgroundDark = "bg-fuchsia-600";
      toggleAccent = "focus:ring-fuchsia-500";
      buttonRingFocus = "focus:ring-fuchsia-500";
      buttonLightColor = "bg-fuchsia-200";
      buttonLightColorHover = "hover:bg-fuchsia-300";
      buttonDarkColor = "dark:bg-fuchsia-600";
      buttonDarkColorHover = "dark:hover:bg-fuchsia-700";
      buttonLightShadow = "shadow-fuchsia-400";
      buttonLightShadowHover = "hover:shadow-fuchsia-400";
      buttonDarkShadow = "dark:shadow-fuchsia-400";
      buttonDarkShadowHover = "dark:hover:shadow-fuchsia-400";
      break;
    case "pink":
      lightBG = "bg-pink-100";
      lightFG = "text-pink-900";
      darkBG = "dark:bg-pink-900";
      darkFG = "dark:text-pink-100";
      gradientLightFrom = "from-pink-900";
      gradientLightTo = "to-pink-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-pink-400";
      toggleLight = "bg-pink-200";
      toggleDark = "bg-pink-900";
      toggleLightFont = "text-pink-900";
      toggleDarkFont = "text-pink-200";
      toggleBackgroundLight = "bg-pink-300";
      toggleBackgroundDark = "bg-pink-600";
      toggleAccent = "focus:ring-pink-500";
      buttonRingFocus = "focus:ring-pink-500";
      buttonLightColor = "bg-pink-200";
      buttonLightColorHover = "hover:bg-pink-300";
      buttonDarkColor = "dark:bg-pink-600";
      buttonDarkColorHover = "dark:hover:bg-pink-700";
      buttonLightShadow = "shadow-pink-400";
      buttonLightShadowHover = "hover:shadow-pink-400";
      buttonDarkShadow = "dark:shadow-pink-400";
      buttonDarkShadowHover = "dark:hover:shadow-pink-400";
      break;
    case "rose":
      lightBG = "bg-rose-100";
      lightFG = "text-rose-900";
      darkBG = "dark:bg-rose-900";
      darkFG = "dark:text-rose-100";
      gradientLightFrom = "from-rose-900";
      gradientLightTo = "to-rose-400";
      gradientDarkFrom = "dark:from-violet-100";
      gradientDarkTo = "dark:to-rose-400";
      toggleLight = "bg-rose-200";
      toggleDark = "bg-rose-900";
      toggleLightFont = "text-rose-900";
      toggleDarkFont = "text-rose-200";
      toggleBackgroundLight = "bg-rose-300";
      toggleBackgroundDark = "bg-rose-600";
      toggleAccent = "focus:ring-rose-500";
      buttonRingFocus = "focus:ring-rose-500";
      buttonLightColor = "bg-rose-200";
      buttonLightColorHover = "hover:bg-rose-300";
      buttonDarkColor = "dark:bg-rose-600";
      buttonDarkColorHover = "dark:hover:bg-rose-700";
      buttonLightShadow = "shadow-rose-400";
      buttonLightShadowHover = "hover:shadow-rose-400";
      buttonDarkShadow = "dark:shadow-rose-400";
      buttonDarkShadowHover = "dark:hover:shadow-rose-400";
      break;
    default:
      break;
  }

  return (
    <div
      className={classNames(
        "min-w-screen relative min-h-screen",
        lightBG,
        lightFG,
        darkBG,
        darkFG
      )}
    >
      <div className="absolute top-6 right-6">
        <Toggle
          colors={{
            toggleLight,
            toggleDark,
            toggleLightFont,
            toggleDarkFont,
            toggleBackgroundLight,
            toggleBackgroundDark,
            toggleAccent,
          }}
          isLight={isLight}
          setIsLight={setIsLight}
          rounding={rounding}
        />
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center p-4 sm:px-6 lg:px-8">
        <header className="flex flex-col items-center py-4">
          <Avatar profilePic={profilePic} name={name} rounding={rounding} />
          <p
            className={classNames(
              "bg-gradient-to-r bg-clip-text py-4 text-center text-6xl font-black text-transparent",
              gradientLightFrom,
              gradientLightTo,
              gradientDarkFrom,
              gradientDarkTo
            )}
          >
            {name}
          </p>
          <p className="my-2 text-xl font-bold">{handle}</p>
          <p className="my-2 text-center text-xl">{title}</p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            {smallLinks.map((link) => {
              return (
                <SmallLink
                  key={link[0]}
                  link={link}
                  colors={{
                    buttonDarkColor,
                    buttonDarkColorHover,
                    buttonRingFocus,
                    buttonLightColor,
                    buttonLightColorHover,
                  }}
                  rounding={rounding}
                />
              );
            })}
          </div>
        </header>
        <ul role="list" className="w-full">
          {largeLinks.map((link) => {
            return (
              <LargeLink
                key={link[0]}
                link={link}
                colors={{
                  buttonLightColor,
                  buttonLightColorHover,
                  buttonLightShadow,
                  buttonLightShadowHover,
                  buttonDarkColor,
                  buttonDarkColorHover,
                  buttonDarkShadow,
                  buttonDarkShadowHover,
                  buttonRingFocus,
                }}
                rounding={rounding}
              />
            );
          })}
        </ul>
      </div>
      <div className="flex min-h-full w-full justify-end p-8">
        <a href="https://gentr.ee" target="_blank" rel="noopener noreferrer">
          <svg
            viewBox="0 0 2291 842"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-40"
          >
            <path
              d="M526.54 631.18V593.18L528.44 586.34V544.92L526.54 537.32V468.92H575.94V626.62C575.94 654.233 570.113 677.287 558.46 695.78C546.807 714.527 530.847 728.587 510.58 737.96C490.313 747.333 467.007 752.02 440.66 752.02C421.407 752.02 403.673 749.487 387.46 744.42C371.247 739.353 355.54 731.627 340.34 721.24V680.2C355.793 692.36 371.753 700.847 388.22 705.66C404.687 710.727 421.153 713.26 437.62 713.26C466.5 713.26 488.54 706.167 503.74 691.98C518.94 677.793 526.54 657.527 526.54 631.18ZM423.18 667.28C403.42 667.28 385.687 663.1 369.98 654.74C354.273 646.127 341.86 634.22 332.74 619.02C323.62 603.82 319.06 585.96 319.06 565.44C319.06 544.92 323.62 527.06 332.74 511.86C341.86 496.66 354.273 484.88 369.98 476.52C385.687 467.907 403.42 463.6 423.18 463.6C437.873 463.6 451.427 465.88 463.84 470.44C476.507 475 487.78 481.08 497.66 488.68C507.793 496.027 516.28 504.26 523.12 513.38C530.213 522.247 535.66 531.367 539.46 540.74C543.26 549.86 545.16 558.22 545.16 565.82C545.16 575.7 542.247 586.593 536.42 598.5C530.593 610.153 522.233 621.173 511.34 631.56C500.7 641.947 487.907 650.56 472.96 657.4C458.013 663.987 441.42 667.28 423.18 667.28ZM438.38 630.8C456.367 630.8 472.833 625.607 487.78 615.22C502.98 604.833 516.533 588.24 528.44 565.44C516.533 542.133 502.98 525.413 487.78 515.28C472.833 504.893 456.367 499.7 438.38 499.7C423.687 499.7 411.147 502.487 400.76 508.06C390.373 513.633 382.393 521.36 376.82 531.24C371.5 541.12 368.84 552.52 368.84 565.44C368.84 578.107 371.5 589.38 376.82 599.26C382.393 609.14 390.373 616.867 400.76 622.44C411.147 628.013 423.687 630.8 438.38 630.8ZM731.473 689.32C706.393 689.32 684.099 684.633 664.593 675.26C645.086 665.633 629.759 652.333 618.613 635.36C607.466 618.387 601.893 598.627 601.893 576.08C601.893 553.787 607.086 534.28 617.473 517.56C628.113 500.587 642.679 487.413 661.173 478.04C679.919 468.413 701.326 463.6 725.393 463.6C749.459 463.6 770.233 469.047 787.713 479.94C805.446 490.58 819.126 505.653 828.753 525.16C838.38 544.667 843.193 567.593 843.193 593.94H640.653V556.32H818.493L793.793 570.38C793.033 556.193 789.613 544.033 783.533 533.9C777.706 523.767 769.726 516.04 759.593 510.72C749.713 505.147 737.933 502.36 724.253 502.36C709.813 502.36 697.146 505.273 686.253 511.1C675.613 516.927 667.253 525.16 661.173 535.8C655.093 546.187 652.053 558.6 652.053 573.04C652.053 589 655.599 602.807 662.693 614.46C670.039 626.113 680.299 635.107 693.473 641.44C706.9 647.52 722.733 650.56 740.973 650.56C757.44 650.56 774.286 648.027 791.513 642.96C808.74 637.64 823.94 630.293 837.113 620.92V656.64C823.94 666.773 807.853 674.753 788.853 680.58C770.106 686.407 750.979 689.32 731.473 689.32ZM860.278 468.92H909.678L922.598 546.44V684H873.198V539.22L860.278 468.92ZM1008.1 463.6C1028.36 463.6 1045.59 467.653 1059.78 475.76C1073.96 483.867 1084.73 495.52 1092.08 510.72C1099.68 525.667 1103.48 543.78 1103.48 565.06V684H1054.08V573.04C1054.08 550.493 1048.76 533.52 1038.12 522.12C1027.73 510.467 1012.4 504.64 992.138 504.64C978.205 504.64 965.918 507.807 955.278 514.14C944.891 520.22 936.785 528.833 930.958 539.98C925.385 551.127 922.598 564.173 922.598 579.12L905.118 569.62C907.398 547.327 913.225 528.327 922.598 512.62C931.971 496.913 944.005 484.88 958.698 476.52C973.391 467.907 989.858 463.6 1008.1 463.6ZM1143.64 405.243H1231.62V684H1143.64V405.243ZM1022.66 366.75H1352.6V444.582H1022.66V366.75ZM1262.54 468.92H1311.94L1324.86 547.2V684H1275.46V537.7L1262.54 468.92ZM1433.92 467.4V510.72C1428.34 509.2 1422.26 508.06 1415.68 507.3C1409.09 506.54 1402.88 506.16 1397.06 506.16C1383.12 506.16 1370.71 509.2 1359.82 515.28C1348.92 521.36 1340.31 530.48 1333.98 542.64C1327.9 554.547 1324.86 569.24 1324.86 586.72L1313.46 572.66C1314.47 557.46 1317 543.273 1321.06 530.1C1325.36 516.673 1331.19 505.02 1338.54 495.14C1346.14 485.26 1355.38 477.533 1366.28 471.96C1377.17 466.387 1389.84 463.6 1404.28 463.6C1409.34 463.6 1414.54 463.98 1419.86 464.74C1425.18 465.247 1429.86 466.133 1433.92 467.4ZM1430.36 687.04C1424.54 687.04 1419.22 685.647 1414.4 682.86C1409.84 680.073 1406.17 676.4 1403.38 671.84C1400.6 667.027 1399.2 661.707 1399.2 655.88C1399.2 650.053 1400.6 644.86 1403.38 640.3C1406.17 635.487 1409.84 631.687 1414.4 628.9C1419.22 626.113 1424.54 624.72 1430.36 624.72C1436.19 624.72 1441.38 626.113 1445.94 628.9C1450.76 631.687 1454.56 635.487 1457.34 640.3C1460.13 644.86 1461.52 650.053 1461.52 655.88C1461.52 661.707 1460.13 667.027 1457.34 671.84C1454.56 676.4 1450.76 680.073 1445.94 682.86C1441.38 685.647 1436.19 687.04 1430.36 687.04ZM1603.71 689.32C1578.63 689.32 1556.34 684.633 1536.83 675.26C1517.33 665.633 1502 652.333 1490.85 635.36C1479.71 618.387 1474.13 598.627 1474.13 576.08C1474.13 553.787 1479.33 534.28 1489.71 517.56C1500.35 500.587 1514.92 487.413 1533.41 478.04C1552.16 468.413 1573.57 463.6 1597.63 463.6C1621.7 463.6 1642.47 469.047 1659.95 479.94C1677.69 490.58 1691.37 505.653 1700.99 525.16C1710.62 544.667 1715.43 567.593 1715.43 593.94H1512.89V556.32H1690.73L1666.03 570.38C1665.27 556.193 1661.85 544.033 1655.77 533.9C1649.95 523.767 1641.97 516.04 1631.83 510.72C1621.95 505.147 1610.17 502.36 1596.49 502.36C1582.05 502.36 1569.39 505.273 1558.49 511.1C1547.85 516.927 1539.49 525.16 1533.41 535.8C1527.33 546.187 1524.29 558.6 1524.29 573.04C1524.29 589 1527.84 602.807 1534.93 614.46C1542.28 626.113 1552.54 635.107 1565.71 641.44C1579.14 647.52 1594.97 650.56 1613.21 650.56C1629.68 650.56 1646.53 648.027 1663.75 642.96C1680.98 637.64 1696.18 630.293 1709.35 620.92V656.64C1696.18 666.773 1680.09 674.753 1661.09 680.58C1642.35 686.407 1623.22 689.32 1603.71 689.32ZM1860.2 689.32C1835.12 689.32 1812.83 684.633 1793.32 675.26C1773.81 665.633 1758.49 652.333 1747.34 635.36C1736.19 618.387 1730.62 598.627 1730.62 576.08C1730.62 553.787 1735.81 534.28 1746.2 517.56C1756.84 500.587 1771.41 487.413 1789.9 478.04C1808.65 468.413 1830.05 463.6 1854.12 463.6C1878.19 463.6 1898.96 469.047 1916.44 479.94C1934.17 490.58 1947.85 505.653 1957.48 525.16C1967.11 544.667 1971.92 567.593 1971.92 593.94H1769.38V556.32H1947.22L1922.52 570.38C1921.76 556.193 1918.34 544.033 1912.26 533.9C1906.43 523.767 1898.45 516.04 1888.32 510.72C1878.44 505.147 1866.66 502.36 1852.98 502.36C1838.54 502.36 1825.87 505.273 1814.98 511.1C1804.34 516.927 1795.98 525.16 1789.9 535.8C1783.82 546.187 1780.78 558.6 1780.78 573.04C1780.78 589 1784.33 602.807 1791.42 614.46C1798.77 626.113 1809.03 635.107 1822.2 641.44C1835.63 647.52 1851.46 650.56 1869.7 650.56C1886.17 650.56 1903.01 648.027 1920.24 642.96C1937.47 637.64 1952.67 630.293 1965.84 620.92V656.64C1952.67 666.773 1936.58 674.753 1917.58 680.58C1898.83 686.407 1879.71 689.32 1860.2 689.32Z"
              fill="currentColor"
            />
            <path
              d="M450.33 218.06C448.79 227.44 444.94 235.7 438.78 242.84C432.76 249.98 425.06 255.58 415.68 259.64C406.3 263.7 395.94 265.73 384.6 265.73C371.44 265.73 359.82 263.14 349.74 257.96C339.66 252.64 331.75 245.36 326.01 236.12C320.41 226.74 317.61 215.96 317.61 203.78C317.61 191.6 320.41 180.89 326.01 171.65C331.75 162.27 339.66 154.99 349.74 149.81C359.82 144.63 371.44 142.04 384.6 142.04C395.94 142.04 406.3 144.07 415.68 148.13C425.06 152.05 432.76 157.58 438.78 164.72C444.94 171.86 448.79 180.19 450.33 189.71H430.38C428.28 179.91 423.03 172.21 414.63 166.61C406.37 160.87 396.36 158 384.6 158C375.08 158 366.75 159.89 359.61 163.67C352.61 167.45 347.15 172.77 343.23 179.63C339.31 186.35 337.35 194.4 337.35 203.78C337.35 213.16 339.31 221.28 343.23 228.14C347.15 235 352.61 240.32 359.61 244.1C366.75 247.74 375.08 249.56 384.6 249.56C396.5 249.56 406.58 246.69 414.84 240.95C423.24 235.21 428.42 227.58 430.38 218.06H450.33ZM467.767 144.77H487.087L493.807 185.09V263H474.487V181.52L467.767 144.77ZM556.597 144.35V161.78C553.937 160.94 550.787 160.31 547.147 159.89C543.647 159.47 540.287 159.26 537.067 159.26C528.667 159.26 521.177 161.15 514.597 164.93C508.017 168.71 502.907 174.24 499.267 181.52C495.627 188.66 493.807 197.13 493.807 206.93L488.347 199.37C488.627 191.11 489.957 183.48 492.337 176.48C494.717 169.48 498.077 163.46 502.417 158.42C506.897 153.24 512.217 149.25 518.377 146.45C524.677 143.51 531.747 142.04 539.587 142.04C542.527 142.04 545.537 142.25 548.617 142.67C551.837 143.09 554.497 143.65 556.597 144.35ZM630.753 265.73C617.173 265.73 605.133 263.14 594.633 257.96C584.273 252.64 576.083 245.36 570.063 236.12C564.183 226.74 561.243 215.96 561.243 203.78C561.243 191.46 564.043 180.68 569.643 171.44C575.243 162.2 583.013 154.99 592.953 149.81C602.893 144.63 614.303 142.04 627.183 142.04C639.923 142.04 651.053 144.84 660.573 150.44C670.093 156.04 677.443 163.95 682.623 174.17C687.943 184.25 690.603 196.01 690.603 209.45H575.943V194.12H682.413L671.073 201.05C670.653 192.23 668.553 184.6 664.773 178.16C660.993 171.72 655.883 166.75 649.443 163.25C643.003 159.75 635.513 158 626.973 158C617.733 158 609.683 159.89 602.823 163.67C595.963 167.31 590.573 172.49 586.653 179.21C582.873 185.93 580.983 193.84 580.983 202.94C580.983 212.46 583.153 220.72 587.493 227.72C591.833 234.72 597.923 240.11 605.763 243.89C613.603 247.67 622.843 249.56 633.483 249.56C643.143 249.56 652.593 247.95 661.833 244.73C671.213 241.51 679.613 237.1 687.033 231.5V246.62C679.753 252.5 671.073 257.19 660.993 260.69C650.913 264.05 640.833 265.73 630.753 265.73ZM826.954 263L822.754 218.27L828.004 203.78L822.754 189.5L826.954 144.77H846.694L841.234 203.78L846.694 263H826.954ZM834.514 203.78C831.434 216.1 826.674 226.95 820.234 236.33C813.934 245.57 806.234 252.78 797.134 257.96C788.174 263.14 778.234 265.73 767.314 265.73C755.694 265.73 745.404 263.14 736.444 257.96C727.484 252.64 720.414 245.36 715.234 236.12C710.194 226.74 707.674 215.96 707.674 203.78C707.674 191.46 710.194 180.68 715.234 171.44C720.414 162.2 727.484 154.99 736.444 149.81C745.404 144.63 755.694 142.04 767.314 142.04C778.234 142.04 788.174 144.63 797.134 149.81C806.234 154.99 814.004 162.2 820.444 171.44C826.884 180.68 831.574 191.46 834.514 203.78ZM727.414 203.78C727.414 212.74 729.234 220.65 732.874 227.51C736.654 234.37 741.764 239.76 748.204 243.68C754.784 247.46 762.204 249.35 770.464 249.35C778.864 249.35 786.564 247.46 793.564 243.68C800.704 239.76 807.004 234.37 812.464 227.51C818.064 220.65 822.614 212.74 826.114 203.78C822.614 194.82 818.064 186.91 812.464 180.05C807.004 173.19 800.704 167.87 793.564 164.09C786.564 160.17 778.864 158.21 770.464 158.21C762.204 158.21 754.784 160.17 748.204 164.09C741.764 167.87 736.654 173.19 732.874 180.05C729.234 186.91 727.414 194.82 727.414 203.78ZM860.68 160.31V151.07L886.72 146.24L894.49 114.11H906.04V144.77H963.58V160.31H906.04V220.37C906.04 231.01 908.35 238.5 912.97 242.84C917.73 247.04 925.01 249.14 934.81 249.14C941.25 249.14 946.85 248.37 951.61 246.83C956.51 245.29 961.27 243.05 965.89 240.11V257.12C962.53 259.22 957.56 261.18 950.98 263C944.54 264.82 937.82 265.73 930.82 265.73C920.18 265.73 911.57 263.91 904.99 260.27C898.55 256.49 893.86 251.45 890.92 245.15C888.12 238.71 886.72 231.43 886.72 223.31V160.31H860.68ZM1044.81 265.73C1031.23 265.73 1019.19 263.14 1008.69 257.96C998.326 252.64 990.136 245.36 984.116 236.12C978.236 226.74 975.296 215.96 975.296 203.78C975.296 191.46 978.096 180.68 983.696 171.44C989.296 162.2 997.066 154.99 1007.01 149.81C1016.95 144.63 1028.36 142.04 1041.24 142.04C1053.98 142.04 1065.11 144.84 1074.63 150.44C1084.15 156.04 1091.5 163.95 1096.68 174.17C1102 184.25 1104.66 196.01 1104.66 209.45H989.996V194.12H1096.47L1085.13 201.05C1084.71 192.23 1082.61 184.6 1078.83 178.16C1075.05 171.72 1069.94 166.75 1063.5 163.25C1057.06 159.75 1049.57 158 1041.03 158C1031.79 158 1023.74 159.89 1016.88 163.67C1010.02 167.31 1004.63 172.49 1000.71 179.21C996.926 185.93 995.036 193.84 995.036 202.94C995.036 212.46 997.206 220.72 1001.55 227.72C1005.89 234.72 1011.98 240.11 1019.82 243.89C1027.66 247.67 1036.9 249.56 1047.54 249.56C1057.2 249.56 1066.65 247.95 1075.89 244.73C1085.27 241.51 1093.67 237.1 1101.09 231.5V246.62C1093.81 252.5 1085.13 257.19 1075.05 260.69C1064.97 264.05 1054.89 265.73 1044.81 265.73ZM1241.22 263L1237.02 217.85L1242.69 203.99L1237.44 189.08L1245.63 101.3H1265.37L1255.5 202.94L1260.96 263H1241.22ZM1248.57 203.78C1245.49 216.1 1240.73 226.95 1234.29 236.33C1227.99 245.57 1220.29 252.78 1211.19 257.96C1202.23 263.14 1192.29 265.73 1181.37 265.73C1169.75 265.73 1159.46 263.14 1150.5 257.96C1141.54 252.64 1134.47 245.36 1129.29 236.12C1124.25 226.74 1121.73 215.96 1121.73 203.78C1121.73 191.46 1124.25 180.68 1129.29 171.44C1134.47 162.2 1141.54 154.99 1150.5 149.81C1159.46 144.63 1169.75 142.04 1181.37 142.04C1192.29 142.04 1202.23 144.63 1211.19 149.81C1220.29 154.99 1228.06 162.2 1234.5 171.44C1240.94 180.68 1245.63 191.46 1248.57 203.78ZM1141.47 203.78C1141.47 212.74 1143.29 220.65 1146.93 227.51C1150.71 234.37 1155.82 239.76 1162.26 243.68C1168.84 247.46 1176.26 249.35 1184.52 249.35C1192.92 249.35 1200.62 247.46 1207.62 243.68C1214.76 239.76 1221.06 234.37 1226.52 227.51C1232.12 220.65 1236.67 212.74 1240.17 203.78C1236.67 194.82 1232.12 186.91 1226.52 180.05C1221.06 173.19 1214.76 167.87 1207.62 164.09C1200.62 160.17 1192.92 158.21 1184.52 158.21C1176.26 158.21 1168.84 160.17 1162.26 164.09C1155.82 167.87 1150.71 173.19 1146.93 180.05C1143.29 186.91 1141.47 194.82 1141.47 203.78ZM1396.61 265.73C1385.83 265.73 1376.66 263.56 1369.1 259.22C1361.68 254.74 1355.94 248.3 1351.88 239.9C1347.96 231.5 1346 221.42 1346 209.66V144.77H1365.32V206.51C1365.32 220.51 1368.47 231.15 1374.77 238.43C1381.07 245.57 1390.24 249.14 1402.28 249.14C1410.82 249.14 1418.24 247.25 1424.54 243.47C1430.84 239.55 1435.74 234.09 1439.24 227.09C1442.74 220.09 1444.49 211.97 1444.49 202.73L1452.05 207.14C1451.21 219.04 1448.27 229.4 1443.23 238.22C1438.33 247.04 1431.89 253.83 1423.91 258.59C1415.93 263.35 1406.83 265.73 1396.61 265.73ZM1451 263L1444.49 222.68V144.77H1463.81V225.62L1470.32 263H1451ZM1611.65 228.35C1611.65 235.91 1609.34 242.49 1604.72 248.09C1600.24 253.69 1593.59 258.03 1584.77 261.11C1576.09 264.19 1565.52 265.73 1553.06 265.73C1540.32 265.73 1529.05 263.98 1519.25 260.48C1509.59 256.84 1502.03 251.8 1496.57 245.36C1491.11 238.92 1488.17 231.43 1487.75 222.89H1507.49C1508.33 228.35 1510.78 233.18 1514.84 237.38C1518.9 241.44 1524.22 244.59 1530.8 246.83C1537.38 249.07 1544.87 250.19 1553.27 250.19C1565.45 250.19 1574.97 248.37 1581.83 244.73C1588.83 240.95 1592.33 235.84 1592.33 229.4C1592.33 224.36 1590.09 220.65 1585.61 218.27C1581.13 215.75 1572.8 213.86 1560.62 212.6L1537.73 210.29C1526.39 209.17 1517.29 207.14 1510.43 204.2C1503.71 201.12 1498.88 197.34 1495.94 192.86C1493 188.24 1491.53 183.13 1491.53 177.53C1491.53 169.83 1493.84 163.39 1498.46 158.21C1503.22 152.89 1509.8 148.9 1518.2 146.24C1526.6 143.44 1536.33 142.04 1547.39 142.04C1559.15 142.04 1569.58 143.72 1578.68 147.08C1587.92 150.44 1595.27 155.13 1600.73 161.15C1606.19 167.17 1609.2 174.1 1609.76 181.94H1590.23C1589.53 177.46 1587.43 173.4 1583.93 169.76C1580.43 165.98 1575.53 162.97 1569.23 160.73C1563.07 158.49 1555.44 157.37 1546.34 157.37C1535.14 157.37 1526.39 158.98 1520.09 162.2C1513.93 165.42 1510.85 170.11 1510.85 176.27C1510.85 180.75 1512.88 184.32 1516.94 186.98C1521 189.64 1528.21 191.53 1538.57 192.65L1564.61 195.38C1576.51 196.5 1585.89 198.46 1592.75 201.26C1599.61 204.06 1604.44 207.7 1607.24 212.18C1610.18 216.66 1611.65 222.05 1611.65 228.35ZM1635.81 144.35L1645.47 146.03L1655.13 144.35V263H1635.81V144.35ZM1645.26 126.92C1641.34 126.92 1637.98 125.73 1635.18 123.35C1632.52 120.83 1631.19 117.75 1631.19 114.11C1631.19 110.33 1632.52 107.25 1635.18 104.87C1637.98 102.35 1641.34 101.09 1645.26 101.09C1649.46 101.09 1652.89 102.35 1655.55 104.87C1658.21 107.25 1659.54 110.33 1659.54 114.11C1659.54 117.75 1658.21 120.83 1655.55 123.35C1652.89 125.73 1649.46 126.92 1645.26 126.92ZM1681.01 144.77H1700.33L1707.05 184.88V263H1687.73V182.15L1681.01 144.77ZM1755.98 142.04C1767.04 142.04 1776.42 144.28 1784.12 148.76C1791.82 153.1 1797.7 159.47 1801.76 167.87C1805.82 176.13 1807.85 186.14 1807.85 197.9V263H1788.53V201.26C1788.53 187.12 1785.24 176.48 1778.66 169.34C1772.22 162.06 1762.77 158.42 1750.31 158.42C1741.63 158.42 1734 160.38 1727.42 164.3C1720.98 168.22 1715.94 173.68 1712.3 180.68C1708.8 187.54 1707.05 195.59 1707.05 204.83L1699.28 199.37C1700.26 187.61 1703.27 177.46 1708.31 168.92C1713.35 160.38 1719.93 153.8 1728.05 149.18C1736.31 144.42 1745.62 142.04 1755.98 142.04ZM1947.45 234.23V213.02L1948.29 209.87V190.34L1947.45 186.14V144.77H1966.77V231.5C1966.77 246.9 1963.62 259.71 1957.32 269.93C1951.16 280.15 1942.76 287.78 1932.12 292.82C1921.48 297.86 1909.37 300.38 1895.79 300.38C1885.57 300.38 1876.05 298.91 1867.23 295.97C1858.55 293.17 1850.22 288.83 1842.24 282.95V265.94C1850.64 272.8 1859.25 277.56 1868.07 280.22C1877.03 282.88 1885.92 284.21 1894.74 284.21C1911.82 284.21 1924.84 279.73 1933.8 270.77C1942.9 261.95 1947.45 249.77 1947.45 234.23ZM1887.39 255.44C1876.75 255.44 1867.09 253.06 1858.41 248.3C1849.87 243.54 1843.08 236.96 1838.04 228.56C1833 220.02 1830.48 210.08 1830.48 198.74C1830.48 187.26 1833 177.32 1838.04 168.92C1843.08 160.38 1849.87 153.8 1858.41 149.18C1867.09 144.42 1876.75 142.04 1887.39 142.04C1895.37 142.04 1902.79 143.3 1909.65 145.82C1916.51 148.2 1922.74 151.42 1928.34 155.48C1933.94 159.54 1938.7 164.09 1942.62 169.13C1946.54 174.17 1949.55 179.28 1951.65 184.46C1953.89 189.5 1955.01 194.26 1955.01 198.74C1955.01 204.48 1953.33 210.64 1949.97 217.22C1946.75 223.66 1942.06 229.82 1935.9 235.7C1929.88 241.44 1922.74 246.2 1914.48 249.98C1906.36 253.62 1897.33 255.44 1887.39 255.44ZM1892.64 239.9C1903.56 239.9 1913.64 236.68 1922.88 230.24C1932.12 223.8 1940.59 213.3 1948.29 198.74C1940.73 183.9 1932.26 173.33 1922.88 167.03C1913.64 160.59 1903.56 157.37 1892.64 157.37C1883.54 157.37 1875.77 159.19 1869.33 162.83C1863.03 166.33 1858.2 171.16 1854.84 177.32C1851.62 183.48 1850.01 190.62 1850.01 198.74C1850.01 206.58 1851.62 213.65 1854.84 219.95C1858.2 226.11 1863.03 231.01 1869.33 234.65C1875.77 238.15 1883.54 239.9 1892.64 239.9Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default App;
