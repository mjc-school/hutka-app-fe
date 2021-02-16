import uuid from 'uuid-random';
import { Belarus } from './mapData';

export { default as KmlMapParser } from './kmlMapParser';

const routes = [];
const routeImages = [];
let lastLastLineIndex = 0;

Belarus.features.forEach((item, index, arr) => {
    if (item.geometry.type === 'LineString') {
        const tempArr = arr.slice(lastLastLineIndex, index);
        lastLastLineIndex = index;
        routeImages.push(item.properties.gx_media_links);
        routes.push(tempArr);
    }
});

const routeNames = routes.map(item =>
    item
        .filter(item => item.geometry.type !== 'LineString')
        .map(item => {
            return item.properties.name;
        })
        .join('-'),
);

console.log(routeNames);
export { routes, routeNames, routeImages, FakeRoute };

const Nesviz: PlaceType = {
    _id: uuid(),
    name: 'Несвижcкий Замок',
    location: ['Минская область', 'Несвижский район'],
    coords: {
        lat: 53.2189,
        lng: 26.6779,
    },
    imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/%D0%97%D0%B0%D0%BC%D0%B0%D0%BA-%D0%BF%D0%B0%D0%BB%D0%B0%D1%86_%D1%83_%D0%9D%D1%8F%D1%81%D1%8C%D0%B2%D1%96%D0%B6%D1%8B_%D0%B7%D0%BD%D1%83%D1%82%D1%80%D1%8B.jpg/1920px-%D0%97%D0%B0%D0%BC%D0%B0%D0%BA-%D0%BF%D0%B0%D0%BB%D0%B0%D1%86_%D1%83_%D0%9D%D1%8F%D1%81%D1%8C%D0%B2%D1%96%D0%B6%D1%8B_%D0%B7%D0%BD%D1%83%D1%82%D1%80%D1%8B.jpg',
    description:
        'Несвиж — одно из самых туристических мест Белоруссии. Это небольшой городок, в котором, несмотря на многочисленные войны и катаклизмы, сохранились не единичные архитектурные памятники XVI—XVIII веков, а также целый ряд зданий, представляющих архитектуру Речи Посполитой этого периода и отражающих жизнь центра владений крупнейших магнатов, рода Радзивиллов.',
};
const Mir: PlaceType = {
    _id: uuid(),
    name: 'Мирский Замок',
    location: ['Гродненская область', 'Кореличский район', 'Мир'],
    coords: {
        lat: 53.451111111,
        lng: 26.472777778,
    },
    imgUrl:
        'https://autokatalog.by/upload/information_system_17/1/0/6/item_10647/item_10647.jpg',
    description: `Замковый комплекс “Мир” - уникальный памятник национальной культуры Беларуси. В 2000 году Мирский замок был включен в Список всемирного культурного и природного наследия ЮНЕСКО. 

        В архитектурном ансамбле Мира представлены замок-музей XVI-XX веков с 39 полноценными экспозициями, земляные валы, живописные парки и пруд, часовня-усыпальница князей Святополк-Мирских. 
        
        Комплекс "Мир" - это объект с хорошо развитой инфраструктурой: два конференц-зала для проведения мероприятий на высоком уровне, отель на 15 номеров, ресторан с блюдами старинной кухни, сувенирная лавка с изделиями белорусских мастеров. 
        
        Наряду с традиционными экскурсиями музей предоставляет и театрализованные, а церемония «Свадьба в Мирском замке» сделает счастливый день вашей жизни незабываемым. 
        
        На концертных площадках "Мира" традиционно проводятся музыкальные и рыцарские фестивали, а также фестивали искусств и ремесленного творчества. `,
};

const Coro: PlaceType = {
    _id: uuid(),
    name: 'Коробчицы',
    location: ['Гродненская область', 'Гродненский район'],
    coords: {
        lat: 53.629739,
        lng: 23.745029,
    },
    imgUrl:
        'https://bestbelarus.by/upload/resize_cache/iblock/06d/0_510_2/06d7f5185416cad08a33edf96d410f85.jpg',
    description: `Агротуристический комплекс «Гарадзецкi маентак «Каробчыцы» стилизован под старинную усадьбу XIX века. Сегодня на его территории располагается более 30 объектов самого разного значения, которые органично вписываются в окружающую природу и дополняют друг друга. Всего поместье занимает территорию в 54 гектара, при этом половина площади маёнтка – заповедная территория, попасть в которую можно только на дилижансе, бричке или фаэтоне. Территория «Коробчиц» включает 5 водоёмов, каждый из которых запружен рыбой. А вокруг – мостики, беседки, клумбы.
Читайте подробнее в источнике – https://bestbelarus.by/services/all/agroturisticheskiy-kompleks-korobchitsy/. При копировании материалов с онлайн-путеводителя обязательна активная гиперссылка на bestbelarus.by`,
};

const FakeRoute = [Nesviz, Mir, Coro];
