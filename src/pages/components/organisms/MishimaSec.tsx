import Image from "next/image";

export default function MishimaSec() {
    return (
        <section className="pb-16 flex justify-center">
            <div className="flex gap-16">
                <div className="">
                    <div className="flex flex-col mb-4">
                        <h2 className="text-xl font-bold">三淵嘉子について</h2>
                        <p className="text-sm">About Mishima</p>
                    </div>
                    <p className=" w-600">明治大学は、いち早く法学を志す女性に門戸を開くため、1929（昭和4）年4月に専門部の一部門として女子部を設置し、1931（昭和6）年には女子部の卒業生に対して明治大学が設置する学部への入学を認めました。その結果、女子部と法学部で学んだ女子学生のなかから、三淵嘉子、中田正子、久米愛という3名の日本初の女性弁護士が誕生し、その後もしばらくは、女性弁護士の多くが明治大学女子部と法学部で学んだ者たちで占められました。</p>
                </div>
                <div>
                    <Image
                        src="/Top/14019_color.png"
                        width="100"
                        height="100"
                        alt="ハートを持った男性"
                    />
                </div>
            </div>
        </section>
    );
}
