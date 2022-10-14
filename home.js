const Home = () => {
    let images= [ 
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1529/571529-v"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/5085/635085-v"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6536/846536-v"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8317/1328317-v-56412010beba"}
    ]   
    return ( 
        <div className="home">
            <div className="poster">
                <img width="1200" height="400" src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2022-09-21/Desk_MasterChefAustraliaNS-9875146c-696e-49fc-82aa-ee739909adf7.jpg" alt="" />
            </div>
            <div className="movies_list">
                {images.map((data)=>{
                    return (
                        <img height="300" width="220" src={data.img} alt="" />
                    )
                    })}    
             </div>
        </div>
     );
}
 
export default Home;