# 🟢 Node.js Learning Workspace

> A hands-on collection of mini-projects and experiments covering core Node.js concepts — built while learning backend development with JavaScript.

---

## 📁 Project Structure

```
nodejs/
├── index.js                  # Root-level experiments (fs, os, blocking vs non-blocking I/O)
├── package.json              # Root dependencies (express)
│
├── bcrypt/                   # Password hashing & comparison with bcrypt
│   ├── bcrypt.js
│   └── package.json
│
├── jwt/                      # JSON Web Token authentication with cookies
│   ├── jwt.js
│   └── package.json
│
├── clusters/                 # Multi-core CPU utilization with Node.js Cluster module
│   ├── app.js                # Cluster-aware Express app (spawns workers per CPU core)
│   ├── cluster.js            # Simple single-process Express server (baseline)
│   └── package.json
│
└── streams/                  # File streaming, Buffers, and Gzip compression
    ├── index.js
    ├── sample.txt            # Large input file for stream demo
    ├── sample.zip            # Gzip-compressed output of sample.txt
    └── package.json
```

---

## 🧩 Modules Overview

### 1. 🔐 bcrypt — Password Hashing

**Location:** `bcrypt/bcrypt.js`
**Dependencies:** `bcrypt`, `express`

Demonstrates how to securely hash and compare passwords using the industry-standard **bcrypt** algorithm.

#### Key Concepts Covered
- **Salt generation** — `bcrypt.genSalt(rounds)` generates a cryptographic salt
- **Hashing** — `bcrypt.hash(password, salt)` produces an irreversible hash
- **Comparison** — `bcrypt.compare(plaintext, hash)` safely validates a login attempt

#### How to Run
```bash
cd bcrypt
npm install
node bcrypt.js
# Visit http://localhost:3000
```

#### Code Walkthrough
```js
// Compare a plain-text password against a stored bcrypt hash
bcrypt.compare("Shaswat", "$2b$10$...", function (err, result) {
  if (result) res.send("Password is correct");
  else        res.send("Password is incorrect");
});
```

> **Note:** The `bcrypt.genSalt` + `bcrypt.hash` flow (commented out in code) is what you'd use when a user **registers**. The `bcrypt.compare` flow is used at **login**.

---

### 2. 🔑 JWT — JSON Web Token Authentication

**Location:** `jwt/jwt.js`
**Dependencies:** `jsonwebtoken`, `express`, `cookie-parser`

Demonstrates how to create and verify **JWTs** (JSON Web Tokens) — the standard for stateless authentication in modern APIs.

#### Key Concepts Covered
- **Signing a token** — `jwt.sign(payload, secret)` encodes a payload and signs it
- **Storing in cookies** — `res.cookie("token", token)` persists the token on the client
- **Verifying a token** — `jwt.verify(token, secret)` decodes and validates (see commented `/read` route)

#### How to Run
```bash
cd jwt
npm install
node jwt.js
# Visit http://localhost:3000  →  Token gets created and set as a cookie
```

#### Code Walkthrough
```js
// Sign a JWT with user data
const token = jwt.sign(
  { name: "shaswat", email: "shaswat@example.com" },
  "secret"          // ⚠️ Use process.env.JWT_SECRET in production!
);
res.cookie("token", token);

// --- Verify (from commented /read route) ---
const data = jwt.verify(req.cookies.token, "secret");
console.log(data);
// { name: 'shaswat', email: '...', iat: <timestamp> }
```

> **Security Note:** The `"secret"` key is hardcoded for learning purposes. In a real application, always store secrets in environment variables (`.env` file + `dotenv` package).

---

### 3. ⚙️ Clusters — Multi-Core Scaling

**Location:** `clusters/app.js`, `clusters/cluster.js`
**Dependencies:** `express`, built-in `cluster`, `os`

Demonstrates how Node.js (which is single-threaded) can be scaled across **all available CPU cores** using the built-in `cluster` module.

#### Key Concepts Covered
- **`os.cpus().length`** — detects the number of logical CPU cores on the machine
- **`cluster.isPrimary`** — the primary process forks one worker per CPU core
- **Worker processes** — each worker runs an independent Express server on the same port
- **`process.pid`** — each worker has a unique process ID, visible in responses

#### How to Run
```bash
cd clusters
npm install

# With clustering (scales to all CPU cores)
node app.js

# Without clustering (single process baseline)
node cluster.js
# Visit http://localhost:3000 or http://localhost:8000
```

