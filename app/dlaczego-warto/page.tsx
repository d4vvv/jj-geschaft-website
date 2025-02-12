import { BookOpenText, HandCoins, House, UserRound } from 'lucide-react'
import { WhyCard } from '@/components/why-card'

export default function WhyUs() {
  return (
    <div className='container px-4 py-16'>
      <h1 className='text-4xl font-bold tracking-tight sm:text-5xl text-center mb-16 sm:text-start'>
        Dlaczego warto z nami współpracować?
      </h1>
      <div className='gap-8 columns-1 md:columns-2'>
        <WhyCard
          icon={<House size={36} />}
          description='Wiedeń regularnie zajmuje czołowe miejsca w rankingach najlepszych
            miast do życia na świecie, takich jak badania Mercer Quality of
            Living czy The Economist Global Liveability Index. Miasto oferuje
            wysoki standard życia, stabilną gospodarkę oraz znakomitą
            infrastrukturę. Dodatkowo, Wiedeń dynamicznie się rozwija – od 2010
            roku populacja miasta wzrosła o ponad 250 000 osób, co napędza rynek
            nieruchomości i powoduje wzrost zapotrzebowania na mieszkania.'
          title='Wiedeń - jedno z najlepszych miast do życia'
        />
        <WhyCard
          icon={<HandCoins size={36} />}
          description='Austria to kraj o wyjątkowej stabilności politycznej i gospodarczej. Od wielu dekad unika większych kryzysów, a jej neutralność oraz ostrożna polityka zagraniczna sprawiają, że jest bezpiecznym miejscem do inwestowania.'
          title='Austria - stabilność i bezpieczeństwo inwestycyjne'
        />
        <WhyCard
          icon={<BookOpenText size={36} />}
          description='Austria charakteryzuje się niezwykle stabilnym systemem prawnym, który wyróżnia ją na tle Europy Środkowej. Ochrona własności jest zagwarantowana przez Ustawę zasadniczą o prawach podstawowych z 1867 roku (StGG), obowiązującą jeszcze od czasów monarchii austro-węgierskiej. Ponadto, Austriacki Kodeks Cywilny (ABGB) z 1811 roku nadal reguluje kluczowe aspekty prawa własności i stosunków cywilnoprawnych.
Konstytucja Federalna z 1920 roku niedawno obchodziła 100 lat, zapewniając lepszą ochronę praw obywatelskich. Austriacki wymiar sprawiedliwości jest jednym z najlepszych i najskuteczniejszych w Europie, a spory dotyczące prawa własności można dochodzić przed sądem z dużą pewnością skutecznej ochrony.'
          title='Stabilność prawna w Austrii'
        />
        <WhyCard
          icon={<UserRound size={36} />}
          description='Austria wyróżnia się wysokim odsetkiem wynajmowanych nieruchomości. W Wiedniu tylko około 18% mieszkań jest zamieszkiwanych przez właścicieli, natomiast ponad 70% ludności mieszka w wynajmowanych mieszkaniach.'
          title='Austria - kraj najemców'
        />
      </div>
      <h2 className='text-4xl font-bold tracking-tight sm:text-5xl text-center mb-16 sm:text-start mt-8 md:mt-24'>
        Ceny nieruchomości w Wiedniu
      </h2>
      <div className='mb-8'>TABELKA</div>
      <div className='flex flex-col gap-4'>
        <p>
          Rynek nieruchomości w Europie Środkowej dynamicznie się rozwija.
          Wiedeń, Warszawa i Kraków to miasta o rosnącym popycie na mieszkania,
          lecz ich rynki mają różne specyfiki i poziomy cenowe.
        </p>
        <p>
          Jeszcze kilka lat temu ceny nieruchomości w Warszawie i Krakowie były
          znacznie niższe niż w Wiedniu. Dziś różnice te zatarły się, a w
          niektórych przypadkach ceny w Polsce dorównały tym w stolicy Austrii –
          sytuacja, która jeszcze pięć lat temu wydawała się nie do pomyślenia.
        </p>
        <p>
          Wiedeń oferuje eleganckie kamienice w centrum miasta, często w cenie
          porównywalnej do mieszkań w Krakowie czy Warszawie.
        </p>
      </div>
    </div>
  )
}
