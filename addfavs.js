const Add_favs = () => {
    return ( 
        <div className="add_Favs">
            <div className="form">
                <img src="" alt="" />
                <form action=" ">
                    <input type="text" placeholder="Title"/>
                    <input type="text" placeholder="Genre"/>
                    <input type="text" placeholder="Language"/>
                    <input type="number" min="0" max="10" placeholder="Rating" />
                    <button>Add</button>
                </form>
            </div>
            <div className="content">
                <h1>Add your favourite movies and TV shows.</h1>
            </div>
        </div>
     );
}
 
export default Add_favs;