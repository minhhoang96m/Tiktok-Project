import { HeaderOnly} from "~/components/Layout";

import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";


// import { useRef, useState } from 'react'
// import Search from "~/pages/Search";


const publicRoutes = [
    { path: "/", component: Home },
    { path: "/following", component: Following },
    { path: "/profile", component: Profile },
    { path: "/upload", component: Upload, layout: HeaderOnly },
    // { path: "/search", component: Search, layout: null }
    { path: "/@?nickname", component: Profile },
];
const privateRoutes = [];
// function Datas({myData}) {
//     const [ok,setok] = useState('')
//     const refs = useRef(myData)
//     setok(refs.current)
//     console.log(ok)
//     return (<>{
       
//     }
//     </>) 
// }

// export default Datas;
export { publicRoutes, privateRoutes };
