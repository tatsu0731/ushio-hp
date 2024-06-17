import Image from "next/image";

export default function ProjectSec() {
    return (
        <section className="pb-16 flex justify-center">
            <div className="flex gap-16">
                <div>
                    <Image
                        src="/Top/20171_color.png"
                        width="180"
                        height="256"
                        alt="ハートを持った男性"
                    />
                </div>
                <div className="">
                    <div className="flex flex-col mb-4">
                        <h2 className="text-xl font-bold">企画展について</h2>
                        <p className="text-sm">About Project</p>
                    </div>
                    <p className=" w-600">2024年4月1日（月）から連続テレビ小説「虎に翼」が放送されます。主人公は、日本初の女性弁護士で後に裁判官となった一人の女性。彼女とその仲間たちは困難な時代に道なき道を切り開き、迷える子どもや追いつめられた女性たちを救っていく——情熱あふれる法曹たちの物語を極上のリーガルエンターテインメントとして贈ります。本展示では、「番組紹介パネル」や番組小道具、劇中衣装、出演者全身パネル、セット再現などを通して、連続テレビ小説「虎に翼」の世界をお届けいたします。</p>
                </div>
            </div>
        </section>
    );
}
