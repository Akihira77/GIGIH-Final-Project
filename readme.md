# Front End

## Folder Structure

```MD
📦Final-Project-GIGIH-Frontend
 ┣ 📂public
 ┃ ┗ 📜vite.svg
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂Body
 ┃ ┃ ┃ ┣ 📜Body.tsx
 ┃ ┃ ┃ ┣ 📜BodyContainer.tsx
 ┃ ┃ ┃ ┣ 📜BodyStyled.ts
 ┃ ┃ ┃ ┗ 📜types.d.ts
 ┃ ┃ ┣ 📂Card
 ┃ ┃ ┃ ┣ 📜Thumbnail.tsx
 ┃ ┃ ┃ ┗ 📜ThumbnailStyled.ts
 ┃ ┃ ┣ 📂Drawer
 ┃ ┃ ┃ ┣ 📜DrawerExample.tsx
 ┃ ┃ ┃ ┗ 📜DrawerExampleStyled.ts
 ┃ ┃ ┣ 📂Navbar
 ┃ ┃ ┃ ┣ 📜Navbar.tsx
 ┃ ┃ ┃ ┣ 📜NavbarContainer.tsx
 ┃ ┃ ┃ ┣ 📜NavbarStyled.ts
 ┃ ┃ ┃ ┗ 📜types.d.ts
 ┃ ┃ ┗ 📂Video
 ┃ ┃ ┃ ┣ 📂CommentSection
 ┃ ┃ ┃ ┃ ┣ 📜CommentList.tsx
 ┃ ┃ ┃ ┃ ┣ 📜CommentSection.tsx
 ┃ ┃ ┃ ┃ ┗ 📜YourProfile.tsx
 ┃ ┃ ┃ ┣ 📂ProductSection
 ┃ ┃ ┃ ┃ ┗ 📜ProductList.tsx
 ┃ ┃ ┃ ┣ 📂VideoSection
 ┃ ┃ ┃ ┃ ┣ 📜MainVideo.tsx
 ┃ ┃ ┃ ┃ ┗ 📜Video.tsx
 ┃ ┃ ┃ ┣ 📜types.d.ts
 ┃ ┃ ┃ ┗ 📜VideoStyled.ts
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📜constant.ts
 ┃ ┃ ┣ 📜cookie.ts
 ┃ ┃ ┣ 📜fetchApi.ts
 ┃ ┃ ┣ 📜reducer.ts
 ┃ ┃ ┣ 📜StateProvider.tsx
 ┃ ┃ ┗ 📜types.d.ts
 ┃ ┣ 📜App.tsx
 ┃ ┣ 📜main.tsx
 ┃ ┗ 📜vite-env.d.ts
 ┣ 📜.env
 ┣ 📜.eslintrc.cjs
 ┣ 📜.gitignore
 ┣ 📜index.html
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜tsconfig.json
 ┣ 📜tsconfig.node.json
 ┗ 📜vite.config.ts
```

## How To Run

Create .env file in the root project that need contains `VITE_WS_URL` and `VITE_API_URL`

In the terminal run

```
npm install && npm run dev
```

# Backend

## Folder Structure

```md
📦Backend
┣ 📂node_modules
┣ 📂dist
┃ ┣ 📂controllers
┃ ┃ ┣ 📜product.controller.js
┃ ┃ ┣ 📜user.controller.js
┃ ┃ ┗ 📜video.controller.js
┃ ┣ 📂data
┃ ┃ ┗ 📜db.js
┃ ┣ 📂middlewares
┃ ┃ ┗ 📜validateIdRequest.js
┃ ┣ 📂models
┃ ┃ ┣ 📜product.model.js
┃ ┃ ┣ 📜user.model.js
┃ ┃ ┣ 📜userComment.model.js
┃ ┃ ┣ 📜video.model.js
┃ ┃ ┗ 📜videoThumbnail.model.js
┃ ┣ 📂routes
┃ ┃ ┣ 📜product.routes.js
┃ ┃ ┣ 📜user.routes.js
┃ ┃ ┗ 📜video.routes.js
┃ ┣ 📂services
┃ ┃ ┣ 📂mappings
┃ ┃ ┃ ┣ 📜comment.mapping.js
┃ ┃ ┃ ┣ 📜product.mapping.js
┃ ┃ ┃ ┣ 📜user.mapping.js
┃ ┃ ┃ ┗ 📜video.mapping.js
┃ ┃ ┗ 📂repositories
┃ ┃ ┃ ┣ 📜base.service.js
┃ ┃ ┃ ┣ 📜product.service.js
┃ ┃ ┃ ┣ 📜user.service.js
┃ ┃ ┃ ┣ 📜userComment.service.js
┃ ┃ ┃ ┣ 📜video.service.js
┃ ┃ ┃ ┗ 📜videoThumbnail.service.js
┃ ┗ 📜index.js
📜.env
📜.gitignore
📜package-lock.json
📜package.json
📜tsconfig.json
```

