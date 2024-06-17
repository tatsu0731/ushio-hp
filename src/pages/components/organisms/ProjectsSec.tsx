import Image from "next/image";

export default function ProjectsSec() {
    return (
        <section className="pb-16 flex justify-center">
            <div className="flex gap-16">
                <div>
                    <Image
                        src="/Top/12106_color.png"
                        width="120"
                        height="256"
                        alt="ハートを持った男性"
                    />
                </div>
                <div className="">
                    <div className="flex flex-col mb-4">
                        <h2 className="text-xl font-bold">本愛好プロジェクトについて</h2>
                        <p className="text-sm">About This Project</p>
                    </div>
                    <p className=" w-600">本プロジェクト（以下牛に翼プロジェクト）は明治大学情報コミュニケーション学部としてダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー</p>
                </div>
            </div>
        </section>
    );
}