#### Code Walkthrough
```js
if (cluster.isPrimary) {
  // Fork one worker for each CPU core
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }
} else {
  // Each worker independently runs the Express app
  app.get("/", (req, res) => {
    res.json({ message: `hello from Express ${process.pid}` });
  });
  app.listen(3000);
}
```

> **Why this matters:** Node.js normally runs on a single thread. Clusters allow you to fully utilize modern multi-core CPUs without switching to a different runtime — perfect for CPU-bound or high-traffic scenarios.

---

### 4. 🌊 Streams — Efficient File I/O & Compression

**Location:** `streams/index.js`
**Dependencies:** `express`, `express-status-monitor`, built-in `fs`, `zlib`

Demonstrates how to handle large files **efficiently** using Node.js Streams instead of loading everything into memory at once.

#### Key Concepts Covered
- **`fs.createReadStream`** — reads a file chunk-by-chunk instead of all at once
- **`zlib.createGzip()`** — compresses data on-the-fly using Gzip
- **Piping streams** — `.pipe()` chains streams together elegantly
- **`Buffer`** — low-level binary data representation in Node.js
- **`express-status-monitor`** — real-time server health dashboard at `/status`

#### How to Run
```bash
cd streams
npm install
node index.js
# Visit http://localhost:8000       → Streams sample.txt to the browser
# Visit http://localhost:8000/status → Live server health monitor
```

#### Code Walkthrough
```js
// Pipe: Read file → Gzip compress → Write compressed file
fs.createReadStream("./sample.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("./sample.zip"));

// Stream a large file to the HTTP response in chunks
app.get("/", (req, res) => {
  const stream = fs.createReadStream('./sample.txt', 'utf-8');
  stream.on('data', (chunk) => res.write(chunk));
  stream.on('end',  ()      => res.end());
  stream.on('error', (err)  => res.end('Something went wrong'));
});
```

> **Why Streams?** Loading a 500MB file with `fs.readFile` would spike memory usage. Streams process it in small chunks, keeping memory usage low and making the server far more scalable.

---

### 5. 🧪 Root — Core Node.js Concepts (`index.js`)

**Location:** `index.js`
**Dependencies:** built-in `fs`, `os`

The root-level file contains commented-out experiments exploring the fundamentals of Node.js.

| Experiment | Description |
|---|---|
| `os.cpus().length` | Number of CPU cores available |
| `fs.readFileSync` | **Synchronous** (blocking) file read |
| `fs.readFile` | **Asynchronous** (non-blocking) file read |
| Thread pool | Default thread pool size is 4 (max = CPU cores) |

---

## 🚀 Getting Started

Each module is self-contained. Navigate into any folder and run:

```bash
npm install   # Install dependencies
node <file>   # Run the entry file
```

| Module    | Entry File    | Port   | Command              |
|-----------|---------------|--------|----------------------|
| `bcrypt`  | `bcrypt.js`   | `3000` | `node bcrypt.js`     |
| `jwt`     | `jwt.js`      | `3000` | `node jwt.js`        |
| `clusters`| `app.js`      | `3000` | `node app.js`        |
| `streams` | `index.js`    | `8000` | `node index.js`      |

---

## 📦 Dependencies Summary

| Package                 | Used In       | Purpose                                   |
|-------------------------|---------------|-------------------------------------------|
| `express`               | All modules   | HTTP server framework                     |
| `bcrypt`                | `bcrypt/`     | Password hashing & salting                |
| `jsonwebtoken`          | `jwt/`        | Create & verify JSON Web Tokens           |
| `cookie-parser`         | `jwt/`        | Parse cookies from incoming HTTP requests |
| `express-status-monitor`| `streams/`    | Real-time server monitoring dashboard     |
| `cluster` *(built-in)*  | `clusters/`   | Fork worker processes for each CPU core   |
| `fs` *(built-in)*       | `streams/`    | File system read/write streams            |
| `zlib` *(built-in)*     | `streams/`    | Gzip compression                          |
| `os` *(built-in)*       | `clusters/`   | Detect number of CPU cores                |

---

## 💡 Key Learnings

- **Blocking vs Non-blocking I/O** — Node.js is non-blocking by nature; always prefer async APIs
- **Bcrypt cost factor** — Higher salt rounds = slower hash = more secure (10 is a good default)
- **JWT is stateless** — the server doesn't store sessions, the token carries all the data
- **Cluster = horizontal scaling** — one process per CPU core dramatically increases throughput
- **Streams = memory efficiency** — never load large files into memory; stream them instead

---

## 👤 Author

**Shaswat Choudhary**

---

> *This repo is a personal learning journal — each folder represents a concept explored hands-on.*
