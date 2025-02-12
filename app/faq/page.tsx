import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function FAQ() {
  return (
    <div className='container px-4 py-16'>
      <h1 className='text-4xl font-bold tracking-tight sm:text-5xl text-center mb-16'>
        Często zadawane pytania
      </h1>
      <div className='max-w-3xl mx-auto'>
        <Accordion type='single' collapsible>
          <AccordionItem value='item-1'>
            <AccordionTrigger>
              <span className='pr-4 text-start'>
                Dlaczego warto kupić nieruchomość w Wiedniu?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className='list-disc list-outside px-4 gap-2'>
                <li className='mb-2'>
                  Austria to kraj neutralny, stabilny politycznie i gospodarczo
                </li>
                <li className='mb-2'>
                  Wysoka jakość życia oraz dobrze rozwinięta infrastruktura
                </li>
                <li>
                  Bezpieczna inwestycja w nieruchomości o stabilnej wartości
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger className='text-start'>
              Czy polski obywatel może kupić mieszkanie w Wiedniu?
            </AccordionTrigger>
            <AccordionContent>
              Obrót nieruchomościami leży w gestii krajów federalnych, a
              przepisy różnią się w zależności od kraju federalnego, w ktorym
              znajduje sie nieruchomosc. W Wiedniu obywatel Polski może kupować
              nieruchomości bez konieczności uzyskiwania specjalnych zezwoleń od
              właściwego urzędu ds. obrotu nieruchomościami.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>
              Jakie są koszty zakupu nieruchomości?
            </AccordionTrigger>
            <AccordionContent>
              <p className='mb-4'>
                Zakup nieruchomości w Austrii wiąże się z dodatkowymi kosztami,
                które wynoszą około 10% wartości nieruchomości. W skład tych
                kosztów wchodzą:
              </p>
              <ul className='list-disc list-outside px-4 gap-2'>
                <li className='mb-2'>
                  Podatek od nabycia nieruchomości (Grunderwerbsteuer) – 3,5%
                </li>
                <li className='mb-2'>
                  Opłata notarialna i wpis do księgi wieczystej – ok. 1,1%
                </li>
                <li className='mb-2'>
                  Koszt wpisu hipoteki do księgi wieczystej – 1,2%
                </li>
                <li className='mb-2'>
                  Wynagrodzenie dla pośrednika (jeśli dotyczy) – do 3,6%
                </li>
                <li className='mb-4'>
                  Koszty doradztwa prawnego i podatkowego
                </li>
              </ul>
              <p>
                Umowa kupna nieruchomości w Austrii sporządzana jest u adwokata,
                a jego wynagrodzenie wynosi od 1,1% do 2% netto ceny
                nieruchomości, w zależności od indywidualnego przypadku.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4'>
            <AccordionTrigger>
              <span className='pr-4 text-start'>
                Czy ceny nieruchomości w Wiedniu będą rosnąć?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              Liczba mieszkańców Wiednia stale rośnie, a podaż nowego
              budownictwa maleje. Eksperci przewidują, że ceny nieruchomości
              będą miały tendencję wzrostową w nadchodzących latach.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
