


export default function Component() {
    type Job = {
        id: number
        title: string
        description: string
        status: string
        company: string
    }
    const jobs: Job[] = [
        {
            id: 1,
            title: "Desarrollador Frontend",
            description: "Se busca desarrollador con experiencia en React",
            status: "OPEN",
            company: "TechCorp",
        },
        {
            id: 2,
            title: "Diseñador UX",
            description: "Diseñador UX con 3 años de experiencia",
            status: "PENDING",
            company: "DesignHub",
        },
        // ... add more job objects as needed
    ]

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Vacantes Disponibles</h1>
            <JobVacanciesGrid jobs={jobs} />
        </div>
    )
}