## The Flow

`Request -> Routes -> Controller -> Service -> Model/Data Access`

## How To Run

Create .env file in the root project that need contains `MONGO_URI_DEV`, `PORT`, `ENV`

Import `Midterm - GIGIH.postman_collection.json` to your postman, insomnia, etc...  
After that do the seeding data first and use `{{api_url}}` + /endpoint for every request in postman

After that do the `seeding_data` first so data in

you also need to open the MongoDB Compass or MongoDB extension in VSCode to use the `_id` for some object to work with the endpoint like `{ :id, :userId, :videoId }`

in the terminal run

```cli
npm install && npm run dev
```

## Seeding Data

**POST /seed-data**

---

Seeding data for User, Product, Video, User Comment, Video Thumbnail.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
  - **Code:** 201  
    **Content:** `{ message: "Seeding data is success" }`

## Users

- User Object

```TS
{
  _id: mongoose.Schema.Types.ObjectId;
  username: string;
  password: string;
  CreatesdAt: Date;
  updatedAt: Date;
}
```

- User DTO (Data Transfer Object)

```TS
{
  username: string;
}
```

- User Comment Object

```TS
  username: string;
  videoId: mongoose.Schema.Types.ObjectId;
  comment: string;
  CreatesdAt: Date;
  updatedAt: Date;
```

- User Comment DTO

```TS
{
    username: string;
    CreatedAt: Date;
    comment: string;
}
```

### **GET /users**

---

Returns all users in the system.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200  
    **Content:**

```TS
{
  data: {
    users: [
          { <user_dto> },
          { <user_dto> },
          { <user_dto> }
    ]
  }
}
```

- **Error Response:**
  - **Code:** 400  
    **Content:** `{ message: "Something has happened", error: error }`

### **GET /users/:id**

---

Returns the specified user.

- **URL Params**  
  _Required:_ `id=[string]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200  
    **Content:** `{ user: <user_dto> }`
- **Error Response:**
  - **Code:** 404  
    **Content:** `{ message : "User does not exist" }`  
    OR
  - **Code:** 400  
    **Content:** `{ message: "Something has happened", error: error }`

### **POST /users/login**

---

Login.

- **URL Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Data Params**

```TS
{
  username: string,
  password: string
}
```

- **Success Response:**

  - **Code:** 200  
    **Content:** `{ message:`welcome ${username}`}`

- **Error Response:**
  - **Code:** 404  
    **Content:** `{ message: "User does not exists" }`
  - **Code:** 400  
    **Content:** `{ message: "Something has happened", error: error }`

### **DELETE /users/:id**

---

Delete the specified user.

- **URL Params**  
  _Required:_ `id=[string]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200  
    **Content:** `{ <user_object> }`
- **Error Response:**
  - **Code:** 404  
    **Content:** `{ message : "User does not exist" }`  
    OR
  - **Code:** 400  
    **Content:** `{ message: "Something has happened", error: error }`

### **PUT /users/:id**

---

Update the specified user.

- **URL Params**  
  _Required:_ `id=[string]`
- **Data Params**

```TS
{
  password: string;
}
```

- **Headers**  
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200  
    **Content:**

```TS
{
  user: {
    username: string,
    password: string
  }
}
```

