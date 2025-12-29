// import Navbar from "@/components/Navbar";
// import Navbar2 from "@/components/Navbar2";

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* <Navbar2 /> */}
      {children}
    </div>
  );
}
