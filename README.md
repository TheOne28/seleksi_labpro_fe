# Seleksi_Labpro_FE

Vincent Prasetiya Atmadja  
13520099

## Cara Menjalankan  
Program dapat dijalankan dengan menggunakan package manager.  
Ada 2 cara, menggunakan npm dan yarn  
- npm  
    `npm run dev`
- yarn  
    `yarn run dev`

## Design Pattern  
Design pattern utama yang digunakan untuk frontend hanya composite. Design pattern ini dimanfaatkan dalam pembangunan component yang dibangun oleh bagian yang lebih kecil. 

## Techonology Stack
Berikut ini beberapa dependency yang digunakan
1. express (^4.18.1)  
2. prisma (^4.1.1)
3. typescript (^4.7.4)
4. nodemon (^2.0.19)
5. jsonwebtoken (^8.5.1)
6. memory-cache (^0.2.0)
7. cors (^2.8.5)

Selengkapnya dapat dilihat pada package.json

## Endpoint API

Endpoint yang digunakan adalah 
1. `/profile`, method get dan patch
2. `/mutasi`, method patch, post, dan get
3. `/history`, method get
4. `/authen`, method get, post, dan patch