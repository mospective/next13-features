import Image from "next/image";
import testImage from "../../../public/vercel.svg";
import '../../../styles/globals.css';

export default function Page() {
    return (<>
        <h1>Person page</h1>
        <Image
            src={testImage}
            alt="Vercel logo"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
        />

        <Image
            src="https://miro.medium.com/max/1400/1*pJdLvOAPgVTfESZlSiCTwQ.png"
            alt="Vercel logo"
            width={1400}
            height={600}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
        />

    </>
    )
}