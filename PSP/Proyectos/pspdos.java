import java.io.*;
import java.nio.file.Files;
import java.util.Scanner;

public class pspdos{

    public static void main(String[] args){

        leeFichero("ejemplo.txt");
        String contenido =Files.readString(C:\Users\FernandoMorenoHergue\Desktop\2DAM\PSP\Proyectos\ejemplo.txt);


        System.out.println("Introduce el texto a buscar");
        Scanner sc= new Scanner(System.in);
        String cadena = sc.nextLine();
        int contador= 0;
        while(contenido.indexOf(cadena)!=-1){
            contenido=contenido.substring(contenido.indexOf(cadena)+cadena.length());
            contador++;
        } 
        System.out.println("El numero de veces que se repite es "+contador);

      }






      public static void leeFichero(String nomfichero){
        
        try {
            //Lectura
            FileReader fr= new FileReader(new File(nomfichero));
            BufferedReader br= new BufferedReader(fr);
            String linea;
            while((linea=br.readLine()) != null){
                System.out.println(linea);
                
    }


 } catch (IOException e) {
    // TODO Auto-generated catch block
    System.out.println("No se ha encontrado el archivo");
 }
      }




    }



