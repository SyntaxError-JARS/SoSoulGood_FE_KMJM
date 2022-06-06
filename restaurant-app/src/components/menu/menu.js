import { useContext, useEffect} from "react";
import { useState } from "react";

export default function Menu() {

    const [menuBody, setMenuBody] = useState([]);
    const [menu, setMenu] = useState(true);
    const url = "http://localhost:3000/SoSoulGood";

    useEffect(() => {
        viewMenu();
    }, [menu]);

    async function viewMenu() {
        try {
            console.log((`${url}/menu`));
            const response = await fetch(`${url}/menu`);
            const menu = await response.json();
            console.log(menu);

            const menuRows = menu.map((e) => {
                return (
                    <tr>
                        <td>{e.menuItem}</td>
                        <td>{e.price}</td>
                    </tr>
                );
            });
            
            setMenuBody(menuRows);
            console.log(menu);
        } catch (e) {
            console.error(e);
        }
    }
    return (
        <>
            <h1>Here is our menu</h1>

            <button onClick={viewMenu}>GET</button>

            <div class="container">
                <h2></h2>
            </div>

            <div class="container">
                <table>
                    <tbody>{menuBody}</tbody>
                </table>
            </div>
        </>
    )
}