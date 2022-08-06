import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import data from "../data";



function App(){
    return(    <div>
        <Header />
        {data.map(matter => {
            return <Note key= {matter.id}
            title= {matter.title}
            content= {matter.content} />

        }
        )        }
        <Footer />
    </div>);

}


export default App;