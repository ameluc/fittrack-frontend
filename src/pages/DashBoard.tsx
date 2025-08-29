import type { JSX } from "react";


export default function Dashboard() : JSX.Element
{
    return (<><div className="dashboard-page">

        <header className="dashboard-header">
            <h1>Welcome back, [UserName]!</h1>
        </header>

        <main className="dashboard-content">

            <section className="dashboard-card">
                <h2>Daily Activity</h2>
                <div className="placeholder">[ Chart placeholder ]</div>
            </section>

            <section className="dashboard-card">
                <h2>Progress Overview</h2>
                <div className="placeholder">[ Stats placeholder ]</div>
            </section>

            <section className="dashboard-card">
                <h2>Profile & Settings</h2>
                <div className="placeholder">[ Quick link / button placeholder ]</div>
            </section>

        </main>
</div></>);
}
