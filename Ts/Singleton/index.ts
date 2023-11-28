//Investigar sobre POO si no se sabe que es static
class SingletonTs{
    private static instance: SingletonTs;

    public random: number;

    //Protejo el constructor para crear un objeto desde un metodo que analice primero si existe una instancia
    private constructor(){
        //Para evaluar en los console.log que sea el mismo, no es necesario, solo es de referencia
        this.random = Math.random();
    }

    public static getInstance(): SingletonTs{
        if(!this.instance){
            this.instance = new SingletonTs();
        }
        return this.instance;
    }
}

const Sing: SingletonTs = SingletonTs.getInstance();
console.log(Sing)