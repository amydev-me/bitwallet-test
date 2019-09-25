
## Common Setup

Clone
```bash
git clone https://github.com/amydev-me/bitwallet-test.git
```
```bash
cd bitwallet-test
```

```bash
npm install
```
copy env file 
```
cp .env.example .env
```
Setup .env file
```
PORT = 3000
DB_USERNAME=USERNAME
DB_PASSWORD=SECRET
DB_DATABASE= DATABASE
DB_HOST =127.0.0.1
```

## Run

```bash
npm run dev
```
## API

Best Selling Price API
```
http://HOST:PORT/api/get/best-selling-price
```