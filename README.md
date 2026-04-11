# SpooSpace 🌟

A full-stack Progressive Web App (PWA) that delivers mood-based quotes from K-pop idols. Users select their current mood and receive beautifully presented quote cards featuring idol photos and quotes, with swipe-to-next interaction optimized for mobile.

Live at → **[spoo-space.vercel.app](https://spoo-space.vercel.app)**

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Angular 19 (Standalone Components) |
| Backend | Java Spring Boot 3.3 |
| Database | MySQL (Railway) |
| Image Storage | Cloudinary |
| Frontend Hosting | Vercel |
| Backend Hosting | Railway |
| Styling | SCSS with CSS Custom Properties |
| PWA | Angular Service Worker (`@angular/pwa`) |

---

## Features

- **Mood-based quote browsing** — Five moods (Comfort, Confidence, Soft, Happy, Inspiration), each with a dedicated quote collection
- **Swipeable quote cards** — Drag in any direction to move to the next quote, with smooth physics-based animation
- **No-repeat queue** — All quotes for a mood are shuffled into a queue. A quote only reappears after every other quote in that mood has been seen
- **Idol photos** — Each quote card displays a dedicated photo of the idol served via Cloudinary CDN
- **Dark mode toggle** — Switches between light and dark themes, persisted via CSS class on the document root
- **PWA support** — Installable on Android and iOS home screens, runs fullscreen with no browser chrome
- **Animated star field** — Ambient twinkling gold particle background using CSS keyframe animations
- **Responsive design** — Built mobile-first, optimized for Samsung Galaxy S25 and similar Android devices

---

## Architecture

```
SpooSpace/
├── SpooSpace-frontend/          # Angular PWA
│   └── SpooSpace/
│       └── src/
│           └── app/
│               ├── components/
│               │   ├── quote-card/      # Swipeable card with touch + mouse drag
│               │   ├── star-field/      # Animated background particles
│               │   └── theme-toggle/    # Dark/light mode switch
│               ├── pages/
│               │   ├── mood-selection/  # Home screen with mood tiles
│               │   └── quotes-page/    # Quote stack with swipe logic
│               └── services/
│                   └── quote.service.ts # HTTP client to Spring Boot API
│
└── SpooSpace-backend/           # Spring Boot REST API
    └── SpooSpace/
        └── src/main/java/com/app/SpooSpace/
            ├── controller/      # REST endpoints
            ├── service/         # Business logic
            ├── repository/      # JPA data access
            ├── entity/          # JPA entities + enums
            ├── dto/             # Data Transfer Objects
            └── utility/         # Global exception handler + logging aspect
```

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/v1/health` | Health check |
| `GET` | `/api/v1/quotes/random?mood={mood}` | Get one random quote by mood |
| `GET` | `/api/v1/quotes/all?mood={mood}` | Get all quotes for a mood |

**Mood values:** `COMFORT` · `CONFIDENCE` · `SOFT` · `HAPPY` · `INSPIRATION`

**Example response:**
```json
{
  "id": 1,
  "quoteText": "Your presence can give happiness.",
  "memberName": "Jin",
  "groupName": "BTS",
  "mood": "COMFORT",
  "imageUrl": "https://res.cloudinary.com/example/image/upload/jin1.jpg"
}
```

---

## Data Model

```java
@Entity
@Table(name = "quotes")
public class Quote {
    Long id;
    String quoteText;
    String memberName;
    String groupName;
    Mood mood;           // Enum: COMFORT, CONFIDENCE, SOFT, HAPPY, INSPIRATION
    String imageUrl;     // Cloudinary CDN URL
}
```

---

## Running Locally

### Prerequisites
- Java 21
- Node.js 18+
- Angular CLI (`npm install -g @angular/cli`)
- Maven

### Backend

```bash
cd SpooSpace-backend/SpooSpace
./mvnw spring-boot:run
```

Runs on `http://localhost:8080` using the `local` Spring profile with an H2 in-memory database. No MySQL installation needed for local development.

### Frontend

```bash
cd SpooSpace-frontend/SpooSpace
npm install
ng serve
```

Runs on `http://localhost:4200`

---

## Environment Configuration

The backend uses Spring profiles to switch between local and production configuration automatically.

### Local (`application-local.properties`)
- H2 in-memory database
- No external dependencies needed

### Production (`application-prod.properties`)
Railway injects the following environment variables automatically:

| Variable | Source |
|---|---|
| `MYSQLHOST` | Railway MySQL service |
| `MYSQLPORT` | Railway MySQL service |
| `MYSQLDATABASE` | Railway MySQL service |
| `MYSQLUSER` | Railway MySQL service |
| `MYSQLPASSWORD` | Railway MySQL service |
| `CORS_ALLOWED_ORIGINS` | Set manually in Railway variables |
| `SPRING_PROFILES_ACTIVE` | Set to `prod` in Railway variables |

---

## Deployment

### Backend → Railway
1. Connect GitHub repo to Railway
2. Set **Root Directory** to `SpooSpace-backend/SpooSpace`
3. Set **Build Command** to `./mvnw clean package -DskipTests`
4. Set **Start Command** to `java -jar target/*.jar`
5. Add a MySQL database service to the Railway project
6. Set environment variables `SPRING_PROFILES_ACTIVE=prod` and `CORS_ALLOWED_ORIGINS=https://your-vercel-url`

### Frontend → Vercel
1. Connect GitHub repo to Vercel
2. Set **Root Directory** to `SpooSpace-frontend/SpooSpace`
3. Set **Build Command** to `ng build --configuration production`
4. Set **Output Directory** to `dist/SpooSpace/browser`
5. Add `vercel.json` to handle Angular client-side routing:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## PWA Installation

On Android (Chrome):
1. Open the app URL in Chrome
2. Tap the three-dot menu → **Add to Home screen**
3. Tap **Install**

The app opens fullscreen with no browser address bar, identical to a natively installed app.

---

## Backend Highlights

### Global Exception Handler
All exceptions are caught centrally and returned as structured JSON responses with timestamp, status code, and message — no raw stack traces exposed to the client.

### Logging Aspect (AOP)
Spring AOP intercepts all controller method calls and logs request and response events automatically, without any logging code in the controllers themselves.

### No-repeat shuffle (Frontend)
The frontend fetches all quotes for a selected mood in a single API call, shuffles them using a Fisher-Yates algorithm, and cycles through the shuffled queue. When the last quote is reached, the queue reshuffles before looping — ensuring she never sees the same ordering twice in a row.

---

## Image Pipeline

1. Photos sourced and resized to **800×1000px** (4:5 portrait ratio) at 80% JPEG quality
2. Uploaded to **Cloudinary** for CDN delivery
3. Cloudinary URL stored in the `image_url` column of the MySQL database
4. Angular renders the image with `object-fit: cover` and `object-position: top center` to naturally frame the idol's face

---

## License

MIT License — feel free to fork and adapt for your own projects.
