
/* =========================================
   추석맞이 가정예배 JavaScript
========================================= */


/* =========================================
   예배 시작하기
========================================= */

const startButton =
    document.getElementById("startBtn");


if (startButton) {

    startButton.addEventListener("click", function () {

        const guide =
            document.getElementById("guide");


        if (guide) {

            guide.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

}


/* =========================================
   예배 순서 버튼
========================================= */

const orderButtons =
    document.querySelectorAll(".order-button");


orderButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const targetId =
            button.dataset.target;


        const target =
            document.getElementById(targetId);


        if (!target) {

            console.log(
                "이동할 영역을 찾을 수 없습니다:",
                targetId
            );

            return;

        }


        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================
   카드 등장 애니메이션
========================================= */

const cards =
    document.querySelectorAll(".card");


if ("IntersectionObserver" in window) {

    const cardObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                    }

                });

            },

            {
                threshold: 0.05
            }

        );


    cards.forEach(function (card) {

        cardObserver.observe(card);

    });

}
else {

    cards.forEach(function (card) {

        card.classList.add("show");

    });

}


/* =========================================
   성경 본문 사이트
========================================= */

const bibleButton =
    document.getElementById("bibleButton");


if (bibleButton) {

    bibleButton.addEventListener(
        "click",
        function () {

            window.open(
                "https://www.bible.com/ko/bible/compare/2CO.9.8-10",
                "_blank"
            );

        }
    );

}


/* =========================================
   음악
========================================= */

const song1 =
    document.getElementById("song1Audio");


const song2 =
    document.getElementById("song2Audio");


/* =========================================
   한 곡을 재생하면 다른 곡 정지
========================================= */

if (song1 && song2) {

    song1.addEventListener(
        "play",
        function () {

            song2.pause();

        }
    );


    song2.addEventListener(
        "play",
        function () {

            song1.pause();

        }
    );

}


/* =========================================
   song1 로딩 확인
========================================= */

if (song1) {

    song1.addEventListener(
        "loadedmetadata",
        function () {

            console.log(
                "song1.mp3 로딩 성공"
            );

        }
    );


    song1.addEventListener(
        "error",
        function () {

            const error =
                document.getElementById(
                    "song1Error"
                );


            if (error) {

                error.textContent =
                    "song1.mp3를 불러오지 못했습니다. index.html과 song1.mp3가 같은 폴더에 있는지 확인해주세요.";

            }

        }
    );

}


/* =========================================
   song2 로딩 확인
========================================= */

if (song2) {

    song2.addEventListener(
        "loadedmetadata",
        function () {

            console.log(
                "song2.mp3 로딩 성공"
            );

        }
    );


    song2.addEventListener(
        "error",
        function () {

            const error =
                document.getElementById(
                    "song2Error"
                );


            if (error) {

                error.textContent =
                    "song2.mp3를 불러오지 못했습니다. index.html과 song2.mp3가 같은 폴더에 있는지 확인해주세요.";

            }

        }
    );

}