import { useBox } from "@react-three/cannon";
import { useRef } from "react";

export default function ColliderBox() {
    useBox(() => ({
        //args: scale,
        //position,
        type: "Static"
    }));
    useRef(null);
    return(null);
}