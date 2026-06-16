import dynamic from "next/dynamic";

const RoleSelector = dynamic(
  () =>
    import("./RoleSelector").then((mod) => ({
      default: mod.RoleSelector,
    })),
  {
    loading: () => (
      <div className="flex justify-center items-center">
        Loading...
      </div>
    ),
  }
);

type PageProps = {
  searchParams: Promise<{
    mode?: string;
    phase?: string;
  }>;
};

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;

  return (
    <div className="px-[5%] mt-[15%] md:mt-0">
      <RoleSelector
        mode={params.mode ?? "single"}
        phase={params.phase ?? "uncertainty"}
      />
    </div>
  );
}