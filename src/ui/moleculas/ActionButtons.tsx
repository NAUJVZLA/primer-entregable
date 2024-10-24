import { Pencil, Trash2 } from "lucide-react";
import { Button } from "../atoms/boton";

export const ActionButtons = () => (
    <div className="flex justify-end space-x-2">
        <Button variant="delete" >
            <Pencil className="h-4 w-4" />
        </Button>
        <Button variant="secondary" >
            <Trash2 className="h-4 w-4" />
        </Button>
    </div>
)