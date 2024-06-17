import Image from "next/image";

export default function Hero() {
    return(
        <section className="mb-16">
            <div className=" overflow-hidden">
                <Image
                    src="/Hero/4BBFA896-C0B1-49A0-B3AC-A66E47EB81E2.JPG"
                    width="2000"
                    height="1000"
                    alt="Hero"
                    object-fit="cover"
                />
            </div>
        </section>
    )
}