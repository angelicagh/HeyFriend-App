# HeyFriend 💛  


**HeyFriend** es una aplicación web sencilla que te permite marcar usuarios como amigos y guardarlos en una lista personalizada. Cada vez que recargas la página, se generan 10 nuevos usuarios aleatorios, pero puedes guardar y recuperar tus amigos en cualquier momento.

---

## 🌐 Demo en vivo

Puedes probar la aplicación directamente en GitHub Pages:  
[👉 Abrir HeyFriend](https://tu-usuario.github.io/heyfriend)

---

## 🚀 Funcionalidades

- 🔄 **Usuarios aleatorios**: se obtienen 10 nuevos usuarios desde [randomuser.me](https://randomuser.me/api/?results=10) cada vez que se inicia la aplicación o se recarga la página.
- ❤️ **Marcar como amigo**: haz clic en el ícono de corazón para añadir un usuario a tu lista de amigos. El corazón se vuelve rojo.
- 💾 **Guardar amigos**: guarda tus amigos en `localStorage` para no perderlos al recargar la página.
- ♻️ **Recuperar amigos**: recupera tus amigos guardados desde `localStorage` y vuelve a mostrarlos en la lista.
- 🗑️ **Eliminar amigos**: borra la lista de amigos y elimina los datos guardados en `localStorage`.

---

## 📱 Diseño responsive
**HeyFriend** está diseñada para adaptarse a distintos tamaños de pantalla. Ya sea que lo uses en móvil, tablet o escritorio, la interfaz se ajusta automáticamente para ofrecer una experiencia fluida y accesible. Esto se logra mediante media queries.

## 🛠️ Tecnologías utilizadas

- **HTML**
- **SCSS**
- **JavaScript**  
- **Vite**
- **Fetch API**  
- **Local Storage**

---

## 📦 Instalación

#### 1. Clona el repo

`git clone https://github.com/tu-usuario/heyfriend.git`

#### 2. Instala las dependencias

`npm install`

#### 3. Despliega la app 

`npm run dev`