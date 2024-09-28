export const subtema = [
  {
    id: 2,
    title: 'Instalacion de nestJs',
    descrip:
      'iniciando el proyecto crea una carpeta m6nuel con los archivos necesarios adentro, si no quieres que se cree otra carpeta sino que se creen los archivos en la ubicación actual usas nest new  m6nuel .',
    image: 'nest new  m6nuel',
    create: '2024-09-27T22:22:30.759Z',
    deleted: null,
    itemId: 6,
  },
  {
    id: 3,
    title: 'Error de prettier',
    descrip:
      'si el vsc nos da un error por la configuración de prettier debemos copiar este código en .eslintrc.js',
    image:
      '"prettier/prettier": [\n      "error",\n      {\n        "endOfLine": "auto"\n      },\n    ]',
    create: '2024-09-27T22:33:01.451Z',
    deleted: null,
    itemId: 6,
  },
  {
    id: 4,
    title: '@nestjs/config',
    descrip:
      'Esto instalará el módulo de configuración en tu proyecto NestJS, que te permitirá gestionar variables de entorno y otras configuraciones de manera sencilla.',
    image: 'yarn add @nestjs/config',
    create: '2024-09-27T22:35:30.346Z',
    deleted: null,
    itemId: 6,
  },
  {
    id: 6,
    title: 'Activar las variables de entorno',
    descrip: 'en el app.module',
    image:
      'imports: [\n    ConfigModule.forRoot({\n      isGlobal: true,\n    }),',
    create: '2024-09-27T22:40:34.719Z',
    deleted: null,
    itemId: 6,
  },
  {
    id: 7,
    title: '.env',
    descrip: 'en un archivo .env declaramos nuestras variables de entorno',
    image:
      'POSTGRES_HOST="localhost"\nPOSTGRES_PORT=5432\nPOSTGRES_USERNAME="postgres"\nPOSTGRES_PASSWORD="kevin22"\nPOSTGRES_DATABASE="m6nueldb"\nPOSTGRES_SSL="false"',
    create: '2024-09-27T22:41:48.416Z',
    deleted: null,
    itemId: 6,
  },
  {
    id: 8,
    title: 'Postgresql',
    descrip:
      'Instalamos las dependencias necesarias para trabajar con postgresql',
    image: 'yarn add @nestjs/typeorm typeorm pg',
    create: '2024-09-27T22:43:35.425Z',
    deleted: null,
    itemId: 6,
  },
  {
    id: 9,
    title: 'conexión a base de datos',
    descrip:
      'La conexion a la db seria de la siguiente manera en el app.module',
    image:
      "@Module({\n  imports: [\n    ConfigModule.forRoot({\n      isGlobal: true,\n    }),\n    TypeOrmModule.forRoot({\n      type: 'postgres',\n      host: process.env.POSTGRES_HOST,\n      port: parseInt(process.env.POSTGRES_PORT),\n      username: process.env.POSTGRES_USERNAME,\n      password: process.env.POSTGRES_PASSWORD,\n      database: process.env.POSTGRES_DATABASE,\n      autoLoadEntities: true,\n      synchronize: true,\n      ssl: process.env.POSTGRES_SSL === 'true',\n      extra: {\n        ssl:\n          process.env.POSTGRES_SSL === 'true'\n            ? {\n                rejectUnauthorized: false,\n              }\n            : null,\n      },\n    }),\n  ],\n  controllers: [],\n  providers: [],\n})",
    create: '2024-09-27T22:46:42.661Z',
    deleted: null,
    itemId: 6,
  },
  {
    id: 10,
    title: 'Generando un nuevo recurso',
    descrip:
      'este comando nos crea un crud completo con modulo, servicio y controlador.',
    image: 'nest g res NOMBRE --no-spec',
    create: '2024-09-27T23:05:37.701Z',
    deleted: null,
    itemId: 6,
  },
  {
    id: 11,
    title: 'Configura un ValidationPipe global en NestJS',
    descrip:
      'Un ValidationPipe es un tipo de "pipe" que se usa para validar y transformar los datos entrantes en las solicitudes.',
    image:
      'app.useGlobalPipes(\n  new ValidationPipe({\n    whitelist: true,\n    forbidNonWhitelisted: true,\n    transform: true,\n  }),\n);',
    create: '2024-09-27T23:15:30.049Z',
    deleted: null,
    itemId: 6,
  },
  {
    id: 12,
    title: 'CORDS',
    descrip:
      'La línea de código app.enableCors(); en una aplicación NestJS habilita CORS (Cross-Origin Resource Sharing), que es un mecanismo de seguridad que permite o restringe las solicitudes HTTP entre diferentes dominios.',
    image: 'app.enableCors();',
    create: '2024-09-27T23:18:10.793Z',
    deleted: null,
    itemId: 6,
  },
  {
    id: 13,
    title: 'setGlobalPrefix (Opcional)',
    descrip:
      "La línea app.setGlobalPrefix('api/v1'); en una aplicación NestJS establece un prefijo global para todas las rutas de tu aplicación. Esto significa que todas las rutas o endpoints de la API estarán precedidas por ese prefijo.",
    image: "app.setGlobalPrefix('api/v1');",
    create: '2024-09-27T23:19:33.064Z',
    deleted: null,
    itemId: 6,
  },
  {
    id: 14,
    title: 'Class-Validator y Class-transformer',
    descrip: 'Instalaciones necesarias para el procesamientos de los datos',
    image:
      'yarn add class-validator class-transformer\n\n1. class-validator:\nEste paquete se usa para validar los datos de entrada basados en decoradores. Te permite definir reglas de validación directamente en tus clases o DTOs usando decoradores como @IsString(), @IsInt(), @IsNotEmpty(), entre otros.\n\n2. class-transformer:\nEste paquete se utiliza para transformar los objetos de entrada en instancias de clases específicas. En el contexto de NestJS, se usa principalmente para convertir los datos entrantes (que vienen como objetos planos) en instancias de las clases que has definido, como los DTOs.',
    create: '2024-09-27T23:22:11.555Z',
    deleted: null,
    itemId: 6,
  },
];
