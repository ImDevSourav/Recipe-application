import { Link } from "react-router-dom"
export default function RecipeItem ({item}) {
    return <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-1 rounded-3xl border-white">
        <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
         <img src={item?.image_url} alt="recipe items" className="block w-full"/>
        </div>
        <div>
            <span className="text-sm text-rose-700 font-medium">{item?.publisher}</span>
            <h3 className= "font-bold text-2xl truncate text-rose-700">{item?.title}</h3>
            <Link to={`/recipe-item/${item?.id}`}
            className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-rose-950 text-white">
            Recipe Details</Link>
        </div>
    </div>

}