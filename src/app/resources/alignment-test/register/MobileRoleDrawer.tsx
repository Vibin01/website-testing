"use client";

import { Drawer, DrawerContent } from "@/components/ui/drawer";

interface Role {
  id: string;
  title: string;
  description: string;
  icon: string;
  bgLight: string;
}

interface MobileRoleDrawerProps {
  role: Role | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading?: boolean;
  error?: string;

  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;

  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

export function MobileRoleDrawer({
  role,
  open,
  onOpenChange,
  onSubmit,
  loading,
  error,
  name,
  setName,
  email,
  setEmail,
}: MobileRoleDrawerProps){

  if (!role) return null;

  return (
    <Drawer open={open} onOpenChange={onOpenChange}  >
      <DrawerContent className=" p-0 m-0 border-transparent">

        <div className="rounded-t-[30px] border border-[#D3E6FF] bg-white p-5">
          <h3 className="text-base font-bold mt-2">
            {role.title} Alignment Test 
          </h3>

          <div className="mt-md rounded-md border border-[#B2D0F6] bg-[#EEF6FF] p-md text-xl font-medium text-primary">
            Understand how your decisions align across real hiring situations.
          </div>

          {error && (
            <p className="mt-4 text-sm font-medium text-red-500">{error}</p>
          )}

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12 w-full rounded-md border border-gray-300 px-4 text-base outline-none focus:border-primary"
              required
            />

            <input
              type="email"
              placeholder={
                role.id === "candidate"
                  ? "Your Email"
                  : "Your Official Email ID"
              }
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 w-full rounded-md border border-gray-300 px-4 text-base outline-none focus:border-primary"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-2 mb-5 h-12 w-full rounded-2xl bg-primary text-xl font-semibold text-white disabled:opacity-70"
            >
              {loading
                ? "Please wait..."
                : role.id === "candidate"
                ? "Register for Free"
                : "Register for Free"}
            </button>
          </form>
        </div>
      </DrawerContent>
    </Drawer>
  );
}