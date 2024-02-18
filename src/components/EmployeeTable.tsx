function EmployeeTable() {
    return ( 
        <table className="w-full border-collapse border">
            <thead>
                <tr>
                    <th>nombre</th>
                    <th>apellidos</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>address</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Esteban</td>
                    <td>Salas</td>
                    <td>esalassulca@gmail.com</td>
                    <td>927895435</td>
                    <td>San Juan de Miraflores - Lima</td>
                </tr>
            </tbody>
        </table>
 );
}

export default EmployeeTable;