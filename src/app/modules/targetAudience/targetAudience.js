"use client"
import './targetAudience.scss'
import { Navigation, Pagination, Scrollbar, A11y, EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

export default function TargetAudience(){
    const items = [
        "You want to elevate you online presence with a new website",
        "You have a website, but want to improve it.",
        "You have a design and are looking for someone to implement it.",
        "You have a website and want to improve the user experience and make it accessible."
    ]
    return (
        <section className="targetAudience__base">
            <h1 className="h1 animate" data-animate-key="text-stagger" data-animate-delay="0">
                Solutions for <br />
                <span className="d1 text--primary textcontentshadow animate" data-title="everyone" data-animate-key="text-stagger" data-animate-delay="0.1">everyone</span>
            </h1>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards]}
                effect={'cards'}
                centeredSlides={true}
                spaceBetween={32}
                slidesPerView={'auto'}
                navigation
                pagination={{ clickable: true }}
                className='animate'
                data-animate-key="text-stagger" data-animate-delay="0.1"
            >
                {
                    items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="targetAudience__slide">
                                <div className='targetAudience__slideHeadingContainer'>
                                    <svg fill="#ffffff" width="64px" height="64px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1070.45 53.9152C1104.97 88.4365 1124.36 135.258 1124.36 184.078L1123.51 1188.09C1123.74 1229.1 1110.25 1269.01 1085.18 1301.47 1060.11 1333.93 1024.9 1357.08 985.16 1367.22 945.419 1377.35 903.428 1373.91 865.87 1357.43 828.312 1340.95 797.346 1312.38 777.899 1276.28 763.314 1249.19 755.85 1218.85 756.21 1188.09V184.078C756.21 135.258 775.603 88.4365 810.124 53.9152 844.646 19.3939 891.467 0 940.288 0 989.108 0 1035.93 19.3939 1070.45 53.9152ZM161.091 1320.33C194.624 1353.7 240.009 1372.44 287.319 1372.44 310.767 1372.44 333.985 1367.81 355.644 1358.83 377.304 1349.85 396.98 1336.69 413.547 1320.1 430.113 1303.5 443.246 1283.8 452.193 1262.13 461.141 1240.45 465.726 1217.23 465.689 1193.78L463.406 359.01 106.666 741.15 108.378 1194.35C108.605 1241.67 127.558 1286.96 161.091 1320.33ZM1592.41 1372.44C1639.74 1372.51 1685.17 1353.81 1718.72 1320.42 1752.27 1287.02 1771.2 1241.69 1771.35 1194.35L1773.06 741.15 1416.33 359.01 1414.32 1193.78C1414.29 1217.21 1418.87 1240.41 1427.79 1262.06 1436.72 1283.71 1449.83 1303.41 1466.37 1319.99 1482.9 1336.58 1502.55 1349.75 1524.17 1358.75 1545.8 1367.75 1568.99 1372.4 1592.41 1372.44ZM1123.46 1752.39C1126.77 1716.09 1119.25 1679.61 1101.83 1647.56 1090.29 1626.27 1074.66 1607.47 1055.85 1592.22 1037.03 1576.97 1015.39 1565.59 992.163 1558.73 968.939 1551.86 944.588 1549.64 920.506 1552.2 896.423 1554.76 873.083 1562.05 851.822 1573.65 819.782 1591.06 793.627 1617.59 776.661 1649.87 759.697 1682.14 752.685 1718.73 756.513 1754.99 760.341 1791.25 774.837 1825.57 798.168 1853.59 821.499 1881.62 852.616 1902.09 887.585 1912.44 922.554 1922.77 959.804 1922.51 994.623 1911.68 1029.44 1900.84 1060.27 1879.94 1083.2 1851.58 1106.13 1823.23 1120.14 1788.71 1123.46 1752.39Z"></path> </g></svg>
                                    <h2 className="h2 targetAudience__slideHeadingText">{item}</h2>
                                </div>
                                <div className='targetAudience__slideTextContainer'>
                                    <p className='introText'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore excepturi consequatur facilis hic dolor, necessitatibus deserunt alias debitis delectus iste molestias accusamus laborum mollitia sed iure ipsa numquam doloribus vitae!
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}