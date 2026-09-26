const galleryElement = document.getElementById("gallery");
const latestImageElement = document.getElementById("latestImage");

// GitHubリポジトリの情報
const GITHUB_USER = "kitaakari0202";
const GITHUB_REPO = "kitaakari0202.github.io";
const GALLERY_FOLDER = "gallery";

const apiUrl =
    `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/contents/${GALLERY_FOLDER}`;

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error("画像一覧を取得できませんでした");
        }

        return response.json();
    })
    .then(files => {

        // 「数字.png」だけを取得
        const images = files
            .filter(file => /^\d+\.png$/i.test(file.name))
            .sort((a, b) => {
                const numA = parseInt(a.name, 10);
                const numB = parseInt(b.name, 10);

                return numB - numA;
            });

        // 画像がなかった場合
        if (images.length === 0) {
            console.log("galleryフォルダに数字.pngの画像がありません。");
            return;
        }


        // ========================================
        // 一番数字が大きい画像を最新画像として表示
        // ========================================

const latest = images[0];

if (latestImageElement) {

    // クリック用リンク
    const latestLink = document.createElement("a");

    latestLink.href = latest.download_url;
    latestLink.target = "_blank";

    // 最新画像
    const latestImg = document.createElement("img");

    latestImg.src = latest.download_url;
    latestImg.alt = latest.name;

    // 画像をリンクの中に入れる
    latestLink.appendChild(latestImg);

    // latestImageに追加
    latestImageElement.appendChild(latestLink);
}


        // ========================================
        // ギャラリー表示
        // ========================================

        images.forEach(image => {

            const tile = document.createElement("a");

            tile.className = "tile";
            tile.href = image.download_url;
            tile.target = "_blank";


            const img = document.createElement("img");

            img.src = image.download_url;
            img.alt = image.name;


            tile.appendChild(img);
            galleryElement.appendChild(tile);
        });

    })
    .catch(error => {
        console.error(error);
    });