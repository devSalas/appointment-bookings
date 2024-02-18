import NavLinks from "@/components/NavLinks";
import Link from "next/link";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-full flex gap-4">
            <NavLinks/>

            <div className="p-4  bg-primary text-black  w-screen">
                {children}
            </div> 
        </div>
    );
}