import EmployeeTable from "@/components/EmployeeTable";
import Link from "next/link";

    function Dashboard() {
    return ( <div className="h-screen w-full ">
        <h2 className="text-center">Empleado</h2>
        <section className="flex justify-between py-8 ">
        <label htmlFor="search">
            <input name="search" type="text" placeholder="Buscar..." />
        </label>
        <div>
            <Link href ={"/dashboard/employee/create"}>
                Crear Usuario
            </Link> 
        </div>
        </section>
        <section>
            <EmployeeTable/>
        </section>
    </div> );
}

    export default Dashboard;