# _Lamdatest_
---
## Server Requirements

* PHP >= 7.1.3
* OpenSSL PHP Extension
* PDO PHP Extension
* Mbstring PHP Extension
* Tokenizer PHP Extension
* XML PHP Extension
* Ctype PHP Extension
* JSON PHP Extension

## Getting this up and running

### 1. _Cloning the project_
* CD into your working directory
* Open Terminal and run : git clone https://github.com/ascodelab/lamdatest_lnova.git
* cd lamdatest_lnova
### 2. Installing Laravel
* composer install
### 3. Installing frontend dependencies 
* npm install
* npm run dev
### 4. Configuration
edit .env and set database credentials

DB_DATABASE=nova
DB_USERNAME=anil
DB_PASSWORD=123456

### 5. Migrating Database using below command

    $ php artisan migrate
    
### 6. Add user to laravel nova

    $ php artisan nova:user

### 7. Run Laravel application

    $ php artisan serve

### 8 http://localhost:8000/nova/login