- **Error Response:**
  - **Code:** 404  
    **Content:** `{ message : "User does not exist" }`  
    OR
  - **Code:** 400  
    **Content:** `{ message: "Something has happened", error: error }`

### **GET /users/comments/get-all**

---

Returns all users comment in the system.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200  
    **Content:**

```TS
{
  data: {
    userComments: [
      { <user_comment_dto> },
      { <user_comment_dto> },
      { <user_comment_dto> }
    ]
  }
}
```

- **Error Response:**
  - **Code:** 400  
    **Content:** `{ message: "Something has happened", error: error }`

### **GET /users/comments/get-comment-from-video/:videoId**

---

returns users comment from the specified video.

- **URL Params**  
  _Required:_ `videoId=[string]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200  
    **Content:**

```TS
{
  data: {
    userComments: [
      { <user_comment_dto> },
      { <user_comment_dto> },
      { <user_comment_dto> }
    ]
  }
}
```

- **Error Response:**
  - **Code:** 404  
    **Content:** `{ message : "Video does not exist" }`  
    OR
  - **Code:** 400  
    **Content:** `{ message: "Something has happened", error: error }`

### **POST /users/comments/submit-comment/:videoId**

---

Creates new user comment from a video and returns the new object.

- **URL Params**  
  _Required:_ `videoId=[string]`
- **Headers**  
  Content-Type: application/json
- **Data Params**

```TS
{
  username: string,
  comment: string
}
```

- **Success Response:**

  - **Code:** 201  
    **Content:** `{ userComments: <user_comment_> }`

- **Error Response:**
  - **Code:** 404  
    **Content:** `{ message: "User does not exists" }`  
    OR
  - **Code:** 404  
    **Content:** `{message: "Video does not exists"}`
  - **Code:** 400  
    **Content:** `{ message: "Something has happened", error: error }`

## Product

- Product Object

```TS
{
  _id: mongoose.Schema.Types.ObjectId;
  title: string;
  price: number;
  url: string;
  image?: string;
  userId: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
```

- Product DTO

```TS
{
    url: string;
    title: string;
    price: number;
    image?: string | undefined;
}
```

- Video Product DTO

```TS
{
    id?: any;
    url: string;
    title: string;
    price: number;
    image?: string | undefined;
    userId: Schema.Types.ObjectId;
}
```

### **GET /products**

Returns all products in the system

- **URL Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Data Params**  
  None
- **Success Response:**
  - **Code:** 200  
    **Content:**

```TS
{
  data: {
    products: [
      { <product_dto> }
      { <product_dto> }
      { <product_dto> }
    ]
  }
}
```

- **Error Response:**
  - **Code:** 400  
    **Content:** `{ message: "Something has happened", error: error }`

### **GET /products/get-product-list-by-videoId/:videoId**

Returns all products for the specified video

- **URL Params**  
  _Required:_ `videoId=[string]`
- **Headers**  
  Content-Type: application/json
- **Data Params**  
  None
- **Success Response:**
  - **Code:** 200  
    **Content:**

```TS
{
  data: {
    products : [
      { <video_product_dto> }
      { <video_product_dto> }
      { <video_product_dto> }
    ]
  }
}
```

- **Error Response:**
  - **Code:** 400  
    **Content:** `{ message: "Something has happened", error: error }`  
    OR
  - **Code:** 404  
    **Content:** `{message: "Video does not exists" }`

### **GET /products/get-products-by-user/:userId**

Returns all products for the specified user

- **URL Params**  
  _Required:_ `userId=[string]`
- **Headers**  
  Content-Type: application/json
- **Data Params**  
  None
- **Success Response:**
  - **Code:** 200  
    **Content:**

```TS
{
  data: {
    products : [
      { <product_dto> }
      { <product_dto> }
      { <product_dto> }
    ]
  }
}
```

- **Error Response:**
  - **Code:** 400  
    **Content:** `{ message: "Something has happened", error: error }`  
    OR
  - **Code:** 404  
    **Content:** `{message: "User does not exists" }`

### **POST /products**

Creates a new product and returns then new object

- **URL Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Data Params**

```TS
{
    title: string;
    price: number;
    url: string;
    image?: string | undefined;
    userId: Schema.Types.ObjectId;
}
```

- **Success Response:**

  - **Code:** 201
    **Content:**

```TS
{
  data: {
    product: {<product_object>}
  }
}
```

- **Error Response:**
  - **Code:** 400  
    **Content:** `{ message: "Something has happened", error: error }`

## Video

- Video Object

```TS
{
  productId: mongoose.Schema.Types.ObjectId;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}
```

- Video DTO

```TS
{
    url: string;
    productId: Schema.Types.ObjectId;
}
```

- Video Thumbnail Object

```TS
{
  videoName: string;
  videoId: Schema.Types.ObjectId;
  urlImage: string;
  createdAt: Date;
  updatedAt: Date;
}
```

- Video Thumbnail DTO

```TS
{
    videoId: Schema.Types.ObjectId;videoName: string;
    urlImage: string[];
}
```

- Video Thumbnail Product DTO

```TS
{
  videoName: string;
  thumbnailId: any;
  videoId: any;
  urlVideo: any;
  user: string;
  product: Omit<any, never> | undefined;
}
```

### **GET /videos**

Returns all videos in the system

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200  
    **Content:**

```TS
{
  data: {
    videos: [
      { <video_dto> },
      { <video_dto> },
      { <video_dto> }
    ]
  }
}
```

- **Error Response:**
  - **Code:** 400  
    **Content:** `{ message: "Something has happened", error : error }`

Returns all thumbnail images from the specified video in the system

- **URL Params**  
  _Required:_ `videoId=[string]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200  
    **Content:**

```TS
{
  data: {
    thumbnails: {
          <video_thumbnail_dto>
        }
  }
}
```

- **Error Response:**
  - **Code:** 400  
    **Content:** `{ message: "Something has happened", error : error }`  
    OR
  - **Code:** 404  
    **Content:** `{ message: "Video does not exists" }`

### **GET /videos/:videoId**

Returns video for the specified video

- **URL Params**  
  _Required:_ `videoId=[string]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200  
    **Content:**

```TS
{
  data: {
    productId
    url,
    userId,
  }
}
```

- **Error Response:**
  - **Code:** 400  
    **Content:** `{ message: "Something has happened", error : error }`

### **GET /videos/search/:searchtext**

Returns all videos that contains searchText on the video name

- **URL Params**  
  _Required:_ `searchText=[string]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200  
    **Content:**

```TS
{
  data: {
    <video_thumbnail_product_dto>
  }
}
```

- **Error Response:**
  - **Code:** 400  
    **Content:** `{ message: "Something has happened", error : error }`

### **GET /videos/thumbnails/:videoId**

Returns all thumbnail images from the specified video in the system

- **URL Params**  
  _Required:_ `videoId=[string]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200  
    **Content:**

```TS
{
  data: {
    thumbnails: {
          <video_thumbnail_dto>
        }
  }
}
```

- **Error Response:**
  - **Code:** 400  
    **Content:** `{ message: "Something has happened", error : error }`  
    OR
  - **Code:** 404  
    **Content:** `{ message: "Video does not exists" }`

### **POST /videos**

Creates a new Video and returns the new object.

- **URL Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Data Params**

```TS
{
    productId: string;
    url: string;
}
```

- **Success Response:**
- **Code:** 200  
  **Content:**

```TS
{
  data: {
    video: [
      { <video_object> },
    ]
  }
}
```

### **POST /videos/thumbnails/:videoId**

Creates a new thumbnail image for the specified Video it can be an url or file

- **URL Params**  
  _Required:_ `videoId=[string]`
- **Headers**  
  Content-Type: application/json
- **Data Params**

```TS
{
    urlImage: string | null;
}
```

OR  
`file`

- **Success Response:**

  - **Code:** 201  
     **Content:** `{
  data: {
    thumbnail: [
      { <video_thumbnail_object> }
    ]
  }
}`

- **Error Response:**
  - **Code:** 400  
    **Content:** `{ message: "Something has happened", error : error }`  
    OR
  - **Code:** 400  
    **Content:** `{ message: "Image was not provided" }`
