import { Link } from "react-router-dom";

export default function Home() {
    
    return (
        <>
            <div><h1>Welcome to SoSoulGood</h1></div>
            <div>
                <Link to = "http://localhost:3000/SoSoulGood/menu"><button>View Our Menu</button></Link>
                <span>                           </span>
                <Link to = "http://localhost:3000/SoSoulGood/customer"><button>Order</button></Link>
            </div>
        </>
    )
}