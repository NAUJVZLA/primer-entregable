

export const JobInfo = ({ title, description }: { title: string; description: string }) => (
    <div>
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <p className="text-gray-600">{description}</p>
    </div>
)
