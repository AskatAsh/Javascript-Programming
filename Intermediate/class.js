class teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log("sir is teaching us ICT");
    }
}

const sir = new teacher("Askat sir", "Programming");
console.log(sir);