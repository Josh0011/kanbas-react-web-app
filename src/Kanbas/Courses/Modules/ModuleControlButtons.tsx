import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import {FaCheckCircle} from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";


export default function ModuleControlButtons({ moduleId, deleteModule, editModule }: { moduleId: string; deleteModule: (moduleId: string) => void; editModule: (moduleId: string) => void }) {
    return (
        <div className="float-end d-flex align-items-center">
            <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-3" />
            <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)}/>
            <FaCheckCircle style={{top: "2px"}}
                     className="text-success me-1 fs-5"/>
            <BsPlus className="fs-4 mx-2"/>
            <IoEllipsisVertical className="fs-4"/>
        </div>
    );
}