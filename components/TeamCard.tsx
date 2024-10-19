
interface TeamCardProps {
    profileImage: string,
    profileUrl: string,
    name: string,
    description: string,
}

const TeamCard = ({ profileImage, profileUrl, name, description }: TeamCardProps) => {
    return (
    <div class="flex items-center p-2 border border-gray-300 rounded-lg hover:bg-gray-500">
        <a href={profileUrl} target="_blank" class="flex items-center text-inherit no-underline w-full">
            <img src={profileImage} alt="Profile Image" class="w-10 h-10 rounded-full mr-2" />
            <div class="">
                <h3 class="m-0 text-lg">{name}</h3>
                <p class="m-1 text-sm">{description}</p>
            </div>
        </a>
    </div>
    );
};

export default TeamCard;