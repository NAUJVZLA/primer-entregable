interface Job = {
    id: number
    title: string
    description: string
    status: string
    company: string
}


export const JobVacanciesGrid = ({ jobs }: { jobs: Job[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
        ))}
    </div>
)
