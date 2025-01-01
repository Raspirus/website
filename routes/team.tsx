import TeamCard from "../components/TeamCard.tsx";

const team = () => {
    return (
        <div className="space-y-4 p-8">
            <h1 className="text-4xl font-bold w-full text-center">Meet the Team</h1>

            <h2 className="text-3xl font-semibold">Maintainers</h2>
            <TeamCard
                profileImage="https://avatars.githubusercontent.com/u/50681275?v=4"
                profileUrl="https://github.com/Benji377"
                name="Benjamin Demetz"
                description="❤️ Maintainer"
            />
            <TeamCard
                profileImage="https://avatars.githubusercontent.com/u/77393763?v=4?s=100"
                profileUrl="https://github.com/GamingGuy003"
                name="GamingGuy003"
                description="❤️ Co-Maintainer"
            />

            <h2 className="text-3xl font-semibold">Sponsors</h2>
            <TeamCard
                profileImage="https://avatars.githubusercontent.com/u/71591558?v=4"
                profileUrl="https://github.com/tuchaVshortah"
                name="Nurkanat Baysenkul"
                description="💰 Sponsor"
            />
            <TeamCard
                profileImage="https://avatars.githubusercontent.com/u/127700913?v=4"
                profileUrl="https://github.com/dylanchxx"
                name="Dylanchxx"
                description="💰 Sponsor"
            />

            <h2 className="text-3xl font-semibold">Contributors</h2>
            <TeamCard
                profileImage="https://avatars.githubusercontent.com/u/7541399?v=4?s=100"
                profileUrl="https://github.com/mwallnoefer"
                name="Matthias Dieter Wallnöfer"
                description="🧑‍🏫 Mentoring"
            />
            <TeamCard
                profileImage="https://avatars.githubusercontent.com/u/38058764?v=4?s=100"
                profileUrl="https://github.com/zja203"
                name="Zack Amoroso"
                description="📦 Linux Tester"
            />
            <TeamCard
                profileImage="https://avatars.githubusercontent.com/u/168407?v=4?s=100"
                profileUrl="https://github.com/pguyot"
                name="Paul Guyot"
                description="💻 GitHub Action"
            />

            <h2 className="text-3xl font-semibold">Special Credits</h2>
            <TeamCard
                profileImage="https://avatars.githubusercontent.com/u/74677245?v=4"
                profileUrl="https://github.com/Lairex59"
                name="Lairex59"
                description="💡 Ideas and Support"
            />
            <TeamCard
                profileImage="https://avatars.githubusercontent.com/u/54536011?s=200&v=4"
                profileUrl="https://github.com/tauri-apps"
                name="Tauri Devs"
                description="💡 Community Support"
            />
        </div>
    );
};

export default team;
