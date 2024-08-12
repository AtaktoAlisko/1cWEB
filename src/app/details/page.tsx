import Image from "next/image";

export default async function Details() {
  return (
    <>
      <div className="mt-32 mb-32">
        <div>
          <h1 className="text-4xl ml-[540px] font-bold">
            Управление микрофинансовой организацией (МФО)
          </h1>
          <hr className="mt-2 w-20 border-t-[4px] ml-[540px] border-[#A22823]" />
        </div>

        <div className="mx-10 mt-14 flex flex-col lg:flex-row">
          <div className="lg:w-1/4 mb-8 lg:mb-0">
            <ul className="bg-gray-50 dark:bg-gray-800 space-y-2 p-4 rounded-lg">
              <li className="py-2">1C:ERP Управление предприятием</li>
              <li className="py-2">IT-аудит и оптимизация 1С</li>
              <li className="py-2">Автоматизация бизнес-процессов</li>
              <li className="py-2">
                Техническое сопровождение информационных систем
              </li>
              <li className="py-2">1C:Управление холдингом</li>
              <li className="py-2 border-l-4 border-[#A22823] pl-2">
                Управление микрофинансовой организацией (МФО)
              </li>
            </ul>
            <div className="mt-10 px-3 py-3 bg-gray-500 rounded-md ">
              <p>Презентация компаний</p>
            </div>

            <div className="mt-10 px-12 py-12 bg-red-500 rounded-sm text-white ">
              <p>Мы можем помочь Вам?</p>
              <p>Свяжитесь с нами и наши менеджеры дадут</p>
              <p>Вам полную и бесплатную консультацию.</p>
              <p className="px-3 py-3 w-1/2 bg-white text-black">Контакты</p>
            </div>
          </div>

          {/* Правая часть с текстом */}
          <div className="lg:w-3/4 px-4 lg:px-8 ml-24">
            <h2 className="text-3xl font-bold">
              Разработка и внедрение комплексной информационной системы
              управления кредитованием.
            </h2>
            <hr className="mt-2 w-20 border-t-[4px] border-[#A22823]" />
            <p className="mt-4 text-gray-700">
              Данное комплексное решение на базе системы 1C:Предприятие 8
              предназначено для банков и компаний, специализирующихся на
              предоставлении услуг в области кредитования и финансового
              лизинга...
            </p>
            <p className="mt-4 text-gray-700">
              Разработка данного решения базируется на основе многолетнего опыта
              разработки и внедрения систему правления лизингом и кредитованием
              в ряде компаний Казахстана.
            </p>
            <p className="mt-4 text-gray-700">
              Предлагаемое решение полностью построено на базе системы
              1С:Предприятие8, поэтому вся управленческая, финансовая и прочая
              информация, а также весь документооборот сведены в системе
              воедино.
            </p>
            <p className="mt-4 text-gray-700">
              Так как система реализована по модульному принципу, имеется
              возможность запуска отдельных модулей в зависимости от
              потребностей заказчика.
            </p>

            <div className="mt-14">
              <h3 className="text-2xl font-bold">Кому подойдет решение</h3>
              <hr className="mt-2 w-20 border-t-[4px] border-[#A22823]" />
              <div className="flex gap-20 mt-12">
                <div className="text-center">
                  <div className="text-4xl">🏗️</div>
                  <p>Строительство</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl">💼</div>
                  <p>Финансовый сектор</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl">🚜</div>
                  <p>Сельское хозяйство</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl">🛒</div>
                  <p>Торговля</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-40">
              Состав модулей системы:
            </h2>
            <hr className="mt-2 w-20 border-t-[4px] border-[#A22823]" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 text-gray-700 mt-14">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">♦</span> Рассмотрение
                  заявок
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">♦</span> Заключение
                  договоров
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">♦</span> Учет залогового
                  имущества
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">♦</span> Учет
                  взаиморасчетов по выданным займам
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">♦</span> Регламентные
                  операции
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">♦</span> Посткредитное
                  обслуживание
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">♦</span> Работа с
                  проблемными заемщиками
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">♦</span> Управление
                  рисками
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">♦</span> Учет привлеченных
                  займов и ценных бумаг
                </li>
              </ul>

              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">♦</span> Казначейство
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">♦</span> Бюджетирование
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">♦</span> Взаиморасчеты с
                  поставщиками предметов лизинга
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">♦</span> Отчетность
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">♦</span> Интеграция
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">♦</span> Кадровый учет и
                  расчет заработной платы
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">♦</span>{" "}
                  Регламентированный учет
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">♦</span> Управление
                  закупками
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">♦</span> Документооборот
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
