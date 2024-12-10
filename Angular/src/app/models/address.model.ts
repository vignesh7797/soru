export class AddressModel{
    name:string | undefined;
    country : string | undefined;
    city :string | undefined;
    place : string | undefined;
    postal: number | undefined;
    firstname : string | undefined;
    lastname : string | undefined;
    email : string | undefined;
    phone : number | undefined;
    address : string | undefined;
    isEdit? : boolean;
    
    constructor(data:any){
        if(data){
            this.name = data.name;
            this.country = data.country;
            this.city = data.city;
            this.place = data.place;
            this.postal = data.postal;
            this.firstname = data.firstname;
            this.lastname = data.lastname;
            this.email = data.email;
            this.phone = data.phone;
            this.address = data.address;
            this.isEdit = data.isEdit || false;
        }
    }
}