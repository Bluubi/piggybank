import {Link} from "react-router-dom";
import {ComponentProps} from "react";


type NavLinkProps = ComponentProps<'a'> & {
    path: string
}
export default function NavLink({path, ...props}: NavLinkProps){
   return (<Link to={path}>
       { props.children }
   </Link> )
}
