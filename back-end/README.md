# back end

create file .env in folder back-end
### .env
PORT = write your Port

DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"

#### example  
PORT = 5000

DATABASE_URL="mysql://root:@localhost:3306/postdb"
)

#### open Terminal
> yarn

> yarn prisma migrate dev --name init
