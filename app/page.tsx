import styles from './page.module.css'

const bouquets = [
  { name: 'بهار نارنج', price: '۱٬۸۵۰٬۰۰۰ تومان', tone: 'cream', icon: '✿' },
  { name: 'رز صورتی', price: '۲٬۴۰۰٬۰۰۰ تومان', tone: 'rose', icon: '❀' },
  { name: 'باغچه وحشی', price: '۱٬۶۵۰٬۰۰۰ تومان', tone: 'sage', icon: '✽' },
]

export default function Home() {
  return (
    <main dir="rtl" className={styles.page}>
      <nav className={styles.nav} aria-label="منوی اصلی">
        <a className={styles.logo} href="#top">خوشه<span>.</span></a>
        <div className={styles.links}>
          <a href="#shop">فروشگاه</a>
          <a href="#story">داستان ما</a>
          <a href="#contact">تماس با ما</a>
        </div>
        <button className={styles.cart} type="button" aria-label="سبد خرید">سبد خرید <span>۰</span></button>
      </nav>

      <section id="top" className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>گل‌های تازه، هر روز</p>
          <h1>لحظه‌هایتان را<br /><em>شکوفا</em> کنید.</h1>
          <p className={styles.intro}>دسته‌گل‌هایی با عشق، از باغ‌های محلی تا در خانه شما. انتخابی زیبا برای هر احساسی.</p>
          <a className={styles.primaryButton} href="#shop">مشاهده دسته‌گل‌ها <span>←</span></a>
        </div>
        <div className={styles.heroArt} aria-label="تصویر تزئینی گل‌های بهاری" role="img">
          <div className={`${styles.flower} ${styles.flowerOne}`}>✿</div>
          <div className={`${styles.flower} ${styles.flowerTwo}`}>❀</div>
          <div className={`${styles.flower} ${styles.flowerThree}`}>✽</div>
          <div className={styles.artCircle} />
          <p>تازه از باغ<br /><strong>برای شما</strong></p>
        </div>
      </section>

      <section id="shop" className={styles.shop}>
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>انتخاب امروز</p><h2>برای هر حس، یک گل</h2></div>
        <div className={styles.cards}>
          {bouquets.map((bouquet) => <article className={styles.card} key={bouquet.name}><div className={`${styles.cardArt} ${styles[bouquet.tone]}`}><span>{bouquet.icon}</span></div><div className={styles.cardInfo}><h3>{bouquet.name}</h3><p>{bouquet.price}</p><button type="button" aria-label={`افزودن ${bouquet.name} به سبد خرید`}>+</button></div></article>)}
        </div>
      </section>
    </main>
  )
}
