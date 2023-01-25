const companies = [
  {
    name: 'ELMONTAŻ',
    location: 'Żywiec',
    services: [
      'projektowanie, wykonawstwo i serwis sieci elektroenergetycznych',
      'projektowanie, wykonawstwo i serwis sieci elektroinstalacyjnych',
      'projektowanie, wykonawstwo i serwis automatyki przemysłowej',
      'projektowanie i budowa sieci światłowodowych',
      'realizacja robót teletechnicznych',
    ],
  },
  {
    name: 'IZOTERM',
    location: 'Pszczyna',
    services: [
      'projektowanie i produkcja okien pcv',
      'projektowanie i produkcja drzwi pcv',
      'projektowanie i produkcja ogrodów zimowych',
      'docieplanie budynków',
      'docieplanie stropów',
    ],
  },
  {
    name: 'BRUK',
    location: 'Czyżowice',
    services: ['produkcja kostki brukowej', 'produkcja betonu towarowego', 'produkcja galanterii betonowej'],
  },
  {
    name: 'CAPEK',
    location: 'Skrzyszów',
    services: ['produkcja drzwi stalowych', 'produkcja ościeżnic stalowych'],
  },
  {
    name: 'JARPAK',
    location: 'Paczków',
    services: ['produkcja opakowań z tektury', 'produkcja opakowań z nadrukiem'],
  },
  {
    name: 'JARPAK',
    location: 'Świdnica',
    services: ['produkcja opakowań z tektury', 'produkcja opakowań z nadrukiem'],
  },
  {
    name: 'PREMIUM',
    location: 'Płock',
    services: [
      'zaopatrzenie biur / biuroserwis',
      'hurtowa sprzedaż materiałów biurowych',
      'tajne niszczenie dokumentów',
      'usługi reklamowe',
      'produkcja stempli',
    ],
  },
  {
    name: 'ARTIM',
    location: 'Opole',
    services: ['zaopatrzenie biur / biuroserwis', 'hurtowa sprzedażmateriałów biurowych', 'montaż sprzętu komputerowego'],
  },
  {
    name: 'KLEKS',
    location: 'Toruń',
    services: ['zaopatrzenie biur / biuroserwis', 'hurtowa sprzedaż materiałów biurowych', 'usługi reklamowe', 'produkcja stempli'],
  },
  {
    name: 'KLEKS',
    location: 'Kalisz',
    services: ['zaopatrzenie biur / biuroserwis', 'hurtowa sprzedaż materiałów biurowych', 'usługi reklamowe', 'produkcja stempli'],
  },
  {
    name: 'NATUREX',
    location: 'Katowice',
    services: ['produkcja ekstraktów ziołowych', 'produkcja komponentów do pasz'],
  },
  {
    name: 'IKA 90',
    location: 'Gryfice',
    services: ['zaopatrzenie biur / biuroserwis', 'hurtowa sprzedaż materiałów biurowych', 'usługi reklamowe', 'produkcja stempli'],
  },
  {
    name: 'IKA 90',
    location: 'Koszalin',
    services: ['zaopatrzenie biur / biuroserwis', 'hurtowa sprzedaż materiałów biurowych', 'usługi reklamowe', 'produkcja stempli'],
  },
  {
    name: 'EUROTRADE',
    location: 'Kraków',
    services: [
      'projektowanie i produkcja zabawek',
      'produkcja materiałów biurowych i szkolnych',
      'imp materiałów biurowych i szkolnych',
      'zaopatrzenie biur / biuroserwis',
      'hurtowa sprzedaż materiałów biurowych',
    ],
  },
  {
    name: 'EUROTRADE',
    location: 'Rzeszów',
    services: [
      'projektowanie i produkcja zabawek',
      'produkcja materiałów biurowych i szkolnych',
      'import materiałów biurowych i szkolnych',
      'zaopatrzenie biur / biuroserwis',
      'hurtowa sprzedaż materiałów biurowych',
    ],
  },
  {
    name: 'CELTA',
    location: 'Kłodzko',
    services: ['zaopatrzenie biur / biuroserwis', 'hurtowa sprzedaż materiałów biurowych'],
  },
  {
    name: 'SAMFIX',
    location: 'Gdańsk',
    services: ['zaopatrzenie biur / biuroserwis', 'hurtowa sprzedaż materiałów biurowych', 'usługi reklamowe', 'produkcja stempli'],
  },
  {
    name: 'GRAFIX',
    location: 'Białystok',
    services: ['zaopatrzenie biur / biuroserwis', 'hurtowa sprzedaż materiałów biurowych', 'usługi reklamowe', 'produkcja stempli'],
  },
  {
    name: 'ALEGRA',
    location: 'Legnica',
    services: ['zaopatrzenie biur / biuroserwis', 'hurtowa sprzedaż materiałów biurowych'],
  },
  {
    name: 'OMEGA',
    location: 'ZielonaGóra',
    services: ['zaopatrzenie biur / biuroserwis', 'hurtowa sprzedaż materiałów biurowych'],
  },
  {
    name: 'FORUM',
    location: 'Włocławek',
    services: ['zaopatrzenie biur / biuroserwis', 'hurtowa sprzedaż materiałów biurowych', 'usługi reklamowe', 'produkcja stempli'],
  },
  {
    name: 'ABC PAPIER',
    location: 'Lublin',
    services: ['zaopatrzenie biur / biuroserwis', 'hurtowa sprzedaż materiałów biurowych'],
  },
  {
    name: 'AZET',
    location: 'Zamość',
    services: ['zaopatrzenie biur / biuroserwis', 'hurtowa sprzedaż materiałów biurowych'],
  },
  {
    name: 'TEKMAR',
    location: 'Wołów',
    services: ['produkcja opakowań z tektury', 'produkcja opakowań z nadrukiem'],
  },
  {
    name: 'KOZIELSKI',
    location: 'Wodzisław Śląski',
    services: ['produkcja pieczywa', 'produkcja wyrobów cukierniczych'],
  },
  {
    name: 'SYTO CO PACKAGING POLSKA',
    location: 'Wolsztyn',
    services: ['konfekcjonowanie, pakowanie i uszlachetnianie aplikacji', 'produkcja żywności'],
  },
  {
    name: 'BIUROMARKET',
    location: 'Katowice',
    services: ['zaopatrzenie biur / biuroserwis', 'hurtowa sprzedaż materiałów biurowych'],
  },
  {
    name: 'WIELKOPOLSKA TECHNIKA POWIERZCHNIOWA',
    location: 'Dopiewo',
    services: [
      'termiczne usuwanie powłok lakierniczych z powierzchni',
      'chemiczne usuwanie powłok lakierniczych z powierzchni',
      'mechaniczne usuwanie powłok lakierniczych z powierzchni',
    ],
  },
  {
    name: 'ABL TECHNIC',
    location: 'Fiałkowo',
    services: [
      'termiczne usuwanie powłok lakierniczych z powierzchni',
      'chemiczne usuwanie powłok lakierniczych z powierzchni',
      'mechaniczne usuwanie powłok lakierniczych z powierzchni',
    ],
  },
  {
    name: 'GOLEC',
    location: 'Mysłowice',
    services: ['projektowanie i budowa dróg oraz linii kolejowych'],
  },
  {
    name: 'STIGEN',
    location: 'Żywiec',
    services: ['produkcja generatorów pary'],
  },
  {
    name: 'SYTO CO PACKAGING WADOWICE',
    location: 'Inwałd',
    services: ['konfekcjonowanie, pakowanie i uszlachetnianie aplikacji', 'produkcja żywności'],
  },
  {
    name: 'TOP RENT',
    location: 'Łuków',
    services: ['wynajem sprzętu i maszyn budowalnych'],
  },
  {
    name: 'PARTNER XXI',
    location: 'Warszawa',
    services: ['zaopatrzenie biur / biuroserwis', 'hurtowa sprzedaż materiałów biurowych'],
  },
  {
    name: 'PARTNER XXI',
    location: 'Zabrze',
    services: ['zaopatrzenie biur / biuroserwis', 'hurtowa sprzedaż materiałów biurowych'],
  },
  {
    name: 'NADWOZIA PARTNER',
    location: 'Sosnowiec',
    services: [
      'projektowanie, budowa i serwis samochodowych skrzyń ładunkowych',
      'projektowanie, budowa i serwis izoterm samochodowych',
      'projektowanie, budowa i serwis kontenerów samochodowych',
      'projektowanie, budowa i serwis budowa wyrotek samochodowych',
      'projektowanie, budowa i serwis samochodowych zabudów specjalnych',
    ],
  },
  {
    name: 'SIMET',
    location: 'Tworóg',
    services: ['produkcja elementów maszyn i urządzeń z metalu', 'produkcja elementów maszyn i urządzeń z tworzyw sztucznych'],
  },
  {
    name: 'INTERSNAK',
    location: 'Niedźwiedź/Kraków',
    services: ['produkcja produktów opartych na orzechach spożywczych', 'produkcja chipsów spożywczych', 'produkcja przekąsek spożywczych'],
  },
  {
    name: 'GY TELECOM',
    location: 'Inwałd',
    services: ['hurtowy skup telefonów komórkowych'],
  },
  {
    name: 'GY TELECOM',
    location: 'Kraków',
    services: ['hurtowy skup telefonów komórkowych'],
  },
  {
    name: 'VAN KEULEN',
    location: 'Inwałd',
    services: ['produkcja wyposażenia sklepów'],
  },
  {
    name: 'Bielskie Przedsiębiorstwo Budownictwa Przemysłowego',
    location: '',
    services: [
      'budownictwo przemysłowe',
      'budownictwo mieszkaniowe',
      'usługi budowalne i remontowe',
      'wynajem sprzętu i maszyn budowalnych',
      'naprawy pojazdów samochodowych',
    ],
  },
  {
    name: 'ELAN',
    location: 'Bielsko Biała',
    services: [
      'projektowanie i produkcja oprogramowania i aplikacji komputerowych',
      'projektowanie i produkcja urządzeń elektronicznych',
      'obsługa IT',
    ],
  },
  {
    name: 'TENSA AUTOMOTIVE',
    location: 'Stąporków',
    services: [
      'projektowanie, budowa i serwis samochodowych skrzyń ładunkowych',
      'projektowanie, budowa i serwis izoterm samochodowych',
      'projektowanie, budowa i serwis kontenerów samochodowych',
      'projektowanie, budowa i serwis budowa wyrotek samochodowych',
      'projektowanie, budowa i serwis samochodowych zabudów specjalnych',
    ],
  },
  { name: 'WW LOGIS', location: 'Mińsk Mazowiecki', services: ['usługi logistyczne', 'usługi transportowe', 'usługi magazynowania'] },
  { name: 'WW LOGIS', location: 'Opole', services: ['usługi logistyczne', 'usługi transportowe', 'usługi magazynowania'] },
  { name: 'SANCO', location: 'Żywiec', services: ['sprzedaż armatury sanitarnej'] },
  { name: 'AUTOTEST', location: 'Żywiec', services: ['diagnostyka i badania techniczne pojazdów samochodowych'] },
  {
    name: 'KIESOW',
    location: 'Zabrze',
    services: [
      'produkcja i sprzedaż komponentów do chemicznego oczyszczania powierzchni',
      'projektowanie procesów chemicznego oczyszczania powierzchni',
    ],
  },
  { name: 'OSA', location: 'Bydgoszcz', services: ['zaopatrzenie biur / biuroserwis', 'hurtowa sprzedaż materiałów biurowych'] },
  { name: 'BESKIDZKA ENERGETYKA', location: 'Żywiec', services: ['sprzedaż nośników energii'] },
  { name: 'BESKIDZKA ENERGETYKA', location: 'Bielsko Biała', services: ['sprzedaż i dystrybucja energii'] },
  { name: 'PRINT', location: 'Opole', services: ['projektowanie i produkcja etykiet', 'usługi druku'] },
  { name: 'BESKIDZKA ENERGETYKA', location: 'Żywiec', services: ['sprzedaż nośników energii'] },
  {
    name: 'BESKIDZKA ENERGETYKA',
    location: 'Bielsko Biała',
    services: ['sprzedaż i dystrybucja energii'],
  },
  {
    name: 'PRINT',
    location: 'Opole',
    services: ['projektowanie i produkcja etykiet', 'usługi druku'],
  },
  {
    name: 'ROOFFICE',
    location: 'Kielce',
    services: ['zaopatrzenie biur / biuroserwis', 'hurtowa sprzedaż materiałów biurowych'],
  },
  {
    name: 'KARTON PACK',
    location: 'Brzeg',
    services: ['produkcja opakowań z tektury', 'produkcja opakowań z nadrukiem'],
  },
  {
    name: 'PRYZMAT',
    location: 'Wrocław',
    services: ['produkcja tonerów i tuszy do urządzeń drukujących'],
  },
  {
    name: 'HISCAN/SCANIX',
    location: 'Mysłowice',
    services: ['diagnostyka medyczna'],
  },
  {
    name: 'HISCAN/SCANIX',
    location: 'Sosnowiec',
    services: ['diagnostyka medyczna'],
  },
  {
    name: 'HISCAN/SCANIX',
    location: 'Katowice',
    services: ['diagnostyka medyczna'],
  },
  {
    name: 'HISCAN/SCANIX',
    location: 'Bielsko Biała',
    services: ['diagnostyka medyczna'],
  },
  {
    name: 'HISCAN/SCANIX',
    location: 'Dąbrowa Górnicza',
    services: ['diagnostyka medyczna'],
  },
  {
    name: 'EUROMAR',
    location: 'Mysłowice',
    services: ['produkcja i sprzedaż palet transportowych'],
  },
  {
    name: 'MATECS',
    location: 'Legnica',
    services: ['produkcja komponentów dla branży samochodowej'],
  },
  {
    name: 'KONKO',
    location: 'Mysłowice',
    services: ['wykonawstwo konstrukcji stalowych', 'regeneracja przewodów elektrycznych', 'usługi dla górnictwa'],
  },
  {
    name: 'JAGIELOŃSKIE CENTRUM INNOWACJI',
    location: '',
    services: ['badania laboratoryjne', 'badania kliniczne'],
  },
  {
    name: 'POLNA ENGINEERING',
    location: 'Katowice',
    services: ['projektowanie systemów zaworów regulacyjnych'],
  },
  {
    name: 'AZ BIURO',
    location: 'Tarnowskie Góry',
    services: ['zaopatrzenie biur / biuroserwis', 'hurtowa sprzedaż materiałów biurowych'],
  },
  {
    name: 'BEST OFFICE',
    location: 'Ostrołęka',
    services: ['zaopatrzenie biur / biuroserwis', 'hurtowa sprzedaż materiałów biurowych'],
  },
  {
    name: 'BIURIMEX',
    location: 'Leszno',
    services: ['zaopatrzenie biur / biuroserwis', 'hurtowa sprzedaż materiałów biurowych'],
  },
  {
    name: 'BIURO MAX',
    location: 'Chrzanów',
    services: ['zaopatrzenie biur / biuroserwis', 'hurtowa sprzedaż materiałów biurowych'],
  },
  {
    name: 'EDMEL',
    location: 'Legnica',
    services: ['zaopatrzenie biur / biuroserwis', 'hurtowa sprzedaż materiałów biurowych'],
  },
  {
    name: 'HONIA',
    location: 'Skarszewy',
    services: ['zaopatrzenie biur / biuroserwis', 'hurtowa sprzedaż materiałów biurowych'],
  },
  {
    name: 'JUREX',
    location: 'Elbląg',
    services: ['zaopatrzenie biur / biuroserwis', 'hurtowa sprzedaż materiałów biurowych'],
  },
  {
    name: 'KARO',
    location: 'Suchy Las',
    services: ['zaopatrzenie biur / biuroserwis', 'hurtowa sprzedaż materiałów biurowych'],
  },
  {
    name: 'MEGIMA',
    location: 'Zła Wieś Wielka',
    services: ['zaopatrzenie biur / biuroserwis', 'hurtowa sprzedaż materiałów biurowych'],
  },
  {
    name: 'MULTI',
    location: 'Brodnica',
    services: ['zaopatrzenie biur / biuroserwis', 'hurtowa sprzedaż materiałów biurowych'],
  },
  {
    name: 'PAPIRUS',
    location: 'Łowicz',
    services: ['zaopatrzenie biur / biuroserwis', 'hurtowa sprzedaż materiałów biurowych'],
  },
  {
    name: 'TYPOGRAF',
    location: 'Września',
    services: ['zaopatrzenie biur / biuroserwis', 'hurtowa sprzedaż materiałów biurowych'],
  },
  {
    name: 'SPIN PAPIER',
    location: 'Gorzów Wielkopolski',
    services: ['zaopatrzenie biur / biuroserwis', 'hurtowa sprzedaż materiałów biurowych'],
  },
  {
    name: 'INTEC',
    location: 'Kraków',
    services: ['projektowanie i budowa farm fotowoltaicznych'],
  },
];
const columnCount = parseInt(companies.length / 2);
const col1 = document.querySelector('.clientColumn1');
const col2 = document.querySelector('.clientColumn2');

companies.forEach((element, index) => {
  const tempContainer = document.createElement('div');
  tempContainer.classList.add('singleClient');
  const nameText = document.createElement('p');
  nameText.textContent = `${element.name} - ${element.location}`;
  tempContainer.appendChild(nameText);

  tempContainer.addEventListener('click', () => {
    if (tempContainer.classList.contains('detailed')) {
      tempContainer.classList.remove('detailed');
      const elementToRemove = document.getElementById(`${element.name}:${element.location}`);

      elementToRemove.remove();
    } else {
      const detailInfoHandler = document.createElement('ul');
      element.services.forEach((element2) => {
        const detailInfo = document.createElement('li');
        detailInfo.textContent = element2;
        detailInfoHandler.id = `${element.name}:${element.location}`;
        detailInfoHandler.appendChild(detailInfo);
      });
      tempContainer.appendChild(detailInfoHandler);

      tempContainer.classList.add('detailed');
    }
  });
  index <= columnCount ? col1.append(tempContainer) : col2.append(tempContainer);
});
