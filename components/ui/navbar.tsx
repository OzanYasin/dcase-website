"use client";

import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = React.useState<string | null>(null);
  return (
    <div
      className={cn(
        "container fixed inset-x-0 top-10 z-50 mx-auto w-full",
        className,
      )}
    >
      <Menu setActive={setActive}>
        <Link
          href="/"
          className="absolute left-6 top-4 flex items-center gap-1.5 font-semibold text-white"
        >
          <Image
            src="/vectorize-logo-icon.svg"
            alt="Logo"
            width={40}
            height={40}
          />
          dcase
        </Link>
        <MenuItem setActive={setActive} active={active} item="Platform">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/product">Product Overview</HoveredLink>
            <HoveredLink href="/platform-architecture">
              Platform Architecture
            </HoveredLink>
            <HoveredLink href="/">Deployment Models</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Solutions">
          <div className="grid gap-10 p-4 text-sm">
            <ProductItem
              title="Our Solutions"
              href="/"
              src="/placeholder.svg"
              description="From Small to Large Pack"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Resources">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">ITSM Use Cases</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Company">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">About</HoveredLink>
            <HoveredLink href="/">Contact</HoveredLink>
          </div>
        </MenuItem>
        <Button
          variant="default"
          className="duration-400 absolute right-6 top-4 transform rounded-r-2xl bg-dcase/95 font-semibold text-white transition hover:translate-x-1 hover:bg-dcase"
        >
          Request a Demo
        </Button>
      </Menu>
    </div>
  );
}
