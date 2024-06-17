import Image from "next/image";

export default function PromoteSNS() {
    return (
        <section className="flex flex-col items-center pb-16">
            <div className="flex flex-col items-center py-8 px-16 bg-slate-100 w-600 rounded-xl">
                <h2 className="text-xl font-bold mb-4">公式SNSはこちら</h2>
                <p>各種SNSからイベントの最新情報をお知らせしています！</p>
                <div className="mt-8">
                    <p className="text-sm text-orange-300 mb-4">\ 登録してね！ /</p>
                    <div className="flex gap-4">
                        <Image
                            src="/Logo/Instagram_Glyph_Gradient.png"
                            alt="Logo-Instagram"
                            width="40"
                            height="40"
                        />
                        <Image
                            src="/Logo/TikTok-logo-RGB-Tag.png"
                            alt="Logo-TikTok"
                            width="40"
                            height="40"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
