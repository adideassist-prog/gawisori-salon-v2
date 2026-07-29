const NAVER_BOOKING_URL =
  "https://m.booking.naver.com/booking/13/bizes/410089/items/3640564?area=ple&lang=ko&startDate=2026-07-28&tab=book&theme=place";
const NAVER_PLACE_URL =
  "https://m.place.naver.com/hairshop/1539420564/home";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const imagePath = (name: string) => `${basePath}/images/${name}`;

const services = [
  {
    number: "01",
    english: "FACE DESIGN CUT",
    korean: "얼굴형 맞춤 디자인컷",
    description:
      "얼굴의 선과 모발의 흐름을 함께 살펴, 손질할수록 자연스러운 형태를 설계합니다.",
    image: "signature-bob.webp",
    position: "center 46%",
  },
  {
    number: "02",
    english: "NATURAL WAVE",
    korean: "결을 살리는 내추럴 펌",
    description:
      "과하게 꾸민 느낌보다 본래의 분위기를 살리는 부드러운 움직임을 만듭니다.",
    image: "signature-wave.webp",
    position: "center 44%",
  },
  {
    number: "03",
    english: "COLOR ARCHITECTURE",
    korean: "피부톤 맞춤 컬러 디자인",
    description:
      "피부의 온도와 일상의 스타일을 고려해 오래 보아도 편안한 색을 제안합니다.",
    image: "hero-editorial.webp",
    position: "66% center",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="주요 메뉴">
        <a className="wordmark" href="#top" aria-label="가위소리 처음으로">
          GAWISORI
        </a>
        <nav className="desktop-nav" aria-label="페이지 메뉴">
          <a href="#signature">Signature</a>
          <a href="#lookbook">Lookbook</a>
          <a href="#philosophy">Philosophy</a>
          <a href="#visit">Visit</a>
        </nav>
        <a
          className="header-booking"
          href={NAVER_BOOKING_URL}
          target="_blank"
          rel="noreferrer"
        >
          Naver booking
        </a>
      </header>

      <section
        className="hero"
        id="top"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(18, 16, 14, .58) 0%, rgba(18, 16, 14, .18) 46%, rgba(18, 16, 14, .04) 78%), url("${imagePath(
            "hero-editorial.webp",
          )}")`,
        }}
      >
        <div className="hero-content">
          <p className="eyebrow">1:1 Personal Hair Design · Gupabal</p>
          <h1>GAWISORI</h1>
          <p className="hero-kicker">가장 나다운 아름다움</p>
          <p className="hero-copy">
            유행보다 당신의 얼굴과 일상에 오래 어울리는
            <br />
            헤어 디자인을 제안합니다.
          </p>
          <a
            className="outline-button"
            href={NAVER_BOOKING_URL}
            target="_blank"
            rel="noreferrer"
          >
            <span>네이버 예약</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <a className="scroll-cue" href="#intro" aria-label="다음 내용 보기">
          <span>SCROLL</span>
          <i />
        </a>
      </section>

      <section className="intro" id="intro">
        <p className="section-label">A quiet transformation</p>
        <div className="intro-grid">
          <h2>
            아름다움은
            <br />
            더하는 것이 아니라,
            <br />
            <em>나를 발견하는 일.</em>
          </h2>
          <div className="intro-note">
            <p>
              가위소리는 한 사람의 분위기를 오래 바라봅니다. 얼굴의 선,
              모발의 결, 평소의 손질 습관까지 세심하게 읽고 가장 자연스러운
              균형을 찾습니다.
            </p>
            <p className="microcopy">
              ONE DIRECTOR · ONE CLIENT · ONE DESIGN
            </p>
          </div>
        </div>
      </section>

      <section className="signature" id="signature">
        <div className="section-heading">
          <div>
            <p className="section-label">Our signature</p>
            <h2>SIGNATURE DESIGN</h2>
          </div>
          <p>
            같은 스타일을 반복하지 않습니다.
            <br />
            당신에게 맞는 하나의 디자인을 만듭니다.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-image">
                <img
                  src={imagePath(service.image)}
                  alt={`${service.korean} 헤어스타일 화보`}
                  style={{ objectPosition: service.position }}
                />
                <span>{service.number}</span>
              </div>
              <div className="service-copy">
                <p>{service.english}</p>
                <h3>{service.korean}</h3>
                <div className="service-detail">
                  <span>{service.description}</span>
                  <i aria-hidden="true">↗</i>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="lookbook" id="lookbook">
        <div className="lookbook-title">
          <p className="section-label">Selected looks · 2026</p>
          <h2>
            HAIR,
            <br />
            IN ITS OWN
            <br />
            <em>RHYTHM.</em>
          </h2>
        </div>
        <div className="lookbook-collage">
          <figure className="look-main">
            <img
              src={imagePath("signature-wave.webp")}
              alt="부드러운 웨이브와 로즈 브라운 컬러"
            />
            <figcaption>
              <span>01</span>
              <span>SOFT WAVE · ROSE BROWN</span>
            </figcaption>
          </figure>
          <figure className="look-small">
            <img
              src={imagePath("signature-bob.webp")}
              alt="정교한 보브 디자인컷"
            />
            <figcaption>
              <span>02</span>
              <span>SCULPTED BOB · DEEP BROWN</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="philosophy" id="philosophy">
        <div className="philosophy-mark" aria-hidden="true">
          G
        </div>
        <div className="philosophy-copy">
          <p className="section-label">Our philosophy</p>
          <h2>한 사람을 위한 시간.</h2>
          <p>
            상담부터 마무리까지 원장이 직접 함께합니다. 빠르게 많은
            스타일을 만드는 대신, 한 사람에게 어울리는 답을 충분히
            고민합니다.
          </p>
          <dl>
            <div>
              <dt>01</dt>
              <dd>
                <strong>PERSONAL CONSULTING</strong>
                얼굴형·모질·손질 습관을 함께 살피는 맞춤 상담
              </dd>
            </div>
            <div>
              <dt>02</dt>
              <dd>
                <strong>ONE-TO-ONE DESIGN</strong>
                처음부터 마지막까지 이어지는 원장 1:1 시술
              </dd>
            </div>
            <div>
              <dt>03</dt>
              <dd>
                <strong>LASTING BALANCE</strong>
                시간이 지나도 무너지지 않는 자연스러운 균형
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="manifesto">
        <p>당신의 오늘보다</p>
        <h2>
          내일 더 자연스러운 머리.
        </h2>
        <p className="manifesto-en">DESIGNED TO GROW BEAUTIFULLY</p>
      </section>

      <section className="visit" id="visit">
        <div className="visit-title">
          <p className="section-label">Come as you are</p>
          <h2>
            VISIT
            <br />
            GAWISORI
          </h2>
          <p>가장 나다운 모습을 찾는 시간, 가위소리에서 시작하세요.</p>
        </div>

        <div className="visit-information">
          <div className="address">
            <p>서울 은평구 진관3로 21</p>
            <p>엘크루상가 1층 126호</p>
            <span>구파발역 1번 출구에서 248m</span>
          </div>
          <div className="visit-meta">
            <div>
              <span>OPEN</span>
              <strong>10:30</strong>
            </div>
            <div>
              <span>CALL</span>
              <a href="tel:050713529811">0507-1352-9811</a>
            </div>
            <div>
              <span>AMENITIES</span>
              <strong>주차 가능 · 무선 인터넷</strong>
            </div>
          </div>
          <div className="visit-links">
            <a
              href={NAVER_BOOKING_URL}
              target="_blank"
              rel="noreferrer"
            >
              <span>NAVER BOOKING</span>
              <i aria-hidden="true">↗</i>
            </a>
            <a href={NAVER_PLACE_URL} target="_blank" rel="noreferrer">
              <span>NAVER PLACE</span>
              <i aria-hidden="true">↗</i>
            </a>
            <a href="tel:050713529811">
              <span>CALL</span>
              <i aria-hidden="true">↗</i>
            </a>
          </div>

          <details className="faq">
            <summary>
              위치와 예약에 관해 궁금하신가요?
              <span aria-hidden="true">＋</span>
            </summary>
            <div className="faq-content">
              <p>
                네이버 예약을 이용하거나 전화로 문의하실 수 있습니다.
                구파발역 1번 출구에서 약 248m 거리에 있으며 주차가
                가능합니다. 정확한 마감시간과 휴무일은 네이버 플레이스에서
                확인해 주세요.
              </p>
            </div>
          </details>
        </div>
      </section>

      <footer>
        <a className="wordmark" href="#top">
          GAWISORI
        </a>
        <p>Premium personal hair design · Eunpyeong, Seoul</p>
        <p>© 2026 GAWISORI</p>
      </footer>

      <a
        className="mobile-booking"
        href={NAVER_BOOKING_URL}
        target="_blank"
        rel="noreferrer"
      >
        네이버 예약
        <span aria-hidden="true">↗</span>
      </a>
    </main>
  );
}
