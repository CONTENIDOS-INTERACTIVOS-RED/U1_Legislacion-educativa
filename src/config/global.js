export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
    numeroUnidad: '1',
    tituloUnidad:
      'Estructura de las normas en Colombia. Constitución Política de Colombia, Decreto 1075 del 2015',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Constitución Política de Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Principios fundamentales ',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Derechos fundamentales ',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Objetivos de la educación en Colombia',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Decreto 1075 del 2015 (Decreto Reglamentario Único del Sector Educación)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Marco normativo y su importancia en el sector educativo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Normas generales para el sector educativo',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (1991). Constitución Política de Colombia.',
      link: null,
    },
    {
      referencia:
        'Constitución Política de Colombia. (1991). Constitución Política de Colombia. Diario Oficial No. 39.988, 7 de julio de 1991.',
      link: 'https://www.constitucioncolombia.com/',
    },
    {
      referencia:
        'De Colombia, C. P. (1991). Título I De los principios fundamentales.',
      link: 'https://pdba.georgetown.edu/Constitutions/Colombia/colombia91.pdf',
    },
    {
      referencia:
        'Ferrajoli, L. (2006). Sobre los derechos fundamentales. Cuestiones constitucionales, (15), 113-136.',
      link: null,
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (1994). Ley 115 de 1994: Ley General de Educación. Diario Oficial No. 41.056, 8 de febrero de 1994.',
      link: 'https://www.mineducacion.gov.co/',
    },
    {
      referencia:
        'Duk, C., & Murillo, F. J. (2020). El Derecho a la Educación es el Derecho a una Educación Inclusiva y Equitativa. Revista latinoamericana de educación inclusiva, 14(2), 11-13.',
      link: null,
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2015). Decreto 1075 de 2015: Decreto Único Reglamentario del Sector Educación.',
      link: 'https://www.mineducacion.gov.co',
    },
  ],
  glosario: [
    {
      termino: 'Artículo 67',
      significado:
        'Artículo de la Constitución Política de Colombia que establece el derecho a la educación y la responsabilidad del Estado en su provisión.',
    },
    {
      termino: 'Constitución Política de Colombia',
      significado:
        'Documento fundamental que establece los principios, derechos y deberes de los ciudadanos, así como la estructura y funcionamiento del Estado colombiano.',
    },
    {
      termino: 'Decreto 1075 de 2015',
      significado:
        'Decreto reglamentario único del sector educación, que consolida y actualiza las normas reglamentarias del sector educativo en Colombia.',
    },
    {
      termino: 'Democracia',
      significado:
        'Sistema de gobierno en el que el poder es ejercido por el pueblo, directamente o a través de representantes elegidos, y que se basa en la participación ciudadana y el respeto a los derechos y libertades individuales.',
    },
    {
      termino: 'Derecho a la Educación',
      significado:
        'Derecho fundamental reconocido en la constitución y otros instrumentos legales, que garantiza el acceso a una educación de calidad para todos los ciudadanos.',
    },
    {
      termino: 'Derechos Fundamentales',
      significado:
        'Derechos inherentes a todos los seres humanos, reconocidos y protegidos por la constitución. Incluyen derechos civiles, políticos, económicos, sociales y culturales.',
    },
    {
      termino: 'Educación Formal',
      significado:
        'Sistema estructurado de enseñanza que incluye niveles como preescolar, básica y media, con un currículo definido y conducente a la obtención de certificados y diplomas oficiales.',
    },
    {
      termino: 'Educación Informal',
      significado:
        'Aprendizaje que se obtiene de la experiencia diaria y que no está estructurado ni formalizado, como puede ser el aprendizaje en el trabajo, en la familia, en la comunidad, etc.',
    },
    {
      termino: 'Inclusión Educativa',
      significado:
        'Principio y práctica de garantizar que todos los estudiantes, independientemente de sus capacidades o características personales, tengan acceso a una educación de calidad y participen plenamente en la vida escolar.',
    },
    {
      termino: 'Ley 115 de 1994',
      significado:
        'Conocida como la Ley General de Educación, establece los objetivos, principios y organización del sistema educativo colombiano.',
    },
    {
      termino: 'Marco Normativo',
      significado:
        'Conjunto de leyes, decretos, reglamentos y otras disposiciones legales que regulan el funcionamiento de un sector específico, en este caso, el sector educativo.',
    },
    {
      termino: 'Objetivos de la Educación',
      significado:
        'Metas y propósitos que guían el sistema educativo, definidos en la normativa vigente, como la formación integral de los estudiantes y la promoción de valores democráticos.',
    },
    {
      termino: 'Pluralismo',
      significado:
        'Principio constitucional que reconoce y valora la diversidad de opiniones, culturas y creencias en una sociedad.',
    },
    {
      termino: 'Principios Fundamentales',
      significado:
        'Normas y valores esenciales que guían la organización y funcionamiento del Estado, incluidos en la Constitución Política de Colombia, como la democracia, soberanía y pluralismo.',
    },
    {
      termino: 'Supervisión y Control',
      significado:
        'Mecanismos y entidades encargadas de asegurar el cumplimiento de las normas educativas, la calidad de la educación y la adecuada gestión de las instituciones educativas.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
