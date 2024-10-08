import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import {FaCheckCircle} from "react-icons/fa";

export default function ModuleControlButtons() {
    return (
        <div className="float-end d-flex align-items-center">
      <FaCheckCircle style={{top: "2px"}}
                     className="text-success me-1 fs-5"/>
            <BsPlus className="fs-4 mx-2"/>
            <IoEllipsisVertical className="fs-4"/>
        </div>
    );
}