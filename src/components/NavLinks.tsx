import Link from "next/link";

const links = [
    { name: "clientes",href:"/dashboard/client", icon: "" },
    { name: "personal",href:"/dashboard/employee", icon: "" },
    { name: "servicios",href:"/dashboard/service", icon: "" },
    { name: "ajustes",href:"/dashboard/setup", icon: "" },
]



export default function NavLinks() {
    return (
        <>
        <nav className=" fixed bottom-0 top-0 w-32 h-screen  bg-secondary  text-slate-500">
            {
                links.map((link, i) => (<Link key={i} href={link.href} className="block h-32 text-center">{link.name}</Link>))
            }
        </nav>
        <div className="w-32"></div>
        </>
    );
}
NavLinks;