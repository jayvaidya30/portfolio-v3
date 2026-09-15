"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiGlobe, FiMail } from "react-icons/fi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { profile } from "@/lib/data";

const items = [
  { label: "GitHub", href: profile.links.github, icon: FaGithub },
  { label: "LinkedIn", href: profile.links.linkedin, icon: FaLinkedinIn },
  { label: "Website", href: profile.links.website, icon: FiGlobe },
  { label: "Email", href: `mailto:${profile.email}`, icon: FiMail },
];

export function Dock() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex items-center justify-center px-4 md:bottom-6">
      <div className="relative flex items-center gap-2 overflow-hidden rounded-xl border border-gray-700 bg-gray-900 px-3 py-2 shadow-lg shadow-gray-400/50 backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl md:gap-4 md:px-4 md:py-2.5">
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="animate-shimmer h-full w-[160%] bg-[linear-gradient(100deg,transparent_0%,rgba(232,160,90,0.22)_38%,rgba(92,58,82,0.35)_55%,transparent_100%)]" />
        </div>

        <TooltipProvider delayDuration={0}>
          <div className="dock-container relative z-10">
            {items.map(({ label, href, icon: Icon }) => (
              <div key={label} className="dock-item">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={href}
                      target={href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="dock-icon flex items-center justify-center"
                    >
                      <Icon className="text-[1.1rem] md:text-[1.35rem]" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    sideOffset={10}
                    className="border border-gray-700 bg-gray-800 font-medium text-white [&_svg]:hidden"
                  >
                    {label}
                  </TooltipContent>
                </Tooltip>
              </div>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </div>
  );
}
