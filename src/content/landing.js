export const locales = ["kz", "en", "ru"];
export const defaultLocale = "ru";

export const landingContent = {
  ru: {
    meta: {
      title: "qMed AI",
      description:
        "qMed AI помогает медицинским организациям выстроить дистанционный мониторинг пациентов с хроническими заболеваниями, быстрее выявлять риски и снижать ручную нагрузку команды.",
    },
    header: {
      brandSubtitle: "digital chronic care",
      navigation: [
        { label: "Платформа", href: "#platform" },
        { label: "Возможности", href: "#features" },
        { label: "Сценарии", href: "#use-cases" },
        { label: "FAQ", href: "#faq" },
      ],
      cta: "Запросить демо",
      languageLabel: "Язык",
      menuLabel: "Открыть меню",
    },
    hero: {
      badge: "Премиальная платформа для хронического наблюдения",
      title: "qMed AI помогает вовремя замечать риск и уверенно вести программу наблюдения.",
      description:
        "Единая цифровая платформа для самоконтроля пациентов, приоритизации внимания медперсонала, коммуникации, аналитики и отчётности в ПМСП и клинических программах.",
      primaryCta: "Обсудить внедрение",
      secondaryCta: "Посмотреть возможности",
      proof: "Поддержка сценариев наблюдения, сигналов ухудшения и управляемой реакции команды.",
      trustItems: [
        "Подходит для поликлиник и программ ДУН",
        "Прозрачные процессы для врачей и координаторов",
        "Готово к внедрению в первичное звено",
      ],
      highlights: [
        { label: "Пациентов в наблюдении", value: "1 248" },
        { label: "Критические отклонения сегодня", value: "17" },
        { label: "Среднее время реакции", value: "14 мин" },
      ],
      dashboard: {
        title: "Панель наблюдения",
        subtitle: "Текущий статус программы",
        badge: "AI triage",
        primaryMetricLabel: "Пациенты с отклонениями",
        primaryMetricValue: "24",
        primaryMetricNote: "Из них 7 требуют контакта сегодня",
        signalLabel: "Сигнал",
        signalTitle: "Рост АД + жалобы",
        signalNote: "Пациент переведён в оранжевую зону",
        statuses: [
          { tone: "green", label: "Стабильно", value: "312" },
          { tone: "amber", label: "Нужно внимание", value: "41" },
          { tone: "red", label: "Приоритетно", value: "7" },
        ],
        patientCard: {
          label: "Пациентское приложение",
          title: "Ежедневный чек-ин",
          text: "Самочувствие, давление, приём терапии, симптомы.",
        },
        teamCard: {
          label: "Результат для команды",
          title: "Очередь внимания",
          text: "Список пациентов, которым нужен контакт и действие сегодня.",
        },
      },
    },
    problemSolution: {
      eyebrow: "Платформа",
      title: "Одна система вместо фрагментированных процессов наблюдения.",
      description:
        "qMed AI объединяет пациента, медицинскую команду и руководителя программы в единый управляемый контур.",
      painsLabel: "Что происходит без единой системы",
      solutionsLabel: "Как работает qMed AI",
      pains: [
        "Разрозненные таблицы, чаты и звонки не дают единой картины по пациентам.",
        "Сигналы ухудшения теряются, а приоритизация зависит от ручного просмотра.",
        "Отчётность и контроль программы забирают время команды вместо работы с пациентом.",
      ],
      solutions: [
        "Единый цифровой контур для ежедневного мониторинга, коммуникации и аналитики.",
        "Автоматическое выделение зон риска и очереди внимания для медицинского персонала.",
        "Структурированные данные и отчёты для руководителей, кураторов и программ ДУН.",
      ],
    },
    stats: {
      eyebrow: "Эффект для программы",
      title: "Цифровой контур даёт команде скорость, прозрачность и управляемую приоритизацию.",
      items: [
        { value: 92, suffix: "%", label: "ежедневных ответов автоматически распределяются по зонам риска" },
        { value: 3.4, suffix: "x", label: "быстрее команда находит пациентов, требующих приоритетного контакта" },
        { value: 48, suffix: "%", label: "меньше ручной рутины у координаторов наблюдения" },
        { value: 24, suffix: "/7", label: "контроль статусов пациентов и динамики программы в одном интерфейсе" },
      ],
    },
    features: {
      eyebrow: "Возможности",
      title: "Набор функций, который закрывает ежедневную работу программы наблюдения.",
      description:
        "Без перегруженного интерфейса: только ключевые инструменты для мониторинга, коммуникации и контроля рисков.",
      items: [
        {
          icon: "pulse",
          title: "Ежедневные опросы и самоконтроль",
          text: "Сбор симптомов, показателей и соблюдения рекомендаций по понятному сценарию для пациента.",
        },
        {
          icon: "triage",
          title: "Сегментация по зонам риска",
          text: "Система автоматически отмечает отклонения и помогает выстроить очередь приоритетов.",
        },
        {
          icon: "dashboard",
          title: "Панели мониторинга и аналитика",
          text: "Сводка по пациентам, врачам, участкам и программам для оперативного контроля.",
        },
        {
          icon: "registry",
          title: "Единый реестр пациентов",
          text: "Структурированная карточка наблюдения с историей ответов, событий и вмешательств.",
        },
        {
          icon: "message",
          title: "Коммуникация с пациентом",
          text: "Напоминания, оповещения и контактные сценарии для более стабильного участия в программе.",
        },
        {
          icon: "alert",
          title: "Сигналы ухудшения",
          text: "Быстрое выявление тревожных изменений и запуск маршрута своевременной реакции.",
        },
      ],
    },
    benefits: {
      eyebrow: "Ценность",
      title: "Польза и для медицинской организации, и для пациента.",
      description: "qMed AI помогает выстроить процесс, который понятен команде и не перегружает пациента.",
      organizationLabel: "Для медицинских организаций",
      patientLabel: "Для пациентов",
      organizationItems: [
        "Снижение нагрузки на персонал за счёт автоматизации рутинного контроля.",
        "Прозрачная приоритизация пациентов и более управляемая работа программы наблюдения.",
        "Отчётность и аналитика для руководителей, кураторов и внешних stakeholders.",
      ],
      patientItems: [
        "Понятный ежедневный сценарий самонаблюдения без сложных действий.",
        "Более раннее выявление ухудшений и своевременная обратная связь от медперсонала.",
        "Повышение приверженности наблюдению и ощущение постоянного сопровождения.",
      ],
    },
    workflow: {
      eyebrow: "Как это работает",
      title: "Понятный маршрут от ежедневного ответа пациента до своевременного действия команды.",
      description: "Сценарий легко объяснить внутри организации и масштабировать на новые программы наблюдения.",
      steps: [
        {
          step: "01",
          title: "Подключение пациента",
          text: "Пациент включается в программу наблюдения и получает цифровой маршрут самоконтроля.",
        },
        {
          step: "02",
          title: "Ежедневный мониторинг",
          text: "Система собирает ответы, показатели и статус выполнения рекомендаций.",
        },
        {
          step: "03",
          title: "Выявление риска",
          text: "Алгоритмы сегментируют отклонения и передают в работу только нужные случаи.",
        },
        {
          step: "04",
          title: "Своевременное вмешательство",
          text: "Команда быстро связывается с пациентом, корректирует маршрут и фиксирует результат.",
        },
      ],
    },
    useCases: {
      eyebrow: "Сценарии применения",
      title: "qMed AI подходит для программ наблюдения по ключевым хроническим и риск-ориентированным направлениям.",
      description: "Платформа остаётся компактной по интерфейсу, но масштабируется на разные клинические задачи.",
      advantagesLabel: "Почему qMed AI",
      cases: [
        "Артериальная гипертензия",
        "Сахарный диабет",
        "ХСН и сердечно-сосудистые риски",
        "ХОБЛ и респираторное наблюдение",
        "Послеоперационное сопровождение",
        "Пациенты группы высокого риска",
        "Корпоративные программы здоровья",
        "Региональные программы диспансерного наблюдения",
      ],
      advantages: [
        "Единый процесс вместо таблиц, чатов и ручной координации.",
        "Раннее обнаружение ухудшений до критического сценария.",
        "Прозрачность работы программы для руководителей и кураторов.",
        "Масштабирование на филиалы, участки и новые профили заболеваний.",
      ],
    },
    media: {
      eyebrow: "СМИ о нас",
      title: "Публикации, интервью и новости о qMed AI.",
      description: "Собрали заметные материалы о платформе, пилотах и развитии qMed AI в Казахстане.",
      scrollHint: "Прокрутите вбок, чтобы посмотреть все материалы",
      openLabel: "Открыть материал",
      items: [
        {
          source: "Astana Hub",
          title: "Итоги Astana Smart City: топ-10 стартапов, которые улучшают жизнь столицы",
          excerpt: "qMed AI вошёл в список проектов Astana Smart City и был отмечен как один из заметных городских healthtech-стартапов.",
          date: "20.11.2024",
          href: "https://astanahub.com/ru/article/itogi-astana-smart-city-top-10-startapov-kotorye-uluchshaiut-zhizn-stolitsy",
          image:
            "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
        },
        {
          source: "Gov.kz",
          title: "Проект грантообладателя «Тәуелсіздік ұрпақтары» внедряют в поликлиниках страны",
          excerpt: "Господдержка помогла масштабировать qMed как инструмент мониторинга пациентов с хроническими заболеваниями.",
          date: "31.10.2024",
          href: "https://www.gov.kz/memleket/entities/mam/press/news/details/875063?lang=kk",
          image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
        },
        {
          source: "Optimism.kz",
          title: "Мобильную платформу для пациентов презентовали в Астане",
          excerpt: "На презентации qMed показали, как приложение помогает пациентам соблюдать самоконтроль и быстрее коммуницировать с медперсоналом.",
          date: "24.10.2024",
          href: "https://optimism.kz/2024/10/24/mobilnuyu-platformu-dlya-paczientov-prezentovali-v-astane/",
          image:
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
        },
        {
          source: "Sputnik Kazakhstan",
          title: "Мобильную платформу для пациентов презентовали в Астане",
          excerpt: "Публикация о запуске и демонстрации платформы qMed в Астане с акцентом на цифровое сопровождение пациента.",
          date: "24.10.2024",
          href: "https://ru.sputnik.kz/20241024/platforma-patsient-astana-48066721.html",
          image:
            "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
        },
        {
          source: "Forbes Kazakhstan",
          title: "Цифровые решения для хронического наблюдения: почему рынок смотрит на patient engagement",
          excerpt: "Тестовая карточка для демонстрации длинной горизонтальной ленты публикаций о медицинских цифровых сервисах.",
          date: "12.09.2024",
          href: "https://qbots.kz/",
          image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
        },
        {
          source: "Digital Health Review",
          title: "Как qMed AI помогает медорганизациям строить управляемое дистанционное наблюдение",
          excerpt: "Тестовый материал о процессах мониторинга, маршрутизации сигналов и цифровой координации медицинской команды.",
          date: "05.09.2024",
          href: "https://qbots.kz/",
          image:
            "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
        },
        {
          source: "Tech in Med",
          title: "Интерфейс пациента, аналитика врача и единый реестр: из чего состоит платформа qMed",
          excerpt: "Тестовая карточка для проверки плотности текста, размеров шрифта и прокрутки без видимого scrollbar.",
          date: "22.08.2024",
          href: "https://qbots.kz/",
          image:
            "https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=1200&q=80",
        },
        {
          source: "Healthtech Today",
          title: "Почему в программах наблюдения важны не только опросы, но и управляемая очередь внимания",
          excerpt: "Ещё один тестовый материал, который заполняет ленту и помогает оценить восприятие секции на больших экранах.",
          date: "14.08.2024",
          href: "https://qbots.kz/",
          image:
            "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Коротко о внедрении, настройке и применении платформы.",
      description: "Базовые ответы для первого разговора с медицинской организацией или партнёром.",
      items: [
        {
          question: "Для каких медицинских организаций подходит qMed AI?",
          answer:
            "Платформа подходит для поликлиник, центров ПМСП, частных сетей, disease management программ и корпоративных медицинских проектов.",
        },
        {
          question: "Можно ли адаптировать маршруты наблюдения под конкретное заболевание?",
          answer:
            "Да. Опросники, пороги риска, статусы и сценарии реакции можно настроить под клинический профиль и внутренний процесс организации.",
        },
        {
          question: "Насколько быстро команда может начать пилот?",
          answer:
            "Пилотный контур обычно можно подготовить за короткий цикл после согласования сценариев, ролей и состава данных.",
        },
        {
          question: "Что получает руководитель программы?",
          answer:
            "Руководитель получает сводную аналитику по охвату, динамике ответов, зонам риска, нагрузке команды и результатам вмешательств.",
        },
      ],
    },
    cta: {
      kicker: "Связаться с нами",
      title: "Оставьте контакт, и мы покажем, как qMed AI встанет в ваш процесс наблюдения.",
      description:
        "Обсудим целевой сценарий, роли команды, профиль пациентов и формат пилота. Без лишней теории, сразу от процесса к практической модели внедрения.",
      organizationLabel: "Организация",
      organizationPlaceholder: "Название клиники или программы",
      contactLabel: "Телефон",
      contactPlaceholder: "+7 (700) 000-00-00",
      contextLabel: "Контекст",
      contextPlaceholder: "Какие пациенты и какой процесс вы хотите цифровизировать?",
      primaryButton: "Отправить запрос",
      successTitle: "Запрос успешно отправлен",
      successText: "Спасибо! Мы красиво приняли ваш запрос и уже скоро свяжемся, чтобы обсудить внедрение qMed AI.",
      successButton: "Супер",
      successFallbackOrganization: "Без названия организации",
      successFallbackContext: "Контекст уточним при звонке",
    },
    footer: {
      brandTagline: "Digital chronic care platform",
      linksLabel: "Разделы",
      links: [
        { label: "Возможности", href: "#features" },
        { label: "Как это работает", href: "#workflow" },
        { label: "FAQ", href: "#faq" },
      ],
      contactsLabel: "Контакты",
      phoneDisplay: "+7 (700) 000-00-00",
      phoneRaw: "+77000000000",
      email: "info@qbots.kz",
      address: "Алматы, Кабдолова 22Б",
      appLinksLabel: "Приложение для пациентов",
      appLinks: [
        { label: "App Store", icon: "appStore", href: "https://apps.apple.com/kz/app/qbots-qmed/id6760441163" },
        { label: "Google Play", icon: "googlePlay", href: "https://play.google.com/store/apps/details?id=com.qmed.patient&hl=ru" },
      ],
      socialLinksLabel: "Мы в соцсетях",
      socialLinks: [
        { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/qmed.kz/" },
        { label: "Qazaqstan Bots", icon: "linkedin", href: "https://www.linkedin.com/company/89290665" },
      ],
      copyright: "© qMed AI",
    },
  },
  en: {
    meta: {
      title: "qMed AI | Remote Chronic Care Monitoring Platform",
      description:
        "qMed AI helps healthcare organizations build chronic care monitoring workflows, detect risks earlier, and reduce manual operational load.",
    },
    header: {
      brandSubtitle: "digital chronic care",
      navigation: [
        { label: "Platform", href: "#platform" },
        { label: "Features", href: "#features" },
        { label: "Use Cases", href: "#use-cases" },
        { label: "FAQ", href: "#faq" },
      ],
      cta: "Request demo",
      languageLabel: "Language",
      menuLabel: "Open menu",
    },
    hero: {
      badge: "Premium platform for chronic care monitoring",
      title: "qMed AI helps teams detect risk earlier and run care programs with confidence.",
      description:
        "A unified digital platform for patient self-monitoring, staff prioritization, communication, analytics, and reporting across primary care and clinical programs.",
      primaryCta: "Discuss implementation",
      secondaryCta: "Explore platform",
      proof: "Built for monitoring workflows, deterioration signals, and coordinated medical response.",
      trustItems: [
        "Ready for clinics and disease management programs",
        "Transparent workflows for physicians and coordinators",
        "Designed for scalable primary care operations",
      ],
      highlights: [
        { label: "Patients under monitoring", value: "1,248" },
        { label: "Critical deviations today", value: "17" },
        { label: "Average response time", value: "14 min" },
      ],
      dashboard: {
        title: "Monitoring dashboard",
        subtitle: "Current program status",
        badge: "AI triage",
        primaryMetricLabel: "Patients with deviations",
        primaryMetricValue: "24",
        primaryMetricNote: "7 of them require contact today",
        signalLabel: "Signal",
        signalTitle: "Blood pressure rise + symptoms",
        signalNote: "Patient moved to the orange zone",
        statuses: [
          { tone: "green", label: "Stable", value: "312" },
          { tone: "amber", label: "Needs attention", value: "41" },
          { tone: "red", label: "Priority", value: "7" },
        ],
        patientCard: {
          label: "Patient app",
          title: "Daily check-in",
          text: "Well-being, blood pressure, therapy intake, symptoms.",
        },
        teamCard: {
          label: "Team outcome",
          title: "Attention queue",
          text: "A list of patients who need contact and action today.",
        },
      },
    },
    problemSolution: {
      eyebrow: "Platform",
      title: "One system instead of fragmented monitoring processes.",
      description:
        "qMed AI connects the patient, care team, and program manager into one coordinated workflow.",
      painsLabel: "What happens without a unified system",
      solutionsLabel: "How qMed AI works",
      pains: [
        "Scattered spreadsheets, chats, and phone calls never create a single patient view.",
        "Deterioration signals get lost, while prioritization depends on manual review.",
        "Reporting and program oversight consume team time that should go to patient care.",
      ],
      solutions: [
        "A single digital layer for daily monitoring, communication, and analytics.",
        "Automatic risk segmentation and prioritized work queues for medical staff.",
        "Structured data and reporting for managers, coordinators, and chronic care programs.",
      ],
    },
    stats: {
      eyebrow: "Program impact",
      title: "A digital care layer gives teams speed, visibility, and controlled prioritization.",
      items: [
        { value: 92, suffix: "%", label: "of daily responses are automatically distributed across risk zones" },
        { value: 3.4, suffix: "x", label: "faster identification of patients needing priority contact" },
        { value: 48, suffix: "%", label: "less manual routine work for monitoring coordinators" },
        { value: 24, suffix: "/7", label: "status control and program dynamics in one interface" },
      ],
    },
    features: {
      eyebrow: "Features",
      title: "A feature set built for everyday chronic care operations.",
      description: "No overloaded interface, only the tools needed for monitoring, communication, and risk control.",
      items: [
        {
          icon: "pulse",
          title: "Daily surveys and self-monitoring",
          text: "Collect symptoms, health indicators, and adherence data through a clear patient journey.",
        },
        {
          icon: "triage",
          title: "Risk zone segmentation",
          text: "The system marks deviations automatically and helps build the right attention queue.",
        },
        {
          icon: "dashboard",
          title: "Dashboards and analytics",
          text: "Operational visibility by patient, physician, site, and program in one place.",
        },
        {
          icon: "registry",
          title: "Unified patient registry",
          text: "A structured observation profile with response history, events, and interventions.",
        },
        {
          icon: "message",
          title: "Patient communication",
          text: "Reminders, alerts, and contact scenarios that improve engagement and consistency.",
        },
        {
          icon: "alert",
          title: "Deterioration alerts",
          text: "Detect concerning changes early and launch a timely intervention pathway.",
        },
      ],
    },
    benefits: {
      eyebrow: "Value",
      title: "Clear value for both healthcare organizations and patients.",
      description: "qMed AI helps build a process that is manageable for the team and simple for the patient.",
      organizationLabel: "For healthcare organizations",
      patientLabel: "For patients",
      organizationItems: [
        "Lower staff workload through automation of routine monitoring tasks.",
        "Transparent patient prioritization and better program governance.",
        "Reporting and analytics for leadership, coordinators, and external stakeholders.",
      ],
      patientItems: [
        "A simple daily self-monitoring flow without unnecessary complexity.",
        "Earlier detection of deterioration and more timely staff feedback.",
        "Higher adherence and a stronger feeling of continuous support.",
      ],
    },
    workflow: {
      eyebrow: "How it works",
      title: "A clear path from the patient’s daily response to timely team action.",
      description: "Easy to explain internally and easy to scale across new monitoring programs.",
      steps: [
        {
          step: "01",
          title: "Patient onboarding",
          text: "The patient joins the monitoring program and receives a digital self-care journey.",
        },
        {
          step: "02",
          title: "Daily monitoring",
          text: "The platform collects responses, indicators, and adherence status every day.",
        },
        {
          step: "03",
          title: "Risk detection",
          text: "Algorithms segment deviations and send only relevant cases into team workflows.",
        },
        {
          step: "04",
          title: "Timely intervention",
          text: "The team contacts the patient, adjusts the care route, and records the outcome.",
        },
      ],
    },
    useCases: {
      eyebrow: "Use cases",
      title: "qMed AI supports chronic care and risk-oriented monitoring programs across multiple pathways.",
      description: "The interface stays compact while the platform scales to different clinical scenarios.",
      advantagesLabel: "Why qMed AI",
      cases: [
        "Hypertension",
        "Diabetes",
        "Heart failure and cardiovascular risk",
        "COPD and respiratory monitoring",
        "Post-operative follow-up",
        "High-risk patient cohorts",
        "Corporate health programs",
        "Regional chronic care initiatives",
      ],
      advantages: [
        "One workflow instead of spreadsheets, chats, and manual coordination.",
        "Earlier detection of deterioration before it becomes critical.",
        "Operational transparency for managers and program leaders.",
        "Scalable across branches, districts, and new disease profiles.",
      ],
    },
    media: {
      eyebrow: "Media",
      title: "News, interviews, and public coverage about qMed AI.",
      description: "A curated set of publications about the platform, pilots, and qMed AI growth in Kazakhstan.",
      scrollHint: "Scroll sideways to explore all stories",
      openLabel: "Open article",
      items: [
        {
          source: "Astana Hub",
          title: "Astana Smart City results: top 10 startups improving urban life",
          excerpt: "qMed AI was highlighted among the Astana Smart City projects as one of the visible healthtech teams in the cohort.",
          date: "Nov 20, 2024",
          href: "https://astanahub.com/ru/article/itogi-astana-smart-city-top-10-startapov-kotorye-uluchshaiut-zhizn-stolitsy",
          image:
            "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
        },
        {
          source: "Gov.kz",
          title: "A Tauelsizdik Urpaktary grant project is being introduced in clinics across the country",
          excerpt: "The publication covers how qMed is being adopted in clinics as a practical digital monitoring tool for chronic care.",
          date: "Oct 31, 2024",
          href: "https://www.gov.kz/memleket/entities/mam/press/news/details/875063?lang=kk",
          image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
        },
        {
          source: "Optimism.kz",
          title: "A mobile platform for patients was presented in Astana",
          excerpt: "The story focuses on how qMed supports self-monitoring and simplifies patient communication with medical staff.",
          date: "Oct 24, 2024",
          href: "https://optimism.kz/2024/10/24/mobilnuyu-platformu-dlya-paczientov-prezentovali-v-astane/",
          image:
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
        },
        {
          source: "Sputnik Kazakhstan",
          title: "A mobile platform for patients was presented in Astana",
          excerpt: "Coverage of the qMed presentation in Astana with a focus on digital support for chronic patients.",
          date: "Oct 24, 2024",
          href: "https://ru.sputnik.kz/20241024/platforma-patsient-astana-48066721.html",
          image:
            "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
        },
        {
          source: "Forbes Kazakhstan",
          title: "Digital tools for chronic care: why the market is focused on patient engagement",
          excerpt: "A placeholder card added to make the media rail feel fuller and easier to evaluate while scrolling.",
          date: "Sep 12, 2024",
          href: "https://qbots.kz/",
          image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
        },
        {
          source: "Digital Health Review",
          title: "How qMed AI helps clinics build manageable remote monitoring workflows",
          excerpt: "A test story about monitoring operations, signal routing, and better coordination for medical teams.",
          date: "Sep 5, 2024",
          href: "https://qbots.kz/",
          image:
            "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
        },
        {
          source: "Tech in Med",
          title: "Patient interface, physician analytics, and unified registry: what the qMed platform includes",
          excerpt: "A placeholder card used to test typography density and the horizontal rail without visible scrollbars.",
          date: "Aug 22, 2024",
          href: "https://qbots.kz/",
          image:
            "https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=1200&q=80",
        },
        {
          source: "Healthtech Today",
          title: "Why monitoring programs need not only surveys, but also a managed attention queue",
          excerpt: "Another test article to make the section feel complete on larger screens and during wheel scrolling.",
          date: "Aug 14, 2024",
          href: "https://qbots.kz/",
          image:
            "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "A quick overview of implementation, setup, and platform usage.",
      description: "Core answers for the first conversation with a healthcare organization or partner.",
      items: [
        {
          question: "What types of healthcare organizations is qMed AI designed for?",
          answer:
            "The platform fits primary care centers, outpatient clinics, private networks, disease management programs, and corporate healthcare initiatives.",
        },
        {
          question: "Can monitoring routes be adapted for a specific disease?",
          answer:
            "Yes. Questionnaires, risk thresholds, statuses, and intervention scenarios can be configured for each clinical profile and internal workflow.",
        },
        {
          question: "How quickly can a team launch a pilot?",
          answer:
            "A pilot environment can usually be prepared in a short cycle once scenarios, roles, and data scope are aligned.",
        },
        {
          question: "What does a program manager get?",
          answer:
            "A manager gets analytics on coverage, response dynamics, risk zones, team workload, and intervention outcomes.",
        },
      ],
    },
    cta: {
      kicker: "Contact Us",
      title: "Leave your contact details and we’ll show how qMed AI fits your monitoring workflow.",
      description:
        "We can review your target workflow, team roles, patient profile, and pilot format. Less theory, more implementation logic.",
      organizationLabel: "Organization",
      organizationPlaceholder: "Clinic or program name",
      contactLabel: "Phone",
      contactPlaceholder: "+7 (700) 000-00-00",
      contextLabel: "Context",
      contextPlaceholder: "What patient group or workflow do you want to digitize?",
      primaryButton: "Send request",
      successTitle: "Request successfully sent",
      successText: "Thank you. We’ve received your request and will get back to you shortly to discuss the next steps.",
      successButton: "Awesome",
      successFallbackOrganization: "Organization not specified",
      successFallbackContext: "We’ll clarify the details during the call",
    },
    footer: {
      brandTagline: "Digital chronic care platform",
      linksLabel: "Sections",
      links: [
        { label: "Features", href: "#features" },
        { label: "How it works", href: "#workflow" },
        { label: "FAQ", href: "#faq" },
      ],
      contactsLabel: "Contacts",
      phoneDisplay: "+7 (700) 000-00-00",
      phoneRaw: "+77000000000",
      email: "info@qbots.kz",
      address: "22B Kabdolova, Almaty",
      appLinksLabel: "Patient app",
      appLinks: [
        { label: "App Store", icon: "appStore", href: "https://apps.apple.com/kz/app/qbots-qmed/id6760441163" },
        { label: "Google Play", icon: "googlePlay", href: "https://play.google.com/store/apps/details?id=com.qmed.patient&hl=ru" },
      ],
      socialLinksLabel: "Follow qMed",
      socialLinks: [
        { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/qmed.kz/" },
        { label: "Qazaqstan Bots", icon: "linkedin", href: "https://www.linkedin.com/company/89290665" },
      ],
      copyright: "© qMed AI",
    },
  },
  kz: {
    meta: {
      title: "qMed AI | Созылмалы ауруларды қашықтан бақылау платформасы",
      description:
        "qMed AI медициналық ұйымдарға созылмалы аурулары бар пациенттерді қашықтан бақылау процесін құруға, тәуекелдерді ертерек анықтауға және қолмен орындалатын жұмысты азайтуға көмектеседі.",
    },
    header: {
      brandSubtitle: "digital chronic care",
      navigation: [
        { label: "Платформа", href: "#platform" },
        { label: "Мүмкіндіктер", href: "#features" },
        { label: "Сценарийлер", href: "#use-cases" },
        { label: "FAQ", href: "#faq" },
      ],
      cta: "Демо сұрау",
      languageLabel: "Тіл",
      menuLabel: "Мәзірді ашу",
    },
    hero: {
      badge: "Созылмалы бақылауға арналған премиум платформа",
      title: "qMed AI тәуекелді ерте байқап, бақылау бағдарламасын сенімді жүргізуге көмектеседі.",
      description:
        "Пациенттің өзін-өзі бақылауын, медицина қызметкерлерінің басымдық беруін, коммуникацияны, аналитиканы және есептілікті біріктіретін бірыңғай цифрлық платформа.",
      primaryCta: "Енгізуді талқылау",
      secondaryCta: "Мүмкіндіктерді көру",
      proof: "Бақылау сценарийлері, нашарлау сигналдары және үйлестірілген әрекет үшін жасалған.",
      trustItems: [
        "Емханалар мен бақылау бағдарламаларына сай",
        "Дәрігерлер мен координаторлар үшін ашық процестер",
        "Алғашқы буында масштабтауға дайын",
      ],
      highlights: [
        { label: "Бақылаудағы пациенттер", value: "1 248" },
        { label: "Бүгінгі маңызды ауытқулар", value: "17" },
        { label: "Орташа әрекет уақыты", value: "14 мин" },
      ],
      dashboard: {
        title: "Бақылау панелі",
        subtitle: "Бағдарламаның ағымдағы күйі",
        badge: "AI triage",
        primaryMetricLabel: "Ауытқуы бар пациенттер",
        primaryMetricValue: "24",
        primaryMetricNote: "Оның 7-іне бүгін байланысу қажет",
        signalLabel: "Сигнал",
        signalTitle: "ҚҚ өсуі + шағымдар",
        signalNote: "Пациент қызғылт сары аймаққа ауыстырылды",
        statuses: [
          { tone: "green", label: "Тұрақты", value: "312" },
          { tone: "amber", label: "Назар қажет", value: "41" },
          { tone: "red", label: "Басым", value: "7" },
        ],
        patientCard: {
          label: "Пациент қосымшасы",
          title: "Күнделікті check-in",
          text: "Жалпы жағдай, қысым, емді қабылдау, симптомдар.",
        },
        teamCard: {
          label: "Командаға нәтиже",
          title: "Назар кезегі",
          text: "Бүгін байланыс пен әрекет қажет пациенттер тізімі.",
        },
      },
    },
    problemSolution: {
      eyebrow: "Платформа",
      title: "Фрагменттелген бақылау процесінің орнына бір жүйе.",
      description:
        "qMed AI пациентті, медициналық команданы және бағдарлама жетекшісін бір басқарылатын контурға біріктіреді.",
      painsLabel: "Біртұтас жүйе болмаған кезде",
      solutionsLabel: "qMed AI қалай жұмыс істейді",
      pains: [
        "Шашыраңқы кестелер, чаттар мен қоңыраулар пациент туралы толық көрініс бермейді.",
        "Нашарлау сигналдары жоғалып кетеді, ал басымдық беру қолмен қарауға тәуелді.",
        "Есептілік пен бақылау команда уақытын пациентпен жұмыс істеуден бөледі.",
      ],
      solutions: [
        "Күнделікті мониторинг, коммуникация және аналитикаға арналған бірыңғай цифрлық қабат.",
        "Тәуекел аймақтарын автоматты бөлу және медицина қызметкерлеріне арналған кезек.",
        "Жетекшілер мен координаторларға арналған құрылымдалған деректер мен есептер.",
      ],
    },
    stats: {
      eyebrow: "Бағдарлама әсері",
      title: "Цифрлық контур командаға жылдамдық, ашықтық және басқарылатын басымдық береді.",
      items: [
        { value: 92, suffix: "%", label: "күнделікті жауап тәуекел аймақтарына автоматты түрде бөлінеді" },
        { value: 3.4, suffix: "x", label: "басым байланыс қажет пациенттерді табу жылдамырақ" },
        { value: 48, suffix: "%", label: "координаторлардың қолмен істейтін рутинасы азаяды" },
        { value: 24, suffix: "/7", label: "бір интерфейсте статус пен динамиканы бақылау" },
      ],
    },
    features: {
      eyebrow: "Мүмкіндіктер",
      title: "Күнделікті бақылау жұмысына бейімделген функциялар жиынтығы.",
      description: "Артық жүктелмеген интерфейс, тек мониторингке, коммуникацияға және тәуекел бақылауына қажет құралдар.",
      items: [
        {
          icon: "pulse",
          title: "Күнделікті сауалнама және өзін-өзі бақылау",
          text: "Пациентке түсінікті сценарий арқылы симптомдар мен көрсеткіштерді жинау.",
        },
        {
          icon: "triage",
          title: "Тәуекел аймақтарына бөлу",
          text: "Жүйе ауытқуларды автоматты белгілеп, дұрыс назар кезегін қалыптастырады.",
        },
        {
          icon: "dashboard",
          title: "Панельдер мен аналитика",
          text: "Пациент, дәрігер, учаске және бағдарлама бойынша жедел көрініс.",
        },
        {
          icon: "registry",
          title: "Бірыңғай пациент реестрі",
          text: "Жауаптар, оқиғалар мен араласулар тарихы бар құрылымдалған карта.",
        },
        {
          icon: "message",
          title: "Пациентпен байланыс",
          text: "Еске салғыштар, ескертулер және қатысуды тұрақтандыратын сценарийлер.",
        },
        {
          icon: "alert",
          title: "Нашарлау сигналдары",
          text: "Қауіпті өзгерістерді ерте анықтап, уақытылы әрекет сценарийін іске қосу.",
        },
      ],
    },
    benefits: {
      eyebrow: "Құндылық",
      title: "Медициналық ұйымға да, пациентке де түсінікті пайда.",
      description: "qMed AI командаға басқаруға ыңғайлы, ал пациентке қарапайым процесті құруға көмектеседі.",
      organizationLabel: "Медициналық ұйымдар үшін",
      patientLabel: "Пациенттер үшін",
      organizationItems: [
        "Бақылау рутиналарын автоматтандыру арқылы персонал жүктемесін азайту.",
        "Пациенттерді ашық басымдықтау және бағдарламаны жақсырақ басқару.",
        "Жетекшілер мен координаторларға арналған есептілік пен аналитика.",
      ],
      patientItems: [
        "Күрделі емес күнделікті өзін-өзі бақылау сценарийі.",
        "Нашарлауды ертерек анықтау және медицина қызметкерлерінен уақтылы кері байланыс.",
        "Бақылауға бейілділіктің артуы және тұрақты қолдау сезімі.",
      ],
    },
    workflow: {
      eyebrow: "Қалай жұмыс істейді",
      title: "Пациенттің күнделікті жауабынан команданың уақытылы әрекетіне дейінгі түсінікті маршрут.",
      description: "Ішкі командаға түсіндіру де, жаңа бағдарламаларға масштабтау да оңай.",
      steps: [
        {
          step: "01",
          title: "Пациентті қосу",
          text: "Пациент бағдарламаға қосылып, цифрлық өзін-өзі бақылау маршрутын алады.",
        },
        {
          step: "02",
          title: "Күнделікті мониторинг",
          text: "Жүйе жауаптарды, көрсеткіштерді және ұсыныстардың орындалуын жинайды.",
        },
        {
          step: "03",
          title: "Тәуекелді анықтау",
          text: "Алгоритмдер ауытқуларды бөліп, тек маңызды жағдайларды командаға береді.",
        },
        {
          step: "04",
          title: "Уақтылы араласу",
          text: "Команда пациентпен байланысып, маршрутты түзетіп, нәтижені тіркейді.",
        },
      ],
    },
    useCases: {
      eyebrow: "Қолдану сценарийлері",
      title: "qMed AI негізгі созылмалы және тәуекелге бағытталған бақылау бағдарламаларына сәйкес келеді.",
      description: "Интерфейс ықшам болып қалады, ал платформа түрлі клиникалық сценарийлерге масштабталады.",
      advantagesLabel: "Неліктен qMed AI",
      cases: [
        "Артериялық гипертензия",
        "Қант диабеті",
        "ЖЖЖ және жүрек-қантамыр тәуекелі",
        "ӨСОА және тыныс алу мониторингі",
        "Операциядан кейінгі бақылау",
        "Жоғары тәуекел тобы",
        "Корпоративтік денсаулық бағдарламалары",
        "Аймақтық диспансерлік бақылау бағдарламалары",
      ],
      advantages: [
        "Кестелер, чаттар және қолмен үйлестірудің орнына бір процесс.",
        "Критикалық жағдайға дейін нашарлауды ерте анықтау.",
        "Жетекшілер мен кураторлар үшін процестің ашықтығы.",
        "Филиалдар мен жаңа ауру профильдеріне масштабтау.",
      ],
    },
    media: {
      eyebrow: "БАҚ біз туралы",
      title: "qMed AI туралы жаңалықтар, сұхбаттар және жарияланымдар.",
      description: "Платформа, пилоттар және qMed AI дамуы туралы маңызды материалдарды бір жерге жинадық.",
      scrollHint: "Барлық материалды көру үшін көлденең сырғытыңыз",
      openLabel: "Материалды ашу",
      items: [
        {
          source: "Astana Hub",
          title: "Astana Smart City қорытындысы: қала өмірін жақсартатын үздік 10 стартап",
          excerpt: "qMed AI Astana Smart City бағдарламасындағы көзге түскен healthtech-жобалардың бірі ретінде аталды.",
          date: "20.11.2024",
          href: "https://astanahub.com/ru/article/itogi-astana-smart-city-top-10-startapov-kotorye-uluchshaiut-zhizn-stolitsy",
          image:
            "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
        },
        {
          source: "Gov.kz",
          title: "«Тәуелсіздік ұрпақтары» гранты иегерінің жобасы ел емханаларында пайдаланылмақ",
          excerpt: "Материалда qMed-тің созылмалы ауруларды бақылауға арналған цифрлық құрал ретінде емханаларда енгізіліп жатқаны айтылған.",
          date: "31.10.2024",
          href: "https://www.gov.kz/memleket/entities/mam/press/news/details/875063?lang=kk",
          image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
        },
        {
          source: "Optimism.kz",
          title: "Астанада пациенттерге арналған мобильді платформа таныстырылды",
          excerpt: "qMed пациенттің өзін-өзі бақылауын және медицина қызметкерлерімен байланысын қалай жеңілдететіні көрсетілді.",
          date: "24.10.2024",
          href: "https://optimism.kz/2024/10/24/mobilnuyu-platformu-dlya-paczientov-prezentovali-v-astane/",
          image:
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
        },
        {
          source: "Sputnik Kazakhstan",
          title: "Астанада пациенттерге арналған мобильді платформа таныстырылды",
          excerpt: "Астанадағы qMed тұсаукесері және пациенттерді цифрлық сүйемелдеу туралы материал.",
          date: "24.10.2024",
          href: "https://ru.sputnik.kz/20241024/platforma-patsient-astana-48066721.html",
          image:
            "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
        },
        {
          source: "Forbes Kazakhstan",
          title: "Созылмалы бақылауға арналған цифрлық шешімдер және patient engagement бағыты",
          excerpt: "Лентаның ұзындығын көбейту және скролл мінез-құлқын тексеру үшін қосылған тестік карточка.",
          date: "12.09.2024",
          href: "https://qbots.kz/",
          image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
        },
        {
          source: "Digital Health Review",
          title: "qMed AI емханаларға қашықтан мониторинг процесін басқаруға қалай көмектеседі",
          excerpt: "Медицина командасының жұмысын ұйымдастыру, сигналдарды бөлу және бақылау логикасы туралы тестік материал.",
          date: "05.09.2024",
          href: "https://qbots.kz/",
          image:
            "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
        },
        {
          source: "Tech in Med",
          title: "Пациент интерфейсі, дәрігер аналитикасы және бірыңғай реестр: qMed неден тұрады",
          excerpt: "Шрифт өлшемін және scrollbar-сыз горизонталды лентаны көру үшін қосылған тестік карточка.",
          date: "22.08.2024",
          href: "https://qbots.kz/",
          image:
            "https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=1200&q=80",
        },
        {
          source: "Healthtech Today",
          title: "Бақылау бағдарламаларына сауалнама ғана емес, басқарылатын назар кезегі де не үшін керек",
          excerpt: "Үлкен экранда секцияны толық сезіну және скролл сценарийін тексеру үшін тағы бір тестік материал.",
          date: "14.08.2024",
          href: "https://qbots.kz/",
          image:
            "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Енгізу, баптау және қолдану туралы қысқаша.",
      description: "Медициналық ұйыммен немесе серіктеспен алғашқы сөйлесуге арналған базалық жауаптар.",
      items: [
        {
          question: "qMed AI қандай медициналық ұйымдарға сай келеді?",
          answer:
            "Платформа емханаларға, БМСК орталықтарына, жеке желілерге, disease management бағдарламаларына және корпоративтік медицина жобаларына сай келеді.",
        },
        {
          question: "Бақылау маршруттарын нақты ауруға бейімдеуге бола ма?",
          answer:
            "Иә. Сауалнамалар, тәуекел шектері, статустар мен әрекет сценарийлері клиникалық профильге сай бапталады.",
        },
        {
          question: "Пилотты қаншалықты тез бастауға болады?",
          answer:
            "Сценарийлер, рөлдер және деректер құрамы келісілгеннен кейін пилоттық контурды қысқа мерзімде дайындауға болады.",
        },
        {
          question: "Бағдарлама жетекшісі не алады?",
          answer:
            "Қамту, жауап динамикасы, тәуекел аймақтары, команда жүктемесі және араласу нәтижелері бойынша аналитика алады.",
        },
      ],
    },
    cta: {
      kicker: "Бізбен байланысу",
      title: "Байланыс нөміріңізді қалдырыңыз, qMed AI сіздің бақылау процесіңізге қалай кіретінін көрсетеміз.",
      description:
        "Мақсатты процесті, команда рөлдерін, пациент профилін және пилот форматын бірге талқылаймыз. Артық теориясыз, бірден іске асыру логикасына көшеміз.",
      organizationLabel: "Ұйым",
      organizationPlaceholder: "Клиника немесе бағдарлама атауы",
      contactLabel: "Телефон",
      contactPlaceholder: "+7 (700) 000-00-00",
      contextLabel: "Контекст",
      contextPlaceholder: "Қандай пациенттер тобын немесе процесті цифрландырғыңыз келеді?",
      primaryButton: "Өтінім жіберу",
      successTitle: "Өтінім сәтті жіберілді",
      successText: "Рақмет! Өтініміңіз қабылданды, жақын арада хабарласып, келесі қадамдарды талқылаймыз.",
      successButton: "Тамаша",
      successFallbackOrganization: "Ұйым атауы көрсетілмеген",
      successFallbackContext: "Контекст қоңырау кезінде нақтыланады",
    },
    footer: {
      brandTagline: "Digital chronic care platform",
      linksLabel: "Бөлімдер",
      links: [
        { label: "Мүмкіндіктер", href: "#features" },
        { label: "Қалай жұмыс істейді", href: "#workflow" },
        { label: "FAQ", href: "#faq" },
      ],
      contactsLabel: "Байланыс",
      phoneDisplay: "+7 (700) 000-00-00",
      phoneRaw: "+77000000000",
      email: "info@qbots.kz",
      address: "Алматы, Қабдолова 22Б",
      appLinksLabel: "Пациент қосымшасы",
      appLinks: [
        { label: "App Store", icon: "appStore", href: "https://apps.apple.com/kz/app/qbots-qmed/id6760441163" },
        { label: "Google Play", icon: "googlePlay", href: "https://play.google.com/store/apps/details?id=com.qmed.patient&hl=ru" },
      ],
      socialLinksLabel: "Әлеуметтік желілер",
      socialLinks: [
        { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/qmed.kz/" },
        { label: "Qazaqstan Bots", icon: "linkedin", href: "https://www.linkedin.com/company/89290665" },
      ],
      copyright: "© qMed AI",
    },
  },
};
