import { auth } from "@/app/lib/auth";

export default async function Dashboard() {
    const session = await auth();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Protected Dashboard</h1>
        </div>
    );
}