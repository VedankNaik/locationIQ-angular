export class DBConnectionRequest {
    constructor(
        public Connection: boolean,
        public Server: string,
        public Database: string,
        public Username: string,
        public Password: string
    ){}
}
