import Link from "next/link";


const PrimaryButton = ({value, linkTo}) => {
    return (
        <div>
            <Link href={linkTo}>
                <button className="bg-[#F47108] text-white px-8 py-2 rounded-full">{value}</button>
            </Link>
        </div>
    )
}

export default PrimaryButton;