import { Badge } from "@/components/ui/badge"

export const StatusBadge = ({ status }: { status: string }) => {
    const color = status === "OPEN" ? "bg-green-500" : "bg-blue-500"
    return (<Badge className={`${color} text-white`}>{status}</Badge>)
}