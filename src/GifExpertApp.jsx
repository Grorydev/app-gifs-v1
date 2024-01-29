import { useState } from "react";
import CategoryApp from "./components/CategoryApp"
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
    const [categories, setCategories] = useState([
        // "One Punch",
        // "Samurai X",
        "Inuyasha"
    ]);

    return (
        <div className="container-fluid">
            <CategoryApp setCategories={setCategories} />
                {categories.map((element) => (
                    <GifGrid
                    key={element}
                    category={element} />
                ))}
        </div>
    );
};



export default GifExpertApp;